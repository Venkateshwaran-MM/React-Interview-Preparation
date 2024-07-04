import React,{createContext} from "react";

const MyContext = createContext()

const ContextAPI = () => {
    return (
        <MyContext.Provider value={"Ahana"}>
        <h1>ContextAPI</h1>
        <ComA />
    </MyContext.Provider>
    )
}

export default ContextAPI;

function ComA () {
    return(
        <>
            <ComB />
        </>
    )
}
function ComB () {
    return(
        <>
            <ComC />
        </>
    )
}
function ComC () {
    return(
        <>
            <MyContext.Consumer>
                {(name) => {
                    return <h1>{name}</h1>
                }}
            </MyContext.Consumer>
        </>
    )
}