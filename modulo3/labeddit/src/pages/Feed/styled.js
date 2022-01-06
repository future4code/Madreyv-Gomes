import styled from "styled-components";


export const ContainerPost = styled.div`
    min-width:95vw;
    min-height: 85vh;
    display: flex;
    flex-direction:Column;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    margin: 0 1.5%;
    
`

export const ContainerPostArea = styled.div`
    background: #ffffff;
    color: #495057;
    box-shadow: 0 2px 1px -1px rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%), 0 1px 3px 0 rgb(0 0 0 / 12%);
    border-radius: 6px;
    box-sizing: border-box;
    width: 27%;
    margin: 0.5%;

    @media screen and (max-device-width : 480px){
       width: 100%;
    }

    @media screen and (min-device-width : 481px) and (max-device-width : 800px){
        width: 100%;
    }
`