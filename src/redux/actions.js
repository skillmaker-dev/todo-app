import { axiosInstance } from "../utils/http";
import { GET_NAMES_FAIL, GET_NAMES_REQUEST, GET_NAMES_SUCCESS, POST_NAME_FAIL, POST_NAME_REQUEST, POST_NAME_SUCCESS } from "./constants";

export const GetNamesAction =()=>async(dispatch)=>{

    try {
        //dispatch for reducer to return loading :true 
       dispatch({type: GET_NAMES_REQUEST})

       const {data}=await axiosInstance.get("names",);
            //dispatch for reducer to return Data in store
       dispatch({type: GET_NAMES_SUCCESS, payload: data});
    }catch(e){
        dispatch({
            type: GET_NAMES_FAIL,
            payload:
              e.response && e.response.data.message
                ? e.response.data.message
                : e.message,
          });
    }

}

export const PostNameAction = (name) => async (dispatch)=>{
    try{
        dispatch({type: POST_NAME_REQUEST})
        const newName = {
            id: Math.floor(Math.random() * 100000),
            Name: name
        }
        console.log(newName);
        const {data} = await axiosInstance.post("names",newName);
        dispatch({type: POST_NAME_SUCCESS, payload: data});
    }catch(e)
    {
        dispatch({
            type: POST_NAME_FAIL,
            payload:
              e.response && e.response.data.message
                ? e.response.data.message
                : e.message,
          });
    }
}
