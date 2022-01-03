import styled from "styled-components";
import { Card } from 'primereact/card';


export const PostCard= styled(Card)`
    margin:2%;
    width: 25vw;

    &:hover{
        background-color:#00000014;
        cursor:pointer
    }
`
export const CommentArea = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
`

export const SCard = styled.div`
    background: #ffffff;
    color: #495057;
    box-shadow: 0 2px 1px -1px rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%), 0 1px 3px 0 rgb(0 0 0 / 12%);
    border-radius: 6px;
    box-sizing: border-box;
    width: 27%;
    margin: 0.5%;

    }

    h2{
        font-size: 1.5rem;
        font-weight: 700;
        margin-bottom: 0.5rem;
    }

    h4{
        font-weight: 400;
        margin-top: 0;
        margin-bottom: 0.5rem;
        color: #6c757d;
    }
    &:hover{
        cursor:pointer;
    }

    @media screen and (max-device-width : 480px){
       width: 100%;
    }

    @media screen and (min-device-width : 481px) and (max-device-width : 800px){
        width: 100%;
    }
`
export const CardBodyArea = styled.div`
    padding: 1.25rem;
       
`
export const CardContent = styled.div`
    padding: 1.25rem 0;

    p{
        word-break: break-all;
    }
`

export const DownCardArea = styled.div`
    display: flex;
    flex-direction:row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    padding: 0.5rem;
    margin: 0 1.5%;
`
export const CommentCont = styled.span`
    margin: 0 6px;
`
export const CommentsListArea = styled.div`
    display: flex;
    flex-direction:Column;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 1vh 1.5%;
`
export const UserCommentArea = styled.div`
    display: flex;
    flex-direction:row;
    justify-content: flex-start;
    align-items: flex-end;
`