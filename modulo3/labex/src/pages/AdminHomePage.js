import React from 'react'
import { useNavigate } from 'react-router'
import AdminTripCard from '../Components/AdminTripCard'
import { AdminContainerPanel, AdminHomePageContainer, AdminPanelButtons, AdminTripCardArea } from '../PagesCss/AdminHomePage.css'

export default function AdminHomePage() {
    const history = useNavigate()
    return (
        <AdminHomePageContainer>
           <AdminContainerPanel>
               <h2>Painel Administrativo</h2>
               <AdminPanelButtons>
                   <button onClick={() => history(-1)}>Voltar</button>
                   <button onClick={() => history("createTrip")}>Criar Viagem</button>
                   <button>Logout</button>
               </AdminPanelButtons>
           </AdminContainerPanel>
           <AdminTripCardArea>
                <AdminTripCard/>
                <AdminTripCard/>
           </AdminTripCardArea>
        </AdminHomePageContainer>
    )
}
