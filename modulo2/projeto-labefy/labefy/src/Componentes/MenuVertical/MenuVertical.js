import react from "react";
import styled from "styled-components";

const Menu = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border: 1px solid red;
  width: 25%;
  background-color: black;
`;

const CabecalhoMenu = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  height: 10%;
  border: 1px solid red;
  width: 100%;
  color: white;
  align-items: center;

  img {
    width: 20%;
    margin: 0 10%;
  }
`;

const ListaMenu = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  width: 100%;
  padding: 0;

  img {
    width: 10%;
    margin: 0 3%;
  }
`;
const ItemListaMenu = styled.li`
  width: 90%;
  margin: 2% 0;
  color: white;
  font-size: 18px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1%;

  &:hover {
    background-color: #282828;
    cursor: pointer;
    border: 1px solid #282828;
    border-radius: 5px;
  }
`;

export default class MenuVertical extends react.Component {
  render() {
    return (
      <Menu>
        <CabecalhoMenu>
          <img src="https://cdn-icons-png.flaticon.com/512/6183/6183941.png" />
          <h2>Labefy</h2>
        </CabecalhoMenu>
        <ListaMenu>
          <ItemListaMenu onClick={this.props.funcaoIrParaPlaylist}>
            <img src="https://cdn-icons-png.flaticon.com/512/3225/3225401.png" />
            Playlists
          </ItemListaMenu>
          <ItemListaMenu>
            <img src="https://cdn-icons-png.flaticon.com/512/1783/1783255.png" />
            Criar Playlist
          </ItemListaMenu>
        </ListaMenu>
      </Menu>
    );
  }
}
