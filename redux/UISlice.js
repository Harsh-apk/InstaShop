
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
   selectedCategory:"all",
   error:null,
   showCart:false,
}



export const uiSlice = createSlice({
    name:'ui',
    initialState,
    reducers:{
        setSelectedCategory : (state,action)=>{
            state.selectedCategory = action.payload;
        },
        setError:(state,action)=>{
            state.error = action.payload
        },
        resetError: (state)=>{
            state.error = null;
        },
        setShowCart:(state)=>{
            state.showCart = !state.showCart;
        }
    },
   
})

export const {setSelectedCategory,setError,resetError,setShowCart} = uiSlice.actions;

export default uiSlice.reducer;
