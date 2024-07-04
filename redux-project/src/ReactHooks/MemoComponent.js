import React,{useState} from "react";

const MemoComponentExample = ({name}) => {
    // console.log("Is working ====>");
    const [searchText,setSearchText] = useState('');

    const myDebounce =  (cb,delay = 1000) => {
        let timeoutId;
        
        return (...args) =>{
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() =>{
                cb(...args )
            },delay)
        }
    }

    const searchName = myDebounce((text) => {
        console.log(text);
        setSearchText(text);
    },1000) 

    return(
        <div>
            <h1>{searchText}</h1>
            <input onChange={(eve) => searchName(eve.target.value)} type="text" placeholder="Enter anything..." />
        </div>
    )
}
export default MemoComponentExample;