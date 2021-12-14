import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { goToFeed } from "../routes/coordinates"


export const useUnprotectedPage = () =>{
    const history = useNavigate()
    useEffect(() => {
        const token = localStorage.getItem('token')
        if(token){
            goToFeed(history)
       }
    }, [history])
}