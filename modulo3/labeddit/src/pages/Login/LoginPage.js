import React, { useState } from 'react'
import { ContainerButton, LoginContainer, LoginForm } from './styled.css'
import { InputText } from 'primereact/inputtext';
import { useForm } from '../../hooks/useForm';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';
import { goToSignup } from '../../routes/coordinates';
import { login } from '../../services/Services';
import { useUnprotectedPage } from '../../hooks/useUnprotectedPage';

export default function LoginPage({buttonName, setButtonName}) {
    useUnprotectedPage()
    const[form, onChangeValue, clear] = useForm({email:"", password:''})
    const [isLoading, setIsLoading] = useState(false)
    const history = useNavigate()

    const handleform = (e) =>{
        e.preventDefault()
        login(form,clear,history,setButtonName,setIsLoading)
    }
    return (
        <LoginContainer>
            <h1>Login</h1>
            <LoginForm  onSubmit={handleform}>
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
                    label="Login" 
                    type='submit'
                /> }
                
            </LoginForm>
            <ContainerButton>
            <Button 
                onClick={() => goToSignup(history)}
                label="Não é um membro? Cadastre-se" className="p-button-raised p-button-text" 
            />
            </ContainerButton>
        </LoginContainer>
    )
}
