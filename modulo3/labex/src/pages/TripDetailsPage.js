import React from 'react'
import CandidateCard from '../Components/CandidateCard'
import TripCard from '../Components/TripCard'
import { ContainerTrip } from '../PagesCss/TripDetailsPaje.css'

export default function TripDetailsPage() {
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
