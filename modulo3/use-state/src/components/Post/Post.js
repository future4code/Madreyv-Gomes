import React, { useState } from 'react'
import { PostContainer, PostHeader, UserPhoto, PostPhoto, PostFooter, CommentContainer } from './styles'

import IconeComContador from '../IconeComContador/IconeComContador'
import SecaoComentario from '../SecaoComentario/SecaoComentario'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'

const Post = (props) => {

  let [curtido, setCurtido] = useState(false)

  let [numeroCurtidas, setNumeroCurtidas] = useState(0)
  
  let [comentado, setComentado] = useState(false)
  
  let [numeroComentarios, setNumeroComentarios] = useState(0)
 
  let [comentarios, setComentarios] = useState([])


  const onClickCurtida = () => {
    setCurtido(!curtido)
    setNumeroCurtidas(numeroCurtidas > 0? 0: 1)
    console.log(numeroCurtidas)
  };

  const onClickComentario = () => {
    setComentado(!comentado)
  };

  const enviarComentario = (comentario) => {
    setComentarios([...comentarios, comentario])
    setNumeroComentarios(numeroComentarios + 1)
  }

  let iconeCurtida = curtido ? iconeCoracaoPreto : iconeCoracaoBranco
  let caixaDeComentario = comentado 
  ?<SecaoComentario 
    enviarComentario={enviarComentario}
    comentarios={comentarios}
    /> 
   : <></>

  return (
    <PostContainer>
      <PostHeader>
        <UserPhoto src={props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={props.fotoPost} alt={'Imagem do post'}/>

      <PostFooter>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={onClickCurtida}
          valorContador={numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={onClickComentario}
          valorContador={numeroComentarios}
        />
      </PostFooter>
      {caixaDeComentario}
    </PostContainer>
  )
}

export default Post