import React from 'react'
import CandidateCard from '../Components/CandidateCard'
import { useProtectedPage } from '../Components/Hooks/ProtectedPageHook'
import TripCard from '../Components/TripCard'
import { ContainerTrip } from '../PagesCss/TripDetailsPaje.css'

export default function TripDetailsPage(props) {

    useProtectedPage()
    return (
        <ContainerTrip>
            <h2>Titulo Viagem</h2>
            <TripCard/>
            <button>Voltar</button>
            <h2>Candidatos Pendentes</h2>
            <CandidateCard/>
            <h2>Candidatos Aprovados</h2>
            <CandidateCard/>
        </ContainerTrip>
    )
}
