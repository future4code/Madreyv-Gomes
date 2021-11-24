import logo from './logo.svg';
import './App.css';
import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import axios from 'axios';



const EstiloGlobal = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
  }
  button{
    padding: 1%;
  }
`
const Body = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 100vh;
`

const ListaUsuarios = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30%;
`
const ItemUsuario = styled.div`
  display: flex;
  flex-direction: row;
  margin: 5px;
  width: 100%;
  justify-content: space-between;
  border-bottom: 1px solid grey;
`
const AreaCadastro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border: 1px solid black;
  border-radius: 5px;
  width: 30%;
  height: 200px;
  

  button{
    width: 50%;
  }
`
const InputFormulario = styled.input`
  border: none;
  border-bottom: 1px solid grey;
  width: 80%;

  &:focus-visible{
    outline: none;
  }
`

class App extends React.Component {
  state = {
    usuarios:[
      {email:'madreyv@gmail.com', nome:'Madreyv Gomes',id:1},
      {email:'Jeany@gmail.com', nome:'Jeany GomeS', id:2}
    ],
    listaUsuarios:false,
    inputNome:"",
    inputEmail:"",
    statusRequest:""
  }

  

  onChangeInputNome = (e)=>{
    this.setState({
      inputNome: e.target.value
    })
  }

  onChangeInputEmail = (e) => {
    this.setState({
      inputEmail: e.target.value
    })
  }
  itemVisualizado = ()=>{
    if(this.state.listaUsuarios === true){
      let usuarios = this.state.usuarios.map((usuario) => {
        return (
          <ItemUsuario>
            <p>{usuario.nome}</p>
            <button onClick={() => this.excluirUsuario(usuario.id)}>Excluir</button>
          </ItemUsuario>
        )
      })
      return(
        <> 
        <ListaUsuarios>
          <h2>Usuarios</h2>
          {usuarios}
        </ListaUsuarios>
        <div>
          <button onClick={this.trocarExibicao}>Voltar a Tela de Cadastro</button>
        </div>
        </>
      )
    }else{
      return (
        <>
          <AreaCadastro>
              <h2>Cadastro de Usuarios</h2>
              <InputFormulario onChange={this.onChangeInputNome} value={this.state.inputNome} type="text" placeholder="Nome" />
              <InputFormulario onChange={this.onChangeInputEmail} value={this.state.inputEmail} type="email" placeholder="E-mail" />
              <button onClick={this.salvarUsuario}>Salvar</button>
          </AreaCadastro>
          <button onClick={this.trocarExibicao}>Lista de Usuarios</button>
        </>
      )
    }
  }

  carregarUsuarios = () => {
    const request = axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users',{
      headers:{
        "Content-Type": 'application/json',
        "Authorization": 'madreyv-sebastiao-carver'
      } 
    })
    request.then((response) =>{
      let listaUsuarios = response.data.map((usuario) => {
       return {
         nome: usuario.name,
         id: usuario.id,
       }
      })
     
      this.setState({
        usuarios:listaUsuarios
      })
     }).catch((error) => {
       console.log(error.message)
     })
  }

  componentDidMount= () => {
    this.carregarUsuarios()
  }

  componentDidUpdate = () => {
    this.carregarUsuarios()
  }

  trocarExibicao = () => {
    this.setState(
      {listaUsuarios: !this.state.listaUsuarios},
    )
  }

  excluirUsuario = (id) =>{
    axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,{
      headers:{
        "Content-Type": 'application/json',
        "Authorization": 'madreyv-sebastiao-carver'
      }
    }).then((response) => {
      console.log(response)
    }).catch((erro) => {
      console.log(erro.message)
    })
  }

  salvarUsuario = () => {
    let usuario={
      name:this.state.inputNome.toUpperCase(),
      email:this.state.inputEmail
    }

    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', usuario,{
      headers:{
        Authorization:'madreyv-sebastiao-carver'
      }
    }).then((response) => {
      console.log(response.status)
      if(response.status === 201){
        this.setState({
          inputEmail: "",
          inputNome:""
        })
      }
    }).catch((error) => {
      console.log(error.message)
    })
  }

  render(){
     let tela = this.itemVisualizado();
    return (
      <>
        <EstiloGlobal />
        <Body>
          {tela}
        </Body>
      </>
    );
  }
}

export default App;
