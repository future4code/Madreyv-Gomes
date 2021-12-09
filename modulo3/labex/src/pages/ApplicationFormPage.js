import React, {useState} from 'react'
import { useNavigate } from 'react-router'
import { ButtonsFormArea, ContainerAplicartionForm } from '../PagesCss/ApplicationFormPage.css'

export default function ApplicationFormPage() {

    const [place, setPlace] = useState('')
    const [age, setAge] = useState(0)
    const [appText, setAppText] = useState('')
    const [profession, setProfession] = useState('')
    const [name, setName] = useState('')
    const [country, setCountry] = useState('')

    const onChageValues = (e) => {
        
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

    const history = useNavigate()
    return (
        <div>
            <ContainerAplicartionForm>
            <h2>Inscreva-se para uma viagem</h2>
            <select name="place">
                <option>Escolha uma Viagem</option>
            </select>
            <input
                type="text"
                value={name}
                onChange={onChageValues}
                placeholder="Nome"
                name="name"
            />
            <input
                type="number"
                value={age}
                onChange={onChageValues}
                placeholder="idade"
                name="age"
            />
            <input
                type="text"
                value={appText}
                onChange={onChageValues}
                placeholder="Texto de Candidatura"
                name="applicationText"
            />
            <input
                type="text"
                value={profession}
                onChange={onChageValues} 
                placeholder="Profissão"
                name="profession"
            />
             <select name="country">
                <option>Escolha uma Viagem</option>
            </select>
            <ButtonsFormArea>
                <button>enviar</button>
                <button onClick = {() => history(-1)}>voltar</button>
            </ButtonsFormArea>
        </ContainerAplicartionForm>
        </div>
    )
}
