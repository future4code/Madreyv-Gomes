import styled from "styled-components";


export const ContainerListas = styled.div`
    height: 83%;
    width: 97%;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    overflow-x: hidden;
    overflow-y: scroll;
    margin-top: 3%;
`

export const CardLista = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    height: 5.5vw;
    width: 100%;
    margin-top: 2%;
    padding: 2%;
    
    div{
        display: flex;
        align-items: center;
        width: 70px;
        height: 70px;
        border-radius: 50%;
        border: 1px solid rgba(0,0,0, 0.2);
        overflow: hidden;
        margin-right: 2vw;

        img{
            width: 100%;
        }
    }

    &:hover{
        background-color: rgba(0,0,0, 0.2);
        color: white;
        cursor: pointer;
    }

`