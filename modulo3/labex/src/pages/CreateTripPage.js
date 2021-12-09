import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { ButtonsArea, TripFormArea } from '../PagesCss/CreateTripPage.css'

export default function CreateTripPage() {

    const [name, setName] = useState("")
    const [date, setDate] = useState("")
    const [description, setDescription] = useState("")
    const [duration, setDuration] = useState("")
    const [destination, setDestination] = useState("")

    const history = useNavigate()

    const onChageValues = (e) => {
        
        switch(e.target.name){
            case 'name':
                setName(e.target.value)
                break;
            case 'date':
                setDate(e.target.value)
                break
            case 'description':
                setDescription(e.target.value)
                break;
            case 'duration':
                setDuration(e.target.value)
                break
            default:
                setDestination(e.target.value)
        }
    }


    return (
        <TripFormArea>
            <h2>Criar Viagem</h2>
            <input
                value={name}
                onChange={onChageValues} 
                placeholder="Nome" name="name"/>
            <select name="">
                <option selected value="Escolha" onChange={onChageValues}>Escolha um Planeta</option>
            </select>
            <input 
                value={date} 
                type="date" 
                onChange={onChageValues}
                name="date"
            />
            <input 
                placeholder="Descrição" 
                value={description}
                onChange={onChageValues}
                name="description"
            />
            <input 
                type="number" 
                placeholder="Duração em dias" 
                value={duration}
                onChange={onChageValues}
                name="duration"
            />

            <ButtonsArea>
                <button>Criar!</button>
                <button onClick={() => history(-1)}>Voltar</button>
            </ButtonsArea>

        </TripFormArea>
    )
}
