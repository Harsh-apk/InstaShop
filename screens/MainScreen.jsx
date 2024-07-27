import React, {useState} from 'react';
import Navbar from './components/Navbar';
import {View} from 'react-native';
import {get} from 'react-native/Libraries/TurboModule/TurboModuleRegistry';
import Categories from './components/Categories';
import ProductList from './components/ProductList';
import CartButton from './components/CartButton';
import DetailModal from './components/DetailModal';
import Error from './components/Error';
import Homepage from './components/Homepage';
import Cart from './components/Cart';


const MainScreen = () => {
  return (
    <View className="w-screen h-screen bg-white relative ">
      <DetailModal/>
      <CartButton/>
      <Navbar />
      <Error/>
      <Homepage/>
      <Cart/>
    </View>
  );
};

export default MainScreen;
