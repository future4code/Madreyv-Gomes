import react from "react";
import styled from "styled-components";

const AreaDetalhePlayList = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  border: 1px solid red;
  width: 100%;
  min-height: 80vh;
`;
const CabecalhoDetalhePlaylist = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  border: 1px solid blue;
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
  border: 1px solid red;
  width: 50%;
`;
const ImagemNovaMusica = styled.img`
  width: 8%;
`;
const ImagensControle = styled.img`
  width: 25%;
  margin-left: 5%;
`;
const MusicaDetalhePlaylist = styled.ul`
  border: 1px solid blue;
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
  renderizarMusicas = () => {
    return this.props.musicas.map((musica) => {
      return (
        <li>
          <iframe src={musica.url} width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
          <h4>{musica.name}</h4>
          <h4>{musica.artis}t</h4>
          <ImagensControlesMusicas>
            <ImagensControle src="https://cdn-icons-png.flaticon.com/512/1783/1783245.png" />
            <ImagensControle src="https://cdn-icons-png.flaticon.com/512/1783/1783315.png" />
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
                <input type="text" placeholder="Nome musica" />
                <input type="text" placeholder="Nome Cantor" />
                <ImagemNovaMusica src="https://cdn-icons-png.flaticon.com/512/1783/1783255.png" />
              </li>
              {this.renderizarMusicas()}
            </MusicaDetalhePlaylist>
          </AreaMusicaDetalhePlaylists>
        </AreaDetalhePlayList>
      </>
    );
  }
}
