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
  border: 1px solid blue;
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

const nome = 'madreyv-sebastiao-carver'
class App extends React.Component {
  state = {
    playlists : [],
    novaPlaylist : "",
    telaDetalhePlaylist:false,
    telaPlaylists:true,
    idAtual:"",
    musicasPlaylist:[]
  }

  componentDidMount(){
    this.carregarPlaylists()
    // let playlistsCarregadas = this.carregarPlaylists()
    // this.setState({
    //   playlists:playlistsCarregadas
    // })
  }

  // componentDidUpdate(){
    
  // }

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
      console.log('renderizou')
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
      console.log(res.data.result.tracks)
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

    } catch(err){
      console.log(err)
    }
  }

  telaARenderizar = () => {
    console.log(this.state.telaDetalhePlaylist)
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
          console.log(this.state.musicasPlaylist)
        }
        return(
            <AreaMusicaDetalhePlaylist
              playlist={itemSelecionado}
              musicas={this.state.musicasPlaylist}
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
              {/* <AreaMusicaDetalhePlaylist/> */}
              {/* <CardPlaylist
                playsLists={this.state.playlists}
                funcaoDelete={this.deletarComponente}
                funcaoDetalhePlayList={this.mudarTela}
              /> */}
            </AreaPlaylist>
          </Principal>
        </Container>
      </>
    );
  }
}

export default App;
