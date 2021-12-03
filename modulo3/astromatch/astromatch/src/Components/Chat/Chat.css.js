import styled from "styled-components";

export const AreaChat = styled.div`
    width: 100%;
    height: 100%;
    border: 1px solid red;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 2%;
`
export const AreaInput = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    input{
        width: 85%;
    }

    img{
        width: 10%;
    }
`
export const AreaMensagem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 100%;
    border: 1px solid blue;
    height: 100%;
    overflow-y: auto;
    background: linear-gradient(180deg, rgba(72,164,152,1) 35%, rgba(119,47,148,1) 100%);
`

export const CardMensagemEnviada = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    margin: 2%;
    background-color: rgba(0, 0, 0, 0.8);
    border-radius: 5px;
    position: relative;
    left: 26%;
    color: white;

    p{
        padding: 2%;
    }

    span{
        text-align: end;
        padding-right: 2%;
        padding-bottom: 2%;
        font-size: 8px;
    }
`
export const CardMensagemRecebida = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    margin: 2%;
    background-color: rgba(0, 0, 0, 0.8);
    border-radius: 5px;
    position: relative;
    left: 0;
    color: white;

    p{
        padding: 2%;
    }

    span{
        text-align: end;
        padding-right: 2%;
        padding-bottom: 2%;
        font-size: 8px;
    }
`
