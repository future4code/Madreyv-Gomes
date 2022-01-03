import React, { useState } from 'react'
import { useForm } from '../../hooks/useForm'
import { LoginContainerSignUp, LoginFormSignUp } from './styled'
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';
import { singUp } from '../../services/Services';
import { useUnprotectedPage } from '../../hooks/useUnprotectedPage';


export default function SignUpPage({setButtonName}) {

    useUnprotectedPage()
    const[form, onChangeValue, clear] = useForm({
        "username":"",
        "email": "",
        "password": ""
    })
    const [isLoading, setIsLoading] = useState(false)
    const history = useNavigate()

    const handleForm = (e) =>{
        e.preventDefault()
        singUp(form,clear,history,setButtonName,setIsLoading)
    }
    return (
        <>
            <LoginContainerSignUp>
                <h1>Cadastre-se</h1>
                <LoginFormSignUp onSubmit={handleForm}>
                    <span className="p-float-label">
                        <InputText 
                            id="username" 
                            value={form.username}
                            name="username"
                            type='text'
                            onChange={onChangeValue}
                            required
                        />
                        <label htmlFor="username">Nome</label>
                    </span>
                    <span className="p-float-label">
                        <InputText 
                            id="userEmail" 
                            value={form.email}
                            name="email"
                            type='email'
                            onChange={onChangeValue} 
                            required
                        />
                        <label htmlFor="userEmail">Email</label>
                    </span>
                    <span className="p-float-label">
                        <InputText 
                            id="userPassword" 
                            value={form.password}
                            name="password"
                            type='password'
                            onChange={onChangeValue} 
                            required
                        />
                        <label htmlFor="userPassword">Senha</label>
                    </span>
                    {isLoading 
                    ? <Button 
                       loading 
                     /> 
                    : <Button 
                    label="Cadastrar" 
                    type='submit'
                    /> }
                    

                </LoginFormSignUp>
            </LoginContainerSignUp>
        </>
    )
}
