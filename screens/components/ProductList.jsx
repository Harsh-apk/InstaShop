
import React, { useEffect } from 'react'
import { FlatList, TouchableOpacity, View,Text, Image, TouchableWithoutFeedback } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../../utils/getAllProducts';
import { selectProduct } from '../../redux/productData';


const ProductList = () => {
  const allProducts = useSelector(state=>state.products.allProducts);
  const dispatch = useDispatch();
  useEffect(()=>{
    if(allProducts.length===0){
      getAllProducts(dispatch);
    }
  },[allProducts])
  const products = useSelector(state=>state.products.filteredProducts)
  return (
    <View style={{flex : 1, flexGrow :1}} className="bg-white mx-4 mb-10" >
      <FlatList className="bg-white" columnWrapperStyle={{
            flex: 1,
            justifyContent: "space-around"
            
        }} 
         data={products} numColumns={2}  renderItem={({item})=>{
        return (
          <View>
        <TouchableOpacity onPress={()=>{
          dispatch(selectProduct(item))
        }} className=" rounded-xl  w-44 mt-4  flex justify-center items-center bg-gray-100" >
          <Image src={item.image} className=" rounded-lg my-4 w-32 h-32" />
          <View className="px-2" ><Text className="text-black text-center " >{item.title.substring(0,30)}...</Text></View>
          <View className="px-2" ><Text className="text-black font-bold pt-2 " >${item.price}</Text></View>
        </TouchableOpacity>
        </View>
      )}} />

    </View>
  )
}

export default ProductList
