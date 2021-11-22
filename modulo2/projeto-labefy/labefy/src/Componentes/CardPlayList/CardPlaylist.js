import react from "react";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
  width: 25%;
  height: 50vh;
  box-shadow: 5px 5px 25px 4px #1e1e34;
  border-radius: 10px;
  margin: 2% 4%;
  position: relative;

  h4 {
    font-weight: bold;
  }

  img {
    width: 80%;
    margin-top: 10px;
    border-radius: 5px;
    box-shadow: 0px 5px 26px -5px #666666;
  }
`;

const CardTransparenteCima = styled.div`
  width: 100%;
  height: 50%;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 0;

  &:hover {
    background-color: rgba(255, 255, 255, 0.05);
    background-color: rgba(255, 255, 255, 0.05);
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
  }
  img {
    display: none;
    width: 25%;
    box-shadow: none;
    cursor: pointer;
  }
  &:hover > img {
    display: block;
  }

  h4 {
    display: none;
  }

  &:hover > h4 {
    display: block;
  }
`;
const CardTransparenteBaixo = styled.div`
  width: 100%;
  height: 50%;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  bottom: 0;

  &:hover {
    background-color: rgba(255, 255, 255, 0.05);
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
  }

  img {
    display: none;
    width: 25%;
    box-shadow: none;
    cursor: pointer;
  }
  &:hover > img {
    display: block;
  }

  h4 {
    display: none;
  }

  &:hover > h4 {
    display: block;
  }
`;

const AreaCardPlaylists = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: flex-start;
  margin: auto 0;
  flex-wrap: wrap;
`;

export default class CardPlaylist extends react.Component {
  detalhePlalist = (id) => {
    this.props.funcaoDetalhePlayList(id)
  }

  criarCards = () => {
    return this.props.playsLists.map((item) => {
      return (
        <Card key={item.id}>
          <CardTransparenteCima onClick={() => this.props.funcaoDetalhePlayList(item.id)}>
            <img src="https://cdn-icons-png.flaticon.com/512/1783/1783245.png" alt="icone tocar"/>
            <h4>Tocar</h4>
          </CardTransparenteCima>
          <CardTransparenteBaixo onClick={() => this.props.funcaoDelete(item.id)}>
            <img src="https://cdn-icons-png.flaticon.com/512/1783/1783187.png" alt="icone excluir"/>
            <h4>Excluir</h4>
          </CardTransparenteBaixo>
          <img src="https://cdn.pixabay.com/photo/2021/07/11/16/04/freezelight-6404194_960_720.jpg" alt="imagem playlist"/>
          <h4>{item.name}</h4>
        </Card>
      );
    });
  };

  render() {
    let playlists = this.criarCards();
    return (
      <AreaCardPlaylists>
        {playlists}
      </AreaCardPlaylists>
    );
  }
}
