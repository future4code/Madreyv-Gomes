import React, { useEffect, useState } from "react";
import { getMatches } from "../../Servicos/Servicos";
import { CardLista, ContainerListas } from "./ListaMatches.css";

export default function ListaMatches() {
  const [perfis, setPerfis] = useState([]);

  useEffect(() => {
    let matches = getMatches();

    matches.then((res) => {
      setPerfis(res.matches);
    });
  }, []);

  const montarCards = () => {
    return perfis.map((perfil) => {
      return (
        <CardLista>
          <div>
            <img src={perfil.photo} />
          </div>
          <h3>{perfil.name}</h3>
        </CardLista>
      );
    });
  };
  return (
    <ContainerListas>
        {montarCards()}
    </ContainerListas>
  );
}
