import React, { useState,useEffect } from 'react'
import { Link, useNavigate} from 'react-router-dom'
import TripCard from '../Components/TripCard'
import { ButtonsListTripPage, ListCardArea, ListTripContainer } from '../PagesCss/ListTripPage.css'
import { getTrips, setTrip } from '../Services.js/Api'

export default function ListTripPage(props) {
    const [trips, setTrips] = useState([])

    useEffect(() => {
        loadTrips()
       
    }, [])
    const history = useNavigate()

    const loadTrips = () => {
        const request = getTrips()

        request.then((res)=>{
           setTrips(res.trips)
           props.onCliclFunction(res.trips)
        }).catch((err)=>{
            console.log(err)
        })
    }

    const goTo = (page) =>{
        if(page === "application"){
            history(page)
        }else{
            history(page)
        }
    }

    const renderCards = () => {
        return trips.map((trip) =>{
            return <TripCard trip={trip} key={trip.id} />
        })
    }

    return (
        <ListTripContainer>
            <ButtonsListTripPage>
                <button onClick={() => goTo("application")}>Inscrever-se</button>
                <button onClick={() => goTo(-1)}>Voltar</button>
            </ButtonsListTripPage>
            <ListCardArea>
                <h2>Lista de Viagens</h2>
                {renderCards()}
            </ListCardArea>
        </ListTripContainer>
    )
}
