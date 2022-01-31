import styled from "styled-components";


export const ListTripContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 80%;
    min-height: 90vh;

    border: 1px solid red;
`

export const ButtonsListTripPage = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    width: 50%;
    min-height: 10vh;
    border: 1px solid blue;
`

export const ListCardArea = styled.div`
    width: 100%;
    min-height: 70vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    border: 1px solid red;

    h2{
        margin: 3% 0;
    }
`