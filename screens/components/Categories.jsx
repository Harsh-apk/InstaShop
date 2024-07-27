import React from 'react'
import { TouchableOpacity,Text, ScrollView, View } from 'react-native'
import { CATEGORIES } from '../../utils/Constants'
import { useDispatch, useSelector } from 'react-redux'
import { setSelectedCategory } from '../../redux/UISlice'
import { disableFilterProduct, filterProducts } from '../../redux/productData'


const Categories = () => {
    const selectedCategory = useSelector(state=>state.ui.selectedCategory);
    const dispatch = useDispatch();
  return (
    <View className="border border-fuchsia-600  mx-2 rounded-2xl mt-2 " >
        <View className="my-3 ml-2  " ><Text className="text-2xl font-bold text-black" >Categories</Text></View>
   <ScrollView horizontal className="mb-3"  >
    {CATEGORIES.map((item,index)=>{

        return (
            <TouchableOpacity onPress={()=>{
                dispatch(setSelectedCategory(item));
                if(item!==CATEGORIES[0]){
                    dispatch(filterProducts(item));
                }else{
                    dispatch(disableFilterProduct());
                }
            }} className={` px-3 py-1 mx-1 bg-fuchsia-200 rounded-full ${item===selectedCategory?"border-2 border-fuchsia-900 ":""} `} key={index} >
                <Text className={` text-lg capitalize text-fuchsia-900  ${item===selectedCategory?"font-bold":""}  `} >{item}</Text>
            </TouchableOpacity>
        )
    })}
   </ScrollView>
   </View>
  )
}

export default Categories
