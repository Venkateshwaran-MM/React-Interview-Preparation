import React from "react";
import { useState,useEffect } from "react";

export const useFetchApi = (url) =>{
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(null);
    const [data,setData] = useState([])

    useEffect(() =>{
        setLoading(true)
        fetch(url)
            .then((res) => res.json())
            .then((data) =>{
                setData([data]);
                setError(null);
                setLoading(false);
                console.log("result ====>",data);
            })
            .catch((err) =>{
                setError(err);
                setLoading(false)
                console.log(err)
            })
        
    },[url]);

    return {loading,error,data}
}

