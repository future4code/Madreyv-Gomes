import React, { useState } from 'react'
import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';
import { goToFeed, goToLogin, goToSignup } from '../../routes/coordinates';
import { logout } from '../../services/Services';

export default function Header({buttonName, setButtonName}) {
    const token = localStorage.getItem('token')
    const history = useNavigate()
    

    const headerFunction = () => {
        if(token !== null){
            logout()
            setButtonName('Cadastre-se')
            goToLogin(history)
        }else{
            goToSignup(history)
        }
    }
    
    return (
        <Menubar
        start={<h1 onClick={()=>goToFeed(history)}>LabEddit</h1>}
        end={<Button label={buttonName} onClick={headerFunction}/>}
      />
    )
}
