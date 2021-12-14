import styled from "styled-components";


export const HeaderApp = styled.div`
  display: grid;
  grid-template-columns: 25% 50% 25%;
  align-content: center;
  justify-content: space-around;
  align-items: center;
  justify-items: center;
  width: 100%;
  height: 10%;
  border-bottom: 1px solid black;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  div{
    width: 70%;
    grid-column: 2 / 3;
  }

`

export const Logo = styled.img`
  width: 100%;
`

export const BotaoDireito = styled.img`
  margin-right: 2%;
  width: 35%;
  cursor: pointer;
`
export const BotaoEsquerdo = styled.img`
  margin-right: 17%;
  width: 35%;
  cursor: pointer;
`