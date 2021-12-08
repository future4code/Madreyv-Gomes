import React from 'react'
import { HomeButtonsArea, HomePageContainer } from '../PagesCss/HomePage.css'

export default function HomePage() {
    return (
        <HomePageContainer>
            <h2>Labex</h2>
            <HomeButtonsArea>
                <button>Ver Viagens</button>
                <button>Área de Admin</button>
            </HomeButtonsArea>
        </HomePageContainer>
    )
}
