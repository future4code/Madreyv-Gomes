import React from 'react'
import { ContainerTripCard } from './ComponentsCss/TripCard.css'


export default function TripCard() {
    return (
        <ContainerTripCard>
            <p><span>Name:</span>Havana</p>
            <p><span>Descrição:</span>Logo ali</p>
            <p><span>Planeta:</span>Terra</p>
            <p><span>Duração:</span>50</p>
            <p><span>Data:</span>2021-12-24</p>
        </ContainerTripCard>
    )
}
