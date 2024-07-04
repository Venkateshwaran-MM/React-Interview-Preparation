
import React from "react";
import { useEffect,useState } from "react";
import {useFetchApi} from '../CustomHook';

const CustomHookComponent = () =>{
    const {loading,error,data} = useFetchApi("https://jsonplaceholder.typicode.com/todos/1"); // Custom Hook

    const _renderView = () =>{
        return data.map((item,i) =>{
            return (
                <div key={i}>
                    <h1>{item.title}</h1>
                </div>
            )
        })
    }

    return(
        <div>
            {loading ? <h1>Loading...</h1>: null}
            {error ? <h1></h1>: null}
            {
                data.length > 0?
                <>
                    {_renderView()}
                </>:
                null
            }
        </div>
    )
}

export default CustomHookComponent;