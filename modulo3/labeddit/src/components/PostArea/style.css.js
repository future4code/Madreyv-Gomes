import styled from "styled-components"
import { InputTextarea } from 'primereact/inputtextarea';

export const PostCardComment = styled.div`
    margin:  1vh;
    display: flex;
    flex-direction: row;
    align-items: flex-end;

    form{
        width: 100%;
    }
    
`

export const BodyArea = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    width: 100%;
`

export const InputText = styled(InputTextarea)`
    max-width: 87%;
`