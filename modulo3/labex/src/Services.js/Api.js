import axios from "axios"
import { baseUrl, token } from "./axiosConfig"



export const getTrips = async(variable) => {

    const url = baseUrl + 'trips'

    try{
        const request = await axios.get(url)

        return request.data

    }catch(err){
        console.log(err.response)
    }
}

export const getTripDetail = async(id) => {
    const url = baseUrl + 'trip/' + 'UEs6VhRusDQhUVNH5yav'

    try{
        const request = await axios.get(url,{
            headers:{
                auth:token
            }
        })

        console.log(request.data)
    }catch(err){
        console.log(err.response)
    }
}

export const setTrip = async(trip) => {

    const url = baseUrl + 'trips'
    const body = {
        "name": "Ano novo em Rio das Ostras",
        "planet": "Terra",
        "date": "31/12/2021",
        "description": "Venha passar a virada pertinho do Sol!",
        "durationInDays": 7
    }
    try{
        const request = await axios.post(url, body,{
            headers:{
                'Content-Type':"application/json",
                auth:token
            }
        })

        console.log(request.data)
    }catch(err){
        console.log(err.message)
    }
}

export const applyToTrip = async(user,idTrip) => {
    idTrip = 'UEs6VhRusDQhUVNH5yav'
    const url = baseUrl + `trips/${idTrip}/apply`
    const body = {
        "name": "Astrodev",
        "age": 20,
        "applicationText": "Quero muuuuuuito ir!!!",
        "profession": "Chefe",
        "country": "Brasil"
    }

    try{
        const request = await axios.post(url, body,{
            headers:{
                'Content-Type':"application/json",
            }
        })

        console.log(request.data.message)
    }catch(err){
        console.log(err.message)
    }

}

export const login = async(user) =>{
    const url = baseUrl + 'login'

    try{
        const request = await  axios.post(url,user,{
            headers:{
                'Content-Type':"application/json",
            }
        })

        return request.data
    }catch(err){
        alert("Usuario ou senha errados!")
    }
}

export const deleteTrip = async (id) => {
    const url = baseUrl + 'trips/' + id

    try{
        const request = await axios.delete(url,{
            headers:{
                'Content-Type':"application/json",
                auth:token
            }
        })
        return request.data.success
    }catch(err){
        alert(err.message)
    }
}

export const getCountries = async(user) => {
    const url = 'https://servicodados.ibge.gov.br/api/v1/paises/'

    try{

        const request = await axios.get(url)

        return request.data
    }catch(err){
        console.log(err.message)
    }
}