import axios from "axios";
import { useEffect, useState } from "react";

export const useRequestData = (initialState, url) =>{
    const [data, setData] = useState(initialState)

    useEffect(() => {
        axios.get(url,{
            headers:{
                'Content-Type':"application/json",
                'Authorization': localStorage.getItem('token')
            }
        })
        .then((res)=>{
            setData(res.data)
            
        })
        .catch((err) => {
            alert(err.message)
        })
    }, [url])

    return data
}