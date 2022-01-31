import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { useForm } from '../Components/Hooks/FormHook'
import { useProtectedPage } from '../Components/Hooks/ProtectedPageHook'
import { ButtonsArea, TripFormArea } from '../PagesCss/CreateTripPage.css'
import { setTrip } from '../Services.js/Api'

export default function CreateTripPage() {

    const history = useNavigate()
    useProtectedPage()
    const [form, onChange] = useForm({
        "name": "",
        "planet": "",
        "date": "",
        "description": "",
        "durationInDays": ''
    })


    const handleClick = (e) => {
        e.preventDefault()
        const response = setTrip(form)

        response.then((res) => {
            if(res.trip){
                alert("Viagem Cadastrada com Sucesso!")
                history(-1,{replace:true})
            }else{
                alert("Viagem não Cadastrada! Tente novamente!")
            }
        })

    }

    const dataLimite = () => {
        const dataAtual = new Date();
        const dia = dataAtual.getDate();
        const mes = dataAtual.getMonth() + 1;
        const ano = dataAtual.getFullYear();
        return `${ano}-${mes}-${dia}`;
    };


    return (
        <TripFormArea>
            <h2>Criar Viagem</h2>

            <form onSubmit={handleClick}>

            <input
                required
                value={form.name}
                onChange={onChange} 
                placeholder="Nome" 
                name="name"

            />
            <select 
                required
                name="planet"
                value={form.planet}
                onChange={onChange}
            >
                <option selected>Escolha um Planeta</option>
                <option>Mercúrio</option>
                <option>Vênus</option>
                <option>Terra</option>
                <option>Marte</option>
                <option>Júpiter</option>
                <option>Saturno</option>
                <option>Urano</option>
                <option>Netuno</option>
            </select>
            <input
                required 
                value={form.date} 
                type="date" 
                onChange={onChange}
                name="date"
                min={dataLimite()}
            />
            <input
                required 
                placeholder="Descrição" 
                value={form.description}
                onChange={onChange}
                name="description"
            />
            <input
                required 
                type="number" 
                placeholder="Duração em dias" 
                value={form.durationInDays}
                onChange={onChange}
                name="durationInDays"
            />

            <ButtonsArea>
                <button>Criar!</button>
                <button onClick={() => history(-1)}>Voltar</button>
            </ButtonsArea>
            </form>

        </TripFormArea>
    )
}
