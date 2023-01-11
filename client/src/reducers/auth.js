const authReducer = (state = {data:null},action) => {
//state = data passed
//action = action to be taken
    switch(action.type){
        case 'AUTH':
            localStorage.setItem('Profile',JSON.stringify({...action?.data}))
             return {...state,data: action?.data};
        case 'LOGOUT':
            localStorage.clear();
            return {...state,data:null}
        default:
            return state
    }
}

export default authReducer;