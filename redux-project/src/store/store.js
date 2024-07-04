import {configureStore} from '@reduxjs/toolkit';
import {homeReducer} from '../reducer/HomeReducer';

const store = configureStore({
    reducer: homeReducer
});

export default store;