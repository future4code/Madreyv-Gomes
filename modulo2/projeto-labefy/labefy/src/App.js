import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import axios from "axios";

import MenuVertical from "./Componentes/MenuVertical/MenuVertical";
import CardPlaylist from "./Componentes/CardPlayList/CardPlaylist";
import AreaMusicaDetalhePlaylist from "./Componentes/AreaMusicaDetalhePlaylist/AreaMusicaDetalhePlaylist";

const EstiloGlobal = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: flex-start;
`;

const Principal = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  min-height: 100vh;
  width: 75%;
  background-color: #1e1e1e;
  color: white;
`;

const AreaPlaylist = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 1%;
  width: 100%;

  h1 {
    font-size: 40px;
    margin: 0;
  }
`;

const CabecalhoPrincipal = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;

  
`;

const AreaCadastro = styled.div`
  width: 30%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  img {
    width: 7%;
    margin-left: 2%;
    cursor: pointer;
  }
`;

const Player = styled.div`
  width: 100%;
  background-color: black;
  iframe > html > body > video{
    width: 100%;
  }
`
const nome = 'madreyv-sebastiao-carver'
class App extends React.Component {
  state = {
    playlists : [],
    novaPlaylist : "",
    telaDetalhePlaylist:false,
    telaPlaylists:true,
    idAtual:"",
    musicasPlaylist:[],
    player:[{
      artista:"",
      nome:"",
      artista:""
    }]
  }

  componentDidMount(){
    this.carregarPlaylists()
  }

  musicasPlayer = (id) => {
    let musicaAtual = this.state.musicasPlaylist.filter((musica) => {
      return musica.id === id
    }) || []

    this.setState({
      player:musicaAtual
    })
  }

  mudarTela = (id) => {
    this.setState({
      telaDetalhePlaylist: !this.state.telaDetalhePlaylist,
      telaPlaylists: !this.state.telaPlaylists,
      idAtual: id
    })
  }

  carregarPlaylists = () => {

    const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'

    axios.get(url,{
      headers: {
        Authorization: nome
      }
    })
    .then((res) => {
      this.setState({
        playlists:res.data.result.list
      })


    }).catch((err)=>{
      console.log(err.message)
    })

  }

  onChangeInputNovaLista = (e) =>{
    this.setState({
      novaPlaylist: e.target.value 
    })
  }

  carregarMusicasPlaylist = (id) =>{
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`
    axios.get(url,{
      headers:{
        Authorization: nome
      }
    })
    .then((res) =>{
      this.setState({
        musicasPlaylist: res.data.result.tracks
      })
    })
    .catch((err)=>{
      console.log(err.message)
    })
    
  }
  
  novaPlaylist = async () => {

    const verificacao = this.state.playlists.filter((item) => {
      return item.name.toUpperCase() == this.state.novaPlaylist.toUpperCase()
    })

    if(verificacao.length === 0){
      this.cadastrarPlayList()
    }else{
      alert('Já existe uma Playlist com esse nome.')
    }
    
  }

  cadastrarPlayList = async() => {
    try{
      const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
      const body = {"name" : this.state.novaPlaylist}
      
      await axios.post(url, body, {
        headers:{
          Authorization: nome
        }
      })

      this.setState({
        novaPlaylist:''
      })
    } catch(err){
      console.log(err.response)
    }
  }

  deletarComponente = async (id) => {
    try{
      const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`

      const response = await axios.delete(url,{
        headers:{
          Authorization :nome
        }
      })

      this.carregarPlaylists()
    } catch(err){
      console.log(err)
    }
  }

  adcionarMusicas = (body) => {
    let url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.state.idAtual}/tracks`

    axios.post(url,body,{
      headers:{
        Authorization:nome
      }
    })
    .then((res)=>{
      if(res.status === 200){
        this.carregarMusicasPlaylist(this.state.idAtual)
      }
    })
    .catch((err) => {
      console.log(err.message)
    })
  }

  removerMusica = (id) => {
    let url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.state.idAtual}/tracks/${id}`

    axios.delete(url,{
      headers:{
        Authorization: nome
      }
    })
    .then((res) => {
      if(res.status === 200){
        this.carregarMusicasPlaylist(this.state.idAtual)
      }
    })
    .catch((err) => {
      console.log(err.message)
    })
  }

  telaARenderizar = () => {
    let itemSelecionado = this.state.playlists.filter((item) => {
      return item.id === this.state.idAtual
    })
    

    let tela = this.state.telaDetalhePlaylist;
    switch(tela){
      case false:
        return (<CardPlaylist
          playsLists={this.state.playlists|| []}
          funcaoDelete={this.deletarComponente}
          funcaoDetalhePlayList={this.mudarTela}
        />)
        break;
      case true:
        if(this.state.musicasPlaylist.length === 0){
          this.carregarMusicasPlaylist(itemSelecionado[0].id)
        }
        return(
            <AreaMusicaDetalhePlaylist
              playlist={itemSelecionado}
              musicas={this.state.musicasPlaylist}
              funcaoAdcionarMusicas={this.adcionarMusicas}
              funcaoRemoverMusica={this.removerMusica}
              player={this.musicasPlayer}
            />
            )
        break
    }
    
  }

  irParaTelaPlayLists = () =>{
    this.setState({
      telaDetalhePlaylist : false,
      telaPlaylists : true,
      musicasPlaylist:[],
      idAtual:''
    })
  }
  render() {
    let telaRenderizada = this.telaARenderizar()
    return (
      <>
        <EstiloGlobal />
        <Container>
          <MenuVertical
            funcaoIrParaPlaylist={this.irParaTelaPlayLists}
            musicasPlayer={this.state.player}
          />
          <Principal>
            <AreaPlaylist>
              <CabecalhoPrincipal>
                <h1>Playlists</h1>
                <AreaCadastro>
                  <input onChange={this.onChangeInputNovaLista} placeholder="Nome da nova Playlist" value={this.state.novaPlaylist}/>
                  <img src="https://cdn-icons-png.flaticon.com/512/1783/1783255.png" onClick={this.novaPlaylist} />
                </AreaCadastro>
              </CabecalhoPrincipal>
              {telaRenderizada}
            </AreaPlaylist>
          </Principal>
        </Container>
      </>
    );
  }
}

export default App;
