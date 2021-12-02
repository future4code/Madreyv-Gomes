import styled from "styled-components";

export const ContainerCard = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  z-index: 1;
  position: relative;

  
  `
export const ImageArea= styled.div`
  width: 95%;
  height: 85%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  position: relative;
  justify-content: flex-end;

  img{
    top: 0;
    width: 98%;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    z-index: 25;
    display: block;
    min-height: 63%;
  }
`
export const ButtonsArea = styled.div`
  width: 95%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  img{
    width: 15%;
    cursor: pointer;
  }
`

export const DataMatch = styled.div`
  width: 98%;
  padding: 2%;
  background-color: rgba(0,0,0,0.5);
  margin-bottom: 2%;
  color: white;

`

export const ContainerAreaCard = styled.div`
  position: absolute;
  background-image: url(${props => props.imagem});
  width: 100%;
  border: 1px solid black;
  height: 100%;
  background-size: cover;
  z-index: -1;
  filter: blur(7px);
  height: 80%;
`
