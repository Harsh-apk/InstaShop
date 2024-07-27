
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
   allProducts:[],
   filteredProducts:[],
   selectedProduct:null,
   cart:[],
}



export const productSlice = createSlice({
    name:'product',
    initialState,
    reducers:{
        filterProducts:(state,action)=>{
            state.filteredProducts = state.allProducts.filter((item)=>{
                return item.category === action.payload;
            })
        },
        disableFilterProduct:(state)=>{
            state.filteredProducts = state.allProducts;
        }
        ,
        selectProduct: (state,action)=>{
            state.selectedProduct = action.payload;
        },
        unselectProduct: (state)=>{
            state.selectedProduct = null;
        },
        setAllProducts: (state,action)=>{
            state.allProducts = action.payload;
        },
        addToCart:(state,action)=>{
            state.cart.push(action.payload);
        }

    },
})

export const {filterProducts,selectProduct,unselectProduct,setAllProducts,disableFilterProduct,addToCart} = productSlice.actions;

export default productSlice.reducer;
