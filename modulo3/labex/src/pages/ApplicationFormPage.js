import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router'
import { useForm } from '../Components/Hooks/FormHook'
import { ButtonsFormArea, ContainerAplicartionForm } from '../PagesCss/ApplicationFormPage.css'
import { applyToTrip, getCountries, getTrips } from '../Services.js/Api'

export default function ApplicationFormPage(props) {

    const [place, setPlace] = useState('')
    const [countries, setCountries] = useState([])
    const [trips, setTrips] = useState([])

    const [form,onChange] = useForm({
        "name": "",
        "age": '',
        "applicationText": "",
        "profession": "",
        "country": ""

    })


    useEffect(() => {
        const tripRequest = getTrips()
        const contriesRequest = getCountries()

        tripRequest.then((res) => {
            setTrips(res.trips)
        }).catch((err)=>{
            console.log(err)
        })

        contriesRequest.then((res)=>{
            let contriesName = res.map((country)=>{
                return country.nome.abreviado
            })

            setCountries(contriesName)
        }).catch((err)=>{
            console.log(err)
        })
        
    }, [])


    const onChangeValues = (e) => {
        
        switch(e.target.name){
            case 'place':
                setPlace(e.target.value)
                break;
            default:
                alert("Contacte o administrador erro: 02")
        }
    }

    const handleClick = (e) => {
        e.preventDefault()

        const tripId = trips.filter((trip) => {
            return trip.name === place
        })

        const apply = applyToTrip(form, tripId[0].id)
        apply.then((res)=>{
            if(res.message === 'Application registered successfully'){
                alert('Inscrição realizada com sucesso!')
            }
        })
    }

    const renderOption = ()=>{
        return trips.map((trip) => {
            return <option key={trip.id}>{trip.name}</option>

        })
    }

    const renderCountries = ()=>{
        return countries.map((country)=>{
            return <option key={country}>{country}</option>
        })

    }
    const history = useNavigate()
    return (
        <div>
            <ContainerAplicartionForm>
            <h2>Inscreva-se para uma viagem</h2>
            <form onSubmit={handleClick}>
                <select 
                    name="place" 
                    value={place} 
                    onChange = {onChangeValues}
                    required
                >
                    <option>Escolha uma Viagem</option>
                    {renderOption()}
                </select>
                <input
                    type="text"
                    value={form.name}
                    onChange={onChange}
                    placeholder="Nome"
                    name="name"
                    required
                />
                <input
                    type="number"
                    value={form.age}
                    onChange={onChange}
                    placeholder="idade"
                    name="age"
                    required
                />
                <input
                    type="text"
                    value={form.applicationText}
                    onChange={onChange}
                    placeholder="Texto de Candidatura"
                    name="applicationText"
                    required
                />
                <input
                    type="text"
                    value={form.profession}
                    onChange={onChange} 
                    placeholder="Profissão"
                    name="profession"
                    required
                />
                <select 
                    name="country" 
                    onChange={onChange}
                    value={form.country}
                    required
                >
                    <option>País de origem</option>
                    {renderCountries()}
                </select>
                <ButtonsFormArea>
                    <button>enviar</button>
                    <button onClick = {() => history(-1)}>voltar</button>
                </ButtonsFormArea>
            </form>
        </ContainerAplicartionForm>
        </div>
    )
}
