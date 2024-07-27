import React from 'react'
import { Modal, View,Image,Text ,TouchableOpacity} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, unselectProduct } from '../../redux/productData';

const DetailModal = () => {
    const dispatch = useDispatch();
    const item = useSelector(state=>state.products.selectedProduct)
  return (
    <View className="  " >
        <Modal
        transparent={true}
        
        animationType="slide"
        visible={(item!==null)}
        onRequestClose={()=>{

        }}
        >
            <View className=" border-2 border-fuchsia-900 rounded-3xl overflow-hidden mt-32 w-[80vw] mx-10 flex justify-center items-center bg-fuchsia-200" >
                <Image src={item?.image} className=" rounded-2xl mt-10 mb-5 w-64 h-64" />
                <View className="bg-white w-full flex justify-center items-center rounded-t-2xl " >
                    <Text className=" px-1 text-lg mt-5 text-black" >{item?.title.substring(0,60)}...</Text>
                    <Text className="text-center my-2 text-gray-700 text-xs " >{item?.description.substring(0,300)}...</Text>
                    <View className=" w-[50vw] py-2 flex flex-row justify-between items-center" ><Text className="text-green-500 font-bold text-lg " ><Text className="text-black font-normal text-sm" >Ratings: </Text>{item?.rating.rate}</Text><Text className="text-green-500 font-bold text-lg " ><Text className="text-black font-normal text-sm " >Buyers: </Text>{item?.rating.count}</Text></View>
                    <Text className="text-2xl font-bold text-fuchsia-700  " >${item?.price}</Text>
                    <TouchableOpacity onPress={()=>{
                        dispatch(addToCart(item));
                        dispatch(unselectProduct());
                    }} className="bg-fuchsia-700  py-2 px-10 rounded-3xl mt-2  " ><Text className="text-white" >Add to Cart</Text></TouchableOpacity>
                    <TouchableOpacity onPress={()=>{
                        dispatch(unselectProduct());
                    }} className="bg-fuchsia-700  py-2 px-10 rounded-3xl mt-2 mb-5  " ><Text className="text-white" >Done</Text></TouchableOpacity>
                </View>
                
            </View>
        </Modal>
    </View>
  )
}

export default DetailModal
