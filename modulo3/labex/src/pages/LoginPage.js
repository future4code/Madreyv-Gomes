import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from '../Components/Hooks/FormHook'
import { CardLogin, InputPassword } from '../PagesCss/LoginPage.css'
import { login } from '../Services.js/Api'

export default function LoginPage() {

    const history = useNavigate()
    const [form, onChangeForm] = useForm({email:'', password:''})
    

    const loginTo = (e) => {
        e.preventDefault()
        
        const request = login(form)
        request.then((res) => {
            window.localStorage.setItem('token', res.token)
        }).catch((err)=>{
            alert(err.message)
        })
        history('../admArea', {replace: true})
    }

    return (
        <CardLogin>
            <h2>Labex</h2>
            <form onSubmit={loginTo}>
                <input 
                name='email'
                value={form.email} 
                placeholder="Login" 
                onChange={onChangeForm}
                type="email"
                />
                <InputPassword 
                type="email" 
                value={form.password} 
                placeholder="senha"
                onChange={onChangeForm}
                type="password"
                name="password"
                />

                <button>Entrar</button>
            </form>
            
        </CardLogin>
    )
}
