import styled from "styled-components";

// export const PostCardComment = styled.div`
//     margin:  1vh;
//     display: flex;
//     flex-direction: row;
//     align-items: flex-end;
// `
export const PostcardContainer = styled.div`
    min-width:95vw;
    min-height: 85vh;
    display: flex;
    flex-direction:Column;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    @media screen and (max-device-width : 480px){
       width: 100%;
    }

    @media screen and (min-device-width : 481px) and (max-device-width : 800px){
        width: 100%;
    }
`
export const CommentContainer = styled.div`
    display: flex;
    flex-direction:row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-end;
    margin: 0 1.5%;
    background: #ffffff;
    color: #6c757d;
    border-bottom: 1px solid rgb(0 0 0 / 20%);
    margin: 3px 1.5%;
    padding-bottom: 0.5rem;
    
    p{
       max-width: 80%; 
    }
`

export const CommentContainerCard = styled.div`
    background: #ffffff;
    color: #495057;
    box-shadow: 0 2px 1px -1px rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%), 0 1px 3px 0 rgb(0 0 0 / 12%);
    border-radius: 6px;
    box-sizing: border-box;
    width: 27%;
    margin: 0.5%;

    @media screen and (max-device-width : 480px){
       width: 100%;
       margin: 0;
    }

    @media screen and (min-device-width : 481px) and (max-device-width : 800px){
        width: 100%;
        margin: 0;
    }
`