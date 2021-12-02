import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import { getPerfil, choosePerson } from "../../Servicos/Servicos";
import {
  ContainerCard,
  ImageArea,
  DataMatch,
  ButtonsArea,
  ContainerAreaCard,
} from "./AreaCard.css";

import Coracao from "../../Util/Img/coracaoIcon.svg"
import CoracaoQuebrado from '../../Util/Img/coracaoIcone2.svg'

export default function AreaCardApp() {
  const [perfil, setPerfil] = useState([]);
  const [perfilEscolido, setPerfilEscohido] = useState(true);

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

  return (
    <ContainerCard>
      <ContainerAreaCard imagem={perfil.photo} />
      <ImageArea>
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
    </ContainerCard>
  );
}
