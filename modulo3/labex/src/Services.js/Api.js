import axios from "axios"
import { baseUrl, token } from "./axiosConfig"



export const getTrips = async(variable) => {

    const url = baseUrl + 'trips'
    console.log(url)

    try{
        const resquest = await axios.get(url)

        console.log(resquest.data)

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