import React from 'react'
import { ContainerCandidateCard, CandidateButtonsArea} from './ComponentsCss/CandidateCard.css'

export default function CandidateCard() {
    return (
        <ContainerCandidateCard>
            <p><span>Name:</span>Pedro</p>
            <p><span>Profissão:</span>Estudante</p>
            <p><span>Idade:</span>25</p>
            <p><span>País:</span>Brasil</p>
            <p><span>Texto de Candidatura:</span>Desejo muito fazer parte</p> 

            <CandidateButtonsArea>
                <button>Aprovar</button>
                <button>Reprovar</button>
            </CandidateButtonsArea>
        </ContainerCandidateCard>
    )
}
