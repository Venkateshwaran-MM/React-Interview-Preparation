import React,{useState,useCallback, useMemo} from "react";

export const ExampleUseCallbackComponent = () => {

    const [name,setName] = useState('');

    let myName = useMemo(() => {
        return "venkatesh"
    },[name])

    const sampleComponent = useCallback(() =>{
        console.log("Is working ====>",name);
        return(
            <>
                <h1>Sample Component</h1>
            </>
        )
    },[name]);

    return(
        <div>
            <h1>Use callback component </h1>
            <h1>{myName}</h1>
            {sampleComponent()}
            <button onClick={() => {
                setName("heloo")
            }}>ChangeName</button>
        </div>
    )
}