import React from 'react'
import { ContainerAdminTripCard } from './ComponentsCss/AdminTripCard.css'

export default function AdminTripCard(props) {
    return (
        <ContainerAdminTripCard>
            <h4>{props.trips.name}</h4>
            <button onClick={()=>props.deleteFunction(props.trips.id)}>Excluir</button>
        </ContainerAdminTripCard>
    )
}
