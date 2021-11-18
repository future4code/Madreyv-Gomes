import React, { Component } from "react";
import styled from "styled-components";
import QuadroMensagem from "../QuadroMensagens/QuadroMensagem";

const AreaFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 5px;
  background-color: darkslategray;
`;
const InputNome = styled.input`
  width: 20%;
`;

const ButtonEnviar = styled.img`
  width: 8%;
  cursor: pointer;
`;
const QuadroIteiro = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  background-color: black;
`;

const QuadroSuperior = styled.section`
  width: 95%;
  height: 80vh;
  border-radius: 5px;
  margin-bottom: 10px;
  background-color: white;
  background-image: url(https://i.pinimg.com/originals/62/40/b6/6240b66d5c50c8661eee78b439a7d33c.jpg);
  background-size: cover;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  overflow-y: scroll;
`

export default class QuadroDigitacao extends Component {
  state = {
    mensagem: "",
    usuario: "",
    historico: [ ]
  };

  aoMudarUsuario = (e) => {
    this.setState({
      usuario: e.target.value,
    });
  };

  aoMudarMensagem = (e) => {
    this.setState({
      mensagem: e.target.value,
    });
  };

  enviarMensagem = () => {
    this.setState(
      {
        historico: [
          ...this.state.historico,
          {
            usuario: this.state.usuario,
            mensagem: this.state.mensagem,
          },
        ],
        usuario: "",
        mensagem: "",
      },
      () => console.log(this.state.historico)
    );
  };

  render() {
    return <QuadroIteiro>
        <QuadroSuperior>
          <QuadroMensagem mensagem={this.state.historico} />
        </QuadroSuperior>
        <AreaFooter>
          <InputNome
            onChange={this.aoMudarUsuario}
            type="text"
            placeholder="Usuario"
            value={this.state.usuario}
          />
          <input
            onChange={this.aoMudarMensagem}
            type="text"
            placeholder="Mensagem"
            value={this.state.mensagem}
          />
          <ButtonEnviar
            src="https://cdn-icons-png.flaticon.com/512/2983/2983788.png"
            onClick={this.enviarMensagem}
          />
        </AreaFooter>
      </QuadroIteiro>
  }
}
