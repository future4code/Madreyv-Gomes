import styled from "styled-components";

export const ContainerAplicartionForm = styled.div`
    width: 70%;
    min-height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 10vh;
    padding: 2%;

    border: 1px solid black;

    input, select{
        width: 80%;
    }
`

export const ButtonsFormArea = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    width: 80%;
`