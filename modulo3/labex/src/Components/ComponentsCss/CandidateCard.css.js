import styled from "styled-components";

export const ContainerCandidateCard = styled.div`
    width: 95%;
    border: 1px solid red;
    min-height: 10vh;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;
    margin-bottom: 3%;

    span{
        font-weight: 600;
        margin-right: 1%;
    }
    p{
        width:100%;
    }
`

export const CandidateButtonsArea = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    margin: 3% 0;
`