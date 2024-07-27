import React from 'react'
import { View,Text } from 'react-native'
import { useSelector } from 'react-redux'


const Error = () => {
    const error = useSelector(state=>state.ui.error);
    if(error){
        return (
            <View className="flex my-2 justify-center items-center" >
                <Text className="text-red-500 text-center text-sm" >Error: Something went wrong </Text>
            </View>
          )
    }
 
}

export default Error
