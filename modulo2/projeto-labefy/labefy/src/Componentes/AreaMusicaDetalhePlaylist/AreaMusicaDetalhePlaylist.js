import react from "react";
import styled from "styled-components";

const AreaDetalhePlayList = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  min-height: 80vh;
`;
const CabecalhoDetalhePlaylist = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  min-height: 30vh;

  img {
    width: 30%;
  }

  h2 {
    margin-left: 2%;
    font-size: 40px;
  }
`;
const AreaMusicaDetalhePlaylists = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 70%;
`;
const ImagemNovaMusica = styled.img`
  width: 8%;
`;
const ImagensControle = styled.img`
  width: 25%;
  margin-left: 5%;
`;
const MusicaDetalhePlaylist = styled.ul`
  width: 100%;

  li {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid black;
    padding-bottom: 0.5%;
    margin: 2%;

    &:first-child {
      border: none;
      margin: 3%;
    }

    h4{
      width: 33%;
    }
  }

  input {
    border: none;
    color: white;
    background-color: transparent;
    border-bottom: 1px solid gray;
  }
`;

const ImagensControlesMusicas = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  max-width: 30%;
`;

export default class AreaMusicaDetalhePlaylist extends react.Component {

  state={
    inputNome:"",
    inputArtista:"",
    urlMusica:""
  }

  onChangeInputMusica = (e) =>{
    this.setState({
      inputNome : e.target.value
    })
  }
  onChangeInputArtista = (e) =>{
    this.setState({
      inputArtista : e.target.value
    })
  }
  onChangeInputLink = (e) =>{
    this.setState({
      urlMusica : e.target.value
    })
  }

  novaMusica = () => {
    let nome = this.state.inputNome
    let artista = this.state.inputArtista
    let link = this.state.urlMusica

    let musicaApi={
      "name": nome, 
      "artist": artista,
      "url": link
    }

    this.props.funcaoAdcionarMusicas(musicaApi)
    this.setState({
      inputNome:"",
      inputArtista:"",
      urlMusica:""
    })
    
  }

  tocarMusica = (id) => {

    this.props.player(id)
  }
  
  renderizarMusicas = () => {
    return this.props.musicas.map((musica) => {
      return (
          <li>
            <h4>{musica.name}</h4>
            <h4>{musica.artist}</h4>
            <ImagensControlesMusicas>
              <ImagensControle src="https://cdn-icons-png.flaticon.com/512/1783/1783245.png"  onClick={() => this.tocarMusica(musica.id)}/>
              <ImagensControle src="https://cdn-icons-png.flaticon.com/512/1783/1783187.png" onClick={() => this.props.funcaoRemoverMusica(musica.id)} />
            </ImagensControlesMusicas>
          </li>
      );
    });
  };
  render() {
    return (
      <>
        <AreaDetalhePlayList>
          <CabecalhoDetalhePlaylist>
            <img src="https://cdn.pixabay.com/photo/2021/07/11/16/04/freezelight-6404194_960_720.jpg" />
            <h2>{this.props.playlist[0].name}</h2>
          </CabecalhoDetalhePlaylist>
          <AreaMusicaDetalhePlaylists>
            <MusicaDetalhePlaylist>
              <li>
                <input value={this.state.inputNome} type="text" placeholder="Nome musica" onChange={this.onChangeInputMusica}/>
                <input value={this.state.inputArtista} type="text" placeholder="Nome Cantor"  onChange={this.onChangeInputArtista}/>
                <input value={this.state.urlMusica} type="text" placeholder="Link Musica"  onChange={this.onChangeInputLink}/>
                <ImagemNovaMusica src="https://cdn-icons-png.flaticon.com/512/1783/1783255.png" onClick={this.novaMusica} />
              </li>
              {this.renderizarMusicas()}
            </MusicaDetalhePlaylist>
          </AreaMusicaDetalhePlaylists>
        </AreaDetalhePlayList>
      </>
    );
  }
}
