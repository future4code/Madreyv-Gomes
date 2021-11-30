import React, {useState} from 'react';
import Post from './components/Post/Post';
import styled from "styled-components"

const AppContainer = styled.div `
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const App = () => {
  const[post, setPost] = useState({
    nomeUsuario: 'Madreyv',
    fotoPerfil: 'https://picsum.photos/50/50',
    fotoPost:'https://picsum.photos/200/150'
  })
  return (
    <AppContainer>
      <Post
        nomeUsuario={post.nomeUsuario}
        fotoUsuario={post.fotoPerfil}
        fotoPost={post.fotoPost}
      />
    </AppContainer>
  );
}


export default App;
