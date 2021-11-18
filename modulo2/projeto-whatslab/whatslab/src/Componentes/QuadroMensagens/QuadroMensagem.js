import React, { Component } from "react";
import styled from "styled-components";

const FundoMensagem = styled.div`
    background: linear-gradient(0deg, rgba(247,247,250,1) 0%, rgba(237,237,244,0.65) 2%, rgba(253,255,255,0) 100%);
    width: 95%;
    border-radius: 5px;

    display: flex;
    align-items: center;
    flex-direction: column;
`

export default class QuadroMensagem extends Component {
  render() {
    let historicoDeMensagens = this.props.mensagem.map((item) => {
      return <FundoMensagem>
                <p>
                    <b>{item.usuario}</b> : {item.mensagem}
                </p>
            </FundoMensagem>
      
    });

    return <>{historicoDeMensagens}</>;
  }
}
