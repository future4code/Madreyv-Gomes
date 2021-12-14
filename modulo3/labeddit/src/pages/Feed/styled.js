import styled from "styled-components";
import { Card } from 'primereact/card';

export const ContainerPost = styled.div`
    min-width:95vw;
    min-height: 85vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    margin: 0 1.5%;
`

export const CardPost = styled(Card)`
    margin:2%;
    width: 25vw;
`