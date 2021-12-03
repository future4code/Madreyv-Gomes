import './App.css';
import styled, { createGlobalStyle } from 'styled-components'
import { Logo } from './Util/Util';
import Header from './Components/Header/Header';
import AreaCardApp from './Components/AreaCard/AreaCardApp';
import ListaMatches from './Components/ListaMatches/ListaMatches';
import { useState } from 'react';
import Chat from './Components/Chat/Chat';

const Global = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin:0;
    padding: 0;
  }
`

const Container = styled.body`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background-color: gray;  
  border: 1px solid red;
`
const ContainerApp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 400px;
  height: 97vh;
  background-color: white;
  border: 1px solid black;
  border-radius: 10px;
`


function App() {

  const [tela, setTela] = useState("home")
  const [botaoHeader, setBotaoHeader] = useState(true)

  const telaRenderizada = () => {
    let redenriza = tela === "home" ? <AreaCardApp/> : <ListaMatches/>
    return redenriza
  }

  const mudarTela = (novaTela) => {
    setTela(novaTela)
    setBotaoHeader(!botaoHeader)
  }
  return (
    <>
      <Global/>
      <Container>
        <ContainerApp>
          <Header 
            logo={Logo} 
            telas={mudarTela}
            lado={botaoHeader}
          />
          {/* {telaRenderizada()} */}
          <Chat/>
        </ContainerApp>
      </Container>
    </>
  );
}

export default App;
