import React from 'react';
import styled from 'styled-components';
import QuadroDigitacao from './Componentes/ComponenteMensagens/QuadroDigitacao';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
`
const FooterContainer = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`
// Componente quadro do chat

const QuadroChat = styled.div`
  width: 400px;
  border: 1px solid black;
  border-radius: 1%;
  height: 90vh;
  background-color: black;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`

//componentes de input e botao


class App extends React.Component {
    
  
  render() {
    return (
      <MainContainer>
        <QuadroChat>
          <FooterContainer>
            <QuadroDigitacao/>
          </FooterContainer>
        </QuadroChat>
      </MainContainer>
    );
  }
}

export default App;