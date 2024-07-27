import React from 'react'
import Categories from './Categories'
import ProductList from './ProductList'
import { useSelector } from 'react-redux'

const Homepage = () => {
    const showCart = useSelector(state=>state.ui.showCart)
    if(!showCart){
        return (
            <>
            <Categories/>
            <ProductList/>
            </>
          )
    }
  
}

export default Homepage
