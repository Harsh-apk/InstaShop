import React from 'react'
import { Text, View } from 'react-native'

const Navbar = () => {
  return (
    <View className="p-4 bg-fuchsia-200 flex justify-center items-center  rounded-b-3xl " >
        <Text className="font-bold text-2xl text-fuchsia-950" >InstaShop</Text>
    </View>
  )
}

export default Navbar
