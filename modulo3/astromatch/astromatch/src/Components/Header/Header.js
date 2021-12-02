import React from "react";
import { BotaoEsquerdo, HeaderApp, BotaoDireito, Logo } from "./Header.css";
import HomeSVG from "../../Util/Img/home.svg"
import MatcherSVG from "../../Util/Img/matches.svg"
import Restart from "../../Util/Img/restart.svg"
import { clearMatches } from "../../Servicos/Servicos";


export default function Header(props) {
  const limpar = ()=>{
    clearMatches();
    props.telas('home')
  }
  let botaoDireito ='';
  let botaoEsquerdo ='';
  if(props.lado === true){
    botaoDireito = <BotaoDireito  src={MatcherSVG} onClick={() => props.telas("lista")}/>;
    botaoEsquerdo = <></>
  }else{
    botaoEsquerdo = <BotaoEsquerdo src={HomeSVG} onClick={() => props.telas("home")}/>;
    botaoDireito = <BotaoDireito  src={Restart} onClick={limpar}/>;
  }
  return (
    <HeaderApp>
      {botaoEsquerdo}
      <div>
        <Logo src={props.logo}  />
      </div>
      {botaoDireito}
    </HeaderApp>
  );
}
