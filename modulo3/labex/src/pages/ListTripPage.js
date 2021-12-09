import React from 'react'
import { Link, useNavigate} from 'react-router-dom'
import TripCard from '../Components/TripCard'
import { ButtonsListTripPage, ListCardArea, ListTripContainer } from '../PagesCss/ListTripPage.css'

export default function ListTripPage() {
    const history = useNavigate()

    const goTo = (page) =>{
        if(page === "application"){
            history(page)
        }else{
            history(page)
        }
    }
    return (
        <ListTripContainer>
            <ButtonsListTripPage>
                <button onClick={() => goTo("application")}>Inscrever-se</button>
                <button onClick={() => goTo(-1)}>Voltar</button>
            </ButtonsListTripPage>
            <ListCardArea>
                <h2>Lista de Viagens</h2>
                <TripCard/>
                <TripCard/>
                <TripCard/>
                <TripCard/>
            </ListCardArea>
        </ListTripContainer>
    )
}
