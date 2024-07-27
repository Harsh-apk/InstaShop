import React from 'react'
import { FlatList, Image, View, Text } from 'react-native';
import { useSelector } from 'react-redux'

const Cart = () => {
    const showCart = useSelector(state=>state.ui.showCart);
    const cart = useSelector(state=>state.products.cart)
    if(showCart){
        return (
            <View>
                {cart.length===0 && <View className="flex justify-center items-center h-[90vh] w-screen" ><Text className="text-red-500" >Cart is empty</Text></View>}
                <View className="mx-5 mt-2 " ><Text className="text-xl font-bold text-fuchsia-800" >My Cart</Text></View>
                {cart.length!==0 && <FlatList className="mt-2 mb-32 " data={cart} keyExtractor={(item,index)=>(index)} renderItem={({item})=>{
                    return <View className="flex bg-gray-100 rounded-3xl mx-3 py-3 flex-row justify-around items-center my-2 " >
                        <Image src={item.image} className="w-32 h-32 rounded-2xl " />
                        <Text className="w-32 text-black " >{item.title}</Text>
                        <Text className="text-fuchsia-950 font-bold text-xl " >${item.price}</Text>
                        
                    </View>
                }}  />}

            </View>
        )
    }
  
}

export default Cart
