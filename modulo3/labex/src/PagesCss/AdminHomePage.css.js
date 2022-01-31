import styled from "styled-components";

export const AdminHomePageContainer = styled.div`
    width: 100%;
    min-height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    border: 1px solid red;
`

export const AdminContainerPanel = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin: 4% 0;

    h2{
        margin: 3%;
    }

    border: 1px solid blue;
`

export const AdminPanelButtons = styled.div`
    display: flex;
    width: 80%;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
`

export const AdminTripCardArea = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    border: 1px solid blue;
`