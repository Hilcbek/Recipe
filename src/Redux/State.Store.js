import { configureStore } from "@reduxjs/toolkit";
import StateReducer from "./StateReducer";
export default configureStore({
    reducer : {
        status : StateReducer
    }
})