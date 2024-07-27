import { configureStore } from "@reduxjs/toolkit";
import  uiSlice from "./UISlice";
import  productSlice  from './productData';


export const store = configureStore({
    reducer:{
       ui:uiSlice,
       products:productSlice,
    }
})