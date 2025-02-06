import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    status:false,
    userData:'null'
}

const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
            login(state,action){
                state.status =true,
                state.userData=action.payload //dispatch(login({userData})) then we used action.payload.userData to get the userData since we are passing the userData as an object
                // here dispatch(login(userData)) then only we can use action.payload to get the userData since we are passing just the object information
                // console.log("action.payload.userData", state.userData);
                
            },
            logout(state){
                state.status =false,
                state.userData='null'
            },


    }

})

export const {login,logout} = authSlice.actions;

export default authSlice.reducer;