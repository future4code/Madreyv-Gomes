import React, {useState} from 'react'
import { CardLogin, InputPassword } from '../PagesCss/LoginPage.css'

export default function LoginPage() {

    const [password, setPassword] = useState("")
    const [user, setUser] = useState("")

    const onchangeInputPassword = (e) => {
        setPassword(e.target.value)
    }
    const onchangeInputUser = (e) => {
        setUser(e.target.value)
    }

    return (
        <CardLogin>
            <h2>Labex</h2>
            <input 
            value={user} 
            placeholder="Login" 
            onChange={onchangeInputUser}
            />
            <input 
            type="email" 
            value={password} 
            placeholder="senha"
            onChange={onchangeInputPassword} 
            />

            <button>Entrar</button>
            
        </CardLogin>
    )
}
