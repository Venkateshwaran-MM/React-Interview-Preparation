import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    name:"Venkatesh"
}

const nameChange = (state,action) => {
    console.log("Is workinf",action);
    state.name = action.payload
}

// reducer
const homeReducerSlice = createSlice({
    name: 'home',
    initialState,
    reducers:{
        changeNameState: nameChange
    }
});

//Action
const {changeNameState} = homeReducerSlice.actions
const homeReducer = homeReducerSlice.reducer;

// Selectoe
const getMyName = (home) => home.name
export {
    homeReducer,
    changeNameState,
    getMyName
}