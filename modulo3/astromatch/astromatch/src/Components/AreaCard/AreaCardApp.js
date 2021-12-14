import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import { getPerfil, choosePerson } from "../../Servicos/Servicos";
import {
  ContainerCard,
  ImageArea,
  DataMatch,
  ButtonsArea,
  ContainerAreaCard,
  Loader
} from "./AreaCard.css";

import Coracao from "../../Util/Img/coracaoIcon.svg"
import CoracaoQuebrado from '../../Util/Img/coracaoIcone2.svg'

export default function AreaCardApp() {
  const [perfil, setPerfil] = useState(null);
  const [perfilEscolido, setPerfilEscohido] = useState(true);
  const [rotacao, setRotacao] = useState(0);

  useEffect(() => {
    let perfilCompleto = getPerfil();

    perfilCompleto.then((res) => {
      setPerfil(res.profile);
    });
  }, [perfilEscolido]);

  const escolher = (choice) => {
    choosePerson(perfil.id, choice);
    setPerfilEscohido(!perfilEscolido);
  };
  
  let itemRenderizado = ""
  console.log(perfil)
  if(perfil !== null){
    itemRenderizado = (
      <>
        <ContainerAreaCard imagem={perfil.photo} />
        <ImageArea animacao={rotacao}>
          <img src={perfil.photo} />
          <DataMatch>
            <h4>
              {perfil.name}, <span>{perfil.age}</span>
            </h4>
            <p>{perfil.bio}</p>
          </DataMatch>
        </ImageArea>
        <ButtonsArea>
          <img src={Coracao} onClick={() => escolher(true)} />
          <img src={CoracaoQuebrado} onClick={() => escolher(false)}/>
        </ButtonsArea>
      </>
    )
  }else{
    itemRenderizado = <Loader src={Coracao} />
  }

  return (
    <ContainerCard>
      {itemRenderizado}
    </ContainerCard>
  );
}
