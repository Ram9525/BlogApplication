import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading:false
}

const loadingSlice = createSlice({
    name:'loader',
    initialState,
    reducers:{
        setLoading(state,action){
            state.loading = action.payload
        }
    }
})

export const {setLoading} = loadingSlice.actions;

export default loadingSlice.reducer;