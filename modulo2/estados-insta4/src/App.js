import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;

  button{
    margin-bottom: 10px;
  }

`
const InputComentario = styled.input`
    width: 100%;
    margin-right: 5px;
    width: 300px;
    margin-bottom: 10px;
`


class App extends React.Component {
  state = {
    listaDeUsuarios : [
      {
        nome: "Madreyv",
        fotoUsuario: 'https://picsum.photos/50/49',
        fotoPost: 'https://picsum.photos/200/150'
      },
      {
        nome: "Silva",
        fotoUsuario: 'https://picsum.photos/50/48',
        fotoPost: 'https://picsum.photos/200/159'
      },
      {
        nome: "Gomes",
        fotoUsuario: 'https://picsum.photos/50/47',
        fotoPost: 'https://picsum.photos/200/15'
      }  
    ],
    nomeUsuario: "",
    fotoU:"",
    fotoP: ""
  }
  
  onChangeNome = (e) => {
    this.setState({
      nomeUsuario: e.target.value
    })
  }
  onChangeFotoUsuario = (e) => {
    this.setState({
      fotoU: e.target.value
    })
  }
  onChangeFotoPost = (e) => {
    this.setState({
      fotoP: e.target.value
    })
  }

  enviar =() =>{
    let novoPost = {
      nome: this.state.nomeUsuario,
      fotoUsuario:this.state.fotoU,
      fotoPost: this.state.fotoP
    }
    const novo = [...this.state.listaDeUsuarios, novoPost]

    this.setState({
      listaDeUsuarios:novo
    })
  }
  
  render() {
   let listaPost = this.state.listaDeUsuarios.map((usuario)=>{
      return <Post
      nomeUsuario={usuario.nome}
      fotoUsuario={usuario.fotoUsuario}
      fotoPost={usuario.fotoPost}
      />
    })

    

    return (
      <>
        <MainContainer>
          <InputComentario
            placeholder={'Nome Usuário'}
            value={this.state.nomeUsuario}
            onChange = {this.onChangeNome}
            />
          <InputComentario
            placeholder={'foto usuário'}
            value={this.state.fotoUsuario}
            onChange = {this.onChangeFotoUsuario}
            />
          <InputComentario
            placeholder={'Foto Post'}
            value={this.state.fotoPost}
            onChange = {this.onChangeFotoPost}
            />
          <button onClick={this.enviar}>Enviar</button>
          {listaPost}
        </MainContainer>
      </>
    );
  }
}

export default App;
