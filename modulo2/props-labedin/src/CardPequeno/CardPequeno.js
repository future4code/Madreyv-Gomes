import React from 'react'
import "./CardPequeno.css"
import styled from 'styled-components'

const CardContainer = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
`

const ImgCard = styled.img`
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`

const DivCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
`

const H4Card = styled.h4`
    margin-bottom: 15px;
    font-weight: 600;
`

export default function CardPequeno(props) {
    return (
        <CardContainer>
            <ImgCard src={ props.imagem } />
            <DivCard>
                <H4Card>{ props.info }</H4Card>
            </DivCard>
        </CardContainer>
    )
}
