import axios from "axios";

const urlBase = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/madreyv-carver/'


export const getPerfil = async() => {
    const url = urlBase + 'person'

    try{
       const request =  await axios.get(url)

        return request.data
    }catch(err){
        console.log(err.mensage)
    }
}

export const choosePerson = async(id, escolha) => {
    const url = urlBase + 'choose-person'
    const body = {
        "id" : id,
        "choice": escolha
    }

    try{
        const request = await axios.post(url,body)
        console.log(request.status)
        return request.status
    }catch(err){
        console.log(err.mensage)
    }
}

export const getMatches = async () => {
    const url = urlBase + 'matches'
    try{
        const request = await axios.get(url)

        return request.data

    }catch(err){
        console.log(err.mensage)
    }
}

export const clearMatches = async () => {
    const url = urlBase + 'clear'

    try{
        const request = await axios.put(url)

        return request.status
    }catch(err){
        console.log(err.mensage)
    }
}