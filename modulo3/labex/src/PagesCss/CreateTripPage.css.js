import styled from "styled-components";

export const TripFormArea = styled.div`
    width: 700px;
    min-height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    border: 1px solid red;

    input, select{
        width: 80%;
    }
`

export const ButtonsArea = styled.div`
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
`