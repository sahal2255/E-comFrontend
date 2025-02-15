import { configureStore } from "@reduxjs/toolkit";
import adminAuthReducer from '../adminSlice'
export const store=configureStore({
    reducer:{
        admin:adminAuthReducer
    }
})
