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
    //this.carregarPlaylists()
  }

  componentDidUpdate(){
    this.carregarPlaylists()
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

    const response = axios.get(url,{
      headers: {
        Authorization: nome
      }
    })

    response.then((res) => {
      let playlistsCarregadas = res.data.result.list
      this.setState({
        playlists:playlistsCarregadas
      })
    }).catch((err)=>{
      console.log(err.message)
    })

    // try{
    //   const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'

    //   const response = await axios.get(url,{
    //     headers: {
    //       Authorization: nome
    //     }
    //   })

      // let playlistsCarregadas = response.data.result.list
      // this.setState({
      //   playlists:playlistsCarregadas
      // })
    // } catch(err){
    //   console.log(err.response)
    // }
  }

  onChangeInputNovaLista = (e) =>{
    this.setState({
      novaPlaylist: e.target.value 
    })
  }

  carregarMusicasPlaylist = (id) =>{
    // try{
    //   const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`

    //   const response = await axios.get(url,{
    //     headers:{
    //       Authorization: nome
    //     }
    //   })
    //   let musicas = response.data.result.tracks
    //   this.setState({
    //     musicasPlaylist: musicas
    //   })
    // }catch(err){
    //   console.log(err.response)
    // }
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
    console.log('aqui')
    if(this.state.telaDetalhePlaylist !== true){
      return(<CardPlaylist
        playsLists={this.state.playlists}
        funcaoDelete={this.deletarComponente}
        funcaoDetalhePlayList={this.mudarTela}
      />)
    }else{
      let itemSelecionado = this.state.playlists.filter((item) => {
        return item.id === this.state.idAtual
      })
      this.carregarMusicasPlaylist(itemSelecionado[0].id)
      return(
        <AreaMusicaDetalhePlaylist
          playlist={itemSelecionado}
          musicas={this.state.musicasPlaylist}
        />
      )
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
    //let telaRenderizada = this.telaARenderizar()
    //this.carregarPlaylists()
    console.log('aqui')
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
              {/* {telaRenderizada} */}
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
