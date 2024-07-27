import React from 'react'
import { View ,Text, TouchableOpacity} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { setShowCart } from '../../redux/UISlice';

const CartButton = () => {
    const dispatch = useDispatch();
    const cartLength = useSelector(state=>state.products.cart.length)
  return (
    <TouchableOpacity onPress={()=>{
        dispatch(setShowCart())
    }} className=" absolute bg-fuchsia-700 w-16 h-16 flex justify-center items-center  rounded-full bottom-8 right-8 z-50 " >
        <Text className="text-white text-5xl p-4 " >🛍️</Text>
    </TouchableOpacity>
  )
}

export default CartButton
