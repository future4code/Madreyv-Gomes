import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";

export const useProtectedPage = () => {

    const history = useNavigate()

    useEffect(() => {
       const token = window.localStorage.getItem('token')

       if(token === null){
           history('/login')
       }
    }, [history])

}