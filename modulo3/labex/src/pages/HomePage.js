import React from 'react'
import { Link } from 'react-router-dom'
import { HomeButtonsArea, HomePageContainer } from '../PagesCss/HomePage.css'

export default function HomePage() {

    return (
        <HomePageContainer>
            <h2>Labex</h2>
            <HomeButtonsArea>
                <Link to="trips">
                    <button>
                        Ver Viagens
                    </button>
                </Link>
                <Link to="admArea">
                    <button>Área de Admin</button>
                </Link>
            </HomeButtonsArea>
        </HomePageContainer>
    )
}
