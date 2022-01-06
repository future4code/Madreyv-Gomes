import axios from "axios";
import { useProtectedPages } from "../hooks/useProtectesPage";
import { goToFeed, goToLogin } from "../routes/coordinates";
import { BASE_URL } from "./AxiosConfig";

export const singUp = (body, clear,history,setButtonName,setIsLoading) => {
    const url = BASE_URL + '/users/signup'

    setIsLoading(true)
     axios.post(url,body,{
        headers:{
            'Content-Type':"application/json"
        }
    })
    .then((res)=>{
        alert( "Usuario criado com sucesso!")
        clear();

        setButtonName("Login")
        setIsLoading(false)
        goToLogin(history)
    })
    .catch((err)=>{
        setIsLoading(false)
        alert(err.response.data.message)
    })
}

export const login = (body, clear,history,setButtonName,setIsLoading) => {
    const url = BASE_URL + '/users/login'
    setIsLoading(true)
    axios.post(url,body,{
        headers:{
            'Content-Type':"application/json"
        }
    })
    .then((res)=>{
        clear();

        localStorage.setItem('token', res.data.token)
        setButtonName('Sair')
        setIsLoading(false)
        goToFeed(history)

    })
    .catch((err)=>{
        setIsLoading(false)
        alert('Usuario ou senha não encontrados!')
    })
}

export const logout = () => {
    localStorage.removeItem('token')
}

export const votePost = async (body,id) => {
    const url = `${BASE_URL}/posts/${id}/votes`
    
    try{
        const res = await axios.post(url,body,{
            headers:{
                'Content-Type':"application/json",
                'Authorization': localStorage.getItem('token')
            }
        })

        return res.status
    }catch(err){

        alert(err.response.data.message)
    }
}

export const editVotePost = async (body,id) => {
    const url = `${BASE_URL}/posts/${id}/votes`

    try{
       const res = await axios.put(url,body,{
            headers:{
                'Content-Type':"application/json",
                'Authorization': localStorage.getItem('token')
            }
        })
        
        return res.status
    }catch(err){
        alert(err.response.data.message)

    }
}

export const getPosts = async (setIsLoading) =>{
    let url = BASE_URL + '/posts'
    setIsLoading(true)
    try{
        const request = await axios.get(url,{
            headers:{
                'Content-Type':"application/json",
                'Authorization': localStorage.getItem('token')
            }
        })

        return request.data
    }catch(err) {
        setIsLoading(false)
        alert(err.response.data.message)
    }

}

export const createPost = async (body) => {
    let url = BASE_URL + '/posts'
    try{
        const request = await axios.post(url,body,{
            headers:{
                'Content-Type':"application/json",
                'Authorization': localStorage.getItem('token')
            }
        })

        return request.response
    }catch(err){
        alert('Tivemos uma indisponibilidade. Tente novamente mais tarde.')
    }
}

export const getPostComments = async (id,setIsLoading) =>{
    let url = BASE_URL + '/posts/' + id + '/comments'
    setIsLoading(true)
    try{
        const request = await axios.get(url,{
            headers:{
                'Authorization': localStorage.getItem('token')
            }
        })

        return request.data
    }catch(err) {
        setIsLoading(false)
        alert(err.response.data.message)
    }
}

export const voteComment = async(body,id) => {
    const url = `${BASE_URL}/comments/${id}/votes`
    
    try{
        const res = await axios.post(url,body,{
            headers:{
                'Content-Type':"application/json",
                'Authorization': localStorage.getItem('token')
            }
        })

        return res.status
    }catch(err){

        alert(err.response.data.message)
    }
}

export const editVoteComment = async (body,id) => {
    const url = `${BASE_URL}/comments/${id}/votes`

    try{
       const res = await axios.put(url,body,{
            headers:{
                'Content-Type':"application/json",
                'Authorization': localStorage.getItem('token')
            }
        })
        
        return res.status
    }catch(err){
        alert(err.response.data.message)

    }
}

export const createComment = async (body, id) => {
    const url = `${BASE_URL}/posts/${id}/comments`

    try{
        const res = await axios.post(url, body,{
            headers:{
                'Content-Type':"application/json",
                'Authorization': localStorage.getItem('token')
            }
        })

        return res.data
    }catch(err){
        alert(err.response.data.message)
    }
}