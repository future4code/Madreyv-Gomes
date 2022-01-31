import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import AdminTripCard from '../Components/AdminTripCard'
import { useProtectedPage } from '../Components/Hooks/ProtectedPageHook'
import { AdminContainerPanel, AdminHomePageContainer, AdminPanelButtons, AdminTripCardArea } from '../PagesCss/AdminHomePage.css'
import { deleteTrip, getTrips } from '../Services.js/Api'

export default function AdminHomePage() {
    const [trips, setTrips] = useState([])
    const [deleted, setDeleted] = useState(true)
    const history = useNavigate()

    useProtectedPage()

    useEffect(() => {
        const tripRequest = getTrips()

        tripRequest.then((res) => {
            setTrips(res.trips)
        }).catch((err)=>{
            console.log(err)
        })
    }, [deleted])


    const renderTrips = ()=>{
        return trips.map((trip) => {
            return <Link to={`${trip.id}`}>
                <AdminTripCard 
                    trips={trip} 
                    deleteFunction={delTrip}
                />
            </Link>
        })
    }

    const delTrip = (id)=>{
        const request = deleteTrip('fhgj')
        request.then((res) => {
            setDeleted(res)
        }).catch((err)=>{
            alert("O componente não foi deletado!")
        })
    }

    const logout = () =>{
        window.localStorage.removeItem('token')
        history('/',{replace:true})
    }
    
    return (
        <AdminHomePageContainer>
           <AdminContainerPanel>
               <h2>Painel Administrativo</h2>
               <AdminPanelButtons>
                   <button onClick={() => history(-1)}>Voltar</button>
                   <button onClick={() => history("createTrip")}>Criar Viagem</button>
                   <button onClick={logout}>Logout</button>
               </AdminPanelButtons>
           </AdminContainerPanel>
           <AdminTripCardArea>
                {renderTrips()}
           </AdminTripCardArea>
        </AdminHomePageContainer>
    )
}
