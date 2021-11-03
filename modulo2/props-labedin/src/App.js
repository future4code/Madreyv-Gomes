import React from 'react';
import "./App.css"
import CardPequeno from './CardPequeno/CardPequeno';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`
const AppClass = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`
const PageSectionContainer = styled.div`
  width: 40vw;
  margin: 10px 0;
`

const AppH2 = styled.h2`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`



function App() {
  return (
      <AppClass>
        <GlobalStyle/>
        <PageSectionContainer>
          <AppH2>Dados pessoais</AppH2>
          <CardGrande 
            imagem="https://media-exp1.licdn.com/dms/image/C5103AQE8wkt5_AfMPQ/profile-displayphoto-shrink_200_200/0/1516892719808?e=1641427200&v=beta&t=f_cG4PjmRcFK60-ufMObCuK5EuimQthJFqMTFVwuXTE" 
            nome="Madreyv Gomes" 
            descricao="Oi, eu sou o Madreyv. Sou estudante da Labenu e um entusiasta na área de programação!"
          />
          
          <ImagemButton 
            imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
            texto="Ver mais"
          />
        </PageSectionContainer>
        <PageSectionContainer >
          <AppH2>Informações de Contato</AppH2>
          <CardPequeno
          imagem="https://cdn-icons-png.flaticon.com/512/520/520648.png"
          info="madreyv@gmail.com"
          />
          <CardPequeno
          imagem="https://cdn-icons-png.flaticon.com/512/3176/3176094.png"
          info="Av x, nºY RJ"
          />
        </PageSectionContainer>
        <PageSectionContainer>
          <AppH2>Experiências profissionais</AppH2>
          <CardGrande 
            imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
            nome="Labenu" 
            descricao="Formando desenvolvedores para o mercado de trabalho!" 
          />
          
          <CardGrande 
            imagem="https://www.nasa.gov/sites/default/files/thumbnails/image/nasa-logo-web-rgb.png" 
            nome="NASA" 
            descricao="Apontando defeitos." 
          />
        </PageSectionContainer>

        <PageSectionContainer>
          <AppH2>Minhas redes sociais</AppH2>
          <ImagemButton 
            imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
            texto="Facebook" 
          />        

          <ImagemButton 
            imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
            texto="Twitter" 
          />        
        </PageSectionContainer>
      </AppClass>
  );
}

export default App;
