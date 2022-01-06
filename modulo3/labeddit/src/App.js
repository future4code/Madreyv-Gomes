import React, {useState} from "react";
import RouterPages from "./routes/RouterPages.js";

import './App.css'
import 'primereact/resources/themes/lara-light-indigo/theme.css'//theme
import 'primereact/resources/primereact.min.css'//core css
import 'primeicons/primeicons.css'//icons
import PrimeReact from 'primereact/api';

import { BrowserRouter, useNavigate } from "react-router-dom";
import Header from "./components/Header/Header.js";
 
 

function App() {
  PrimeReact.autoZIndex = false;
  const token = localStorage.getItem('token');
  const [buttonName, setButtonName] = useState(token? 'Sair' :'Cadastre-se')
  
  return (
    <div >
      <BrowserRouter>
        <Header buttonName={buttonName} setButtonName={setButtonName} />
        <RouterPages buttonName={buttonName} setButtonName={setButtonName}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
