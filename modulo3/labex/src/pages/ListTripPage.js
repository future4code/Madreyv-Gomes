import React from 'react'
import TripCard from '../Components/TripCard'
import { ButtonsListTripPage, ListCardArea, ListTripContainer } from '../PagesCss/ListTripPage.css'

export default function ListTripPage() {
    return (
        <ListTripContainer>
            <ButtonsListTripPage>
                <button>Inscrever-se</button>
                <button>Voltar</button>
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
