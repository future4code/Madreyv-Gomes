import React from 'react'
import styled from 'styled-components'

import {IconeComContador} from '../IconeComContador/IconeComContador'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'
import { SecaoCompartilhar } from '../SecaoCompartilhar/SecaoCompartilhar'
import { IconeSemTexto } from '../IconeSalvar/IconeSemTexto'

const PostContainer = styled.div`
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
`

const PostHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`

const PostFooter = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
`

const UserPhoto = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
`

const PostPhoto = styled.img`
  width: 100%;
`
const SecaoFlexRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
    salvar: false,
    compartilhar: false,
    comentarioCompartilhamento: ""
  }

  onClickCurtida = () => {
    let curtida = 0
    if(this.state.numeroCurtidas === 0){
      curtida = 1
    }
    this.setState({
      curtido: !this.state.curtido,
      numeroCurtidas: curtida
    })
  }

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }

  onClickSalvar = () => {
    this.setState({
      salvar: !this.state.salvar
    })
  }

  onClickCompartilhar = () => {
    this.setState({
      compartilhar: !this.state.compartilhar
    })
  }

  aoEnviarCompartilhamento = (e) =>{
    this.setState({
      comentarioCompartilhamento: e.target.value
    })
    console.log(this.state.comentarioCompartilhamento)
  }

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })
  }

  aoClicar = (e)=>{
    console.log(`compartilhado no ${e.target.alt}`)
  }


  render() {
    let iconeCurtida

    if(this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    let componenteComentario

    if(this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
    }

    let componenteCompartilhar

    if(this.state.compartilhar){
      componenteCompartilhar = <>
                                  <SecaoCompartilhar
                                    icone = "https://cdn-icons-png.flaticon.com/512/174/174848.png"
                                    rede = "Facebook"
                                    aoClicar = {this.aoClicar}
                                  />
                                  <SecaoCompartilhar
                                    icone = "https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
                                    rede = "Instagram"
                                    aoClicar = {this.aoClicar}
                                  />
                                  <SecaoCompartilhar
                                    icone = "https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
                                    rede = "Twitter"
                                    aoClicar = {this.aoClicar}
                                  />
                              </>
    }

    let iconeSalvar

    if (!this.state.salvar) {
      iconeSalvar = "https://cdn-icons-png.flaticon.com/512/157/157912.png"
    }else{
      iconeSalvar = "https://cdn-icons-png.flaticon.com/512/786/786352.png"
    }

    return <PostContainer>
      <PostHeader>
        <UserPhoto src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{this.props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={this.props.fotoPost} alt={'Imagem do post'}/>

      <PostFooter>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />
        <IconeSemTexto
          icone = {iconeSalvar}
          onClickIcone={this.onClickSalvar}
        />
        <IconeSemTexto
          icone = "https://cdn-icons-png.flaticon.com/512/1059/1059106.png"
          onClickIcone={this.onClickCompartilhar}
        />
      </PostFooter>
      {componenteCompartilhar}
      {componenteComentario}
    </PostContainer>
  }
}

export default Post