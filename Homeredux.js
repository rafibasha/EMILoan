import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
//import AppButton from'./Components/appbutton';
import {addToCart} from './redux/action'
import { useDispatch } from 'react-redux';
import Header from './Components/Header';
import Product from './Components/Product';
const Homeredux = ({ navigation })=> {
  const handleAddtoCart = (item) =>{
    console.warn("called",item)
  }
  const dispatch =useDispatch();
  const products =[{
    name:"iphone",
    category:'mobile',
    price:100,
    color:'red'
  },{
    name:"smsung",
    category:'mobile',
    price:80,
    color:'blue'
  },{
    name:"vivo",
    category:'mobile',
    price:60,
    color:'green'
  }]
  return (
    <View style={styles.main_view}>
     <Header/>
     <ScrollView>

     {
         products.map((item)=> <Product item={item}/>)
    }
    </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  main_view: { flex:1 },

})

export default Homeredux;
