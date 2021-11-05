import React from 'react';
import './CardGrande.css'
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
`

const ContainerImg = styled.img`
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`

const ContainerDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
`

const H4Div = styled.h4`
        margin-bottom: 15px;
`

function CardGrande(props) {
    return (
        <Container>
            <ContainerImg src={ props.imagem } />
            <ContainerDiv>
                <H4Div>{ props.nome }</H4Div>
                <p>{ props.descricao }</p>
            </ContainerDiv>
        </Container>
    )
}

export default CardGrande;