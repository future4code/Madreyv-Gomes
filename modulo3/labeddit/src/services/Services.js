import axios from "axios";
import { goToFeed, goToLogin } from "../routes/coordinates";
import { BASE_URL } from "./AxiosConfig";

export const singUp = (body, clear,history) => {
    const url = BASE_URL + '/users/signup'

    axios.post(url,body,{
        headers:{
            'Content-Type':"application/json"
        }
    })
    .then((res)=>{
        clear();

        localStorage.setItem('token', res.data.token)

        goToLogin(history)
    })
    .catch((err)=>{
        alert('Verifique as informações cadastradas')
    })
}

export const login = (body, clear,history) => {
    const url = BASE_URL + '/users/login'

    axios.post(url,body,{
        headers:{
            'Content-Type':"application/json"
        }
    })
    .then((res)=>{
        clear();

        localStorage.setItem('token', res.data.token)
        console.log(res.data)
        goToFeed(history)
    })
    .catch((err)=>{
        alert('Usuario ou senha não encontrados!')
    })
}