//actions are to update or modify the data
import * as api from '../api'; //will contain all the function form api
import { setCurrentUser } from './currentUser';

//using redux thunk
export const signup = (authData,navigate)=> async (dispatch) => {
    try{
        const {data} = await api.signUp(authData);
        dispatch({type: 'AUTH',data})
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
        navigate('/')   
    }catch(error){
        console.log(error)
    }
}

export const login = (authData,navigate)=>async(dispatch)=>{
    try{
        const {data} = await api.logIn(authData);
        dispatch({type: 'AUTH',data})
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
        navigate('/')   
    }catch(error){
        console.log(error)
    }
}