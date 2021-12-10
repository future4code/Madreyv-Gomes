import React from 'react'
import { ContainerTripCard } from './ComponentsCss/TripCard.css'


export default function TripCard(props) {
    return (
        <ContainerTripCard key={props.trip.id}>
            <p><span>Name:</span>{props.trip.name}</p>
            <p><span>Descrição:</span>{props.trip.description}</p>
            <p><span>Planeta:</span>{props.trip.planet}</p>
            <p><span>Duração:</span>{props.trip.durationInDays}</p>
            <p><span>Data:</span>{props.trip.date}</p>
        </ContainerTripCard>
    )
}
