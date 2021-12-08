import React from 'react'
import AdminTripCard from '../Components/AdminTripCard'
import { AdminContainerPanel, AdminHomePageContainer, AdminPanelButtons, AdminTripCardArea } from '../PagesCss/AdminHomePage.css'

export default function AdminHomePage() {
    return (
        <AdminHomePageContainer>
           <AdminContainerPanel>
               <h2>Painel Administrativo</h2>
               <AdminPanelButtons>
                   <button>Voltar</button>
                   <button>Criar Viagem</button>
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
