import React from "react";
import { useDispatch,useSelector } from 'react-redux';
import {changeNameState,getMyName} from '../reducer/HomeReducer';

const HomeComponent = () => {
    const myName = useSelector(getMyName)
    const dispatch = useDispatch();
    return(
        <div>
            <h1>{myName}</h1>
            <button onClick={() => {
                dispatch(changeNameState("Venkateshwaran"))
            }}>Change Name</button>
        </div>
    )
}

export default HomeComponent;