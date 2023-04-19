import { combineReducers, applyMiddleware } from "redux";
import { configureStore } from '@reduxjs/toolkit';
import thunk from "redux-thunk";
import { GET_NAMES } from "./reducer";




const initialState = {

}






const middleware=[thunk];


const store = configureStore({
    reducer: {
        namesList:GET_NAMES
    },
    preloadedState: initialState,
    devTools: applyMiddleware(...middleware)
})

export default store;