import { GET_NAMES_REQUEST,GET_NAMES_SUCCESS,GET_NAMES_FAIL, POST_NAME_REQUEST, POST_NAME_FAIL, POST_NAME_SUCCESS } from "./constants";

export const GET_NAMES=(state = {loading: true, names: []}, action)=>{
    switch(action.type)
    {
       case GET_NAMES_REQUEST:
       case POST_NAME_REQUEST:
            return {
                ...state,
                loading: true
            };
       case GET_NAMES_SUCCESS:
            return {loading: false,names: action.payload};
       case GET_NAMES_FAIL:
       case POST_NAME_FAIL:
           return {loading: false,error: action.payload};
       case POST_NAME_SUCCESS:
            return {loading: false,names: [...state.names,action.payload]}   
       default:
           return state;

    }
}