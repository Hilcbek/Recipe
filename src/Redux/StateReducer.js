import { createSlice } from "@reduxjs/toolkit";

let State = createSlice({
    name : 'status',
    initialState : {
        search : false
    },
    reducers : {
        setSearch : (state,action) => {
            state.search = action.payload
        }
    }
})
export let {setSearch} =  State.actions;
export default State.reducer;