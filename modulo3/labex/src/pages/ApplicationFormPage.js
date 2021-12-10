import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router'
import { useForm } from '../Components/Hooks/FormHook'
import { ButtonsFormArea, ContainerAplicartionForm } from '../PagesCss/ApplicationFormPage.css'
import { getCountries, getTrips } from '../Services.js/Api'

export default function ApplicationFormPage(props) {

    const [place, setPlace] = useState('')
    const [age, setAge] = useState(0)
    const [appText, setAppText] = useState('')
    const [profession, setProfession] = useState('')
    const [name, setName] = useState('')
    const [country, setCountry] = useState('')
    const [countries, setCountries] = useState([])
    const [trips, setTrips] = useState([])

    const [form,onChange] = useForm({
        "name": "Astrodev",
        "age": 20,
        "applicationText": "Quero muuuuuuito ir!!!",
        "profession": "Chefe",
        "country": "Brasil"

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
            case 'name':
                setName(e.target.value)
                break;
            case 'age':
                setAge(e.target.value)
                break
            case 'place':
                setPlace(e.target.value)
                break;
            case 'applicationText':
                setAppText(e.target.value)
                break
            case 'profession':
                setProfession(e.target.value)
                break
            case 'place':
                setPlace(e.target.value)
                break
            default:
                alert("Contacte o administrador erro: 02")
        }
    }

    const handleClick = (e) => {
        e.preventDefault()
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
            <form onSubmit={handleClick}></form>
            <select 
                name="place" 
                value={place} 
                onChange = {onChangeValues}
            >
                <option>Escolha uma Viagem</option>
                {renderOption()}
            </select>
            <input
                type="text"
                value={name}
                onChange={onChangeValues}
                placeholder="Nome"
                name="name"
            />
            <input
                type="number"
                value={age}
                onChange={onChangeValues}
                placeholder="idade"
                name="age"
            />
            <input
                type="text"
                value={appText}
                onChange={onChangeValues}
                placeholder="Texto de Candidatura"
                name="applicationText"
            />
            <input
                type="text"
                value={profession}
                onChange={onChangeValues} 
                placeholder="Profissão"
                name="profession"
            />
             <select name="country" onChange={onChangeValues}>
                <option>Escolha uma Viagem</option>
                {renderCountries()}
            </select>
            <ButtonsFormArea>
                <button>enviar</button>
                <button onClick = {() => history(-1)}>voltar</button>
            </ButtonsFormArea>
        </ContainerAplicartionForm>
        </div>
    )
}
