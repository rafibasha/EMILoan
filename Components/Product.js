import React, { Component, useEffect, useState } from 'react';
import { View, Text,StyleSheet,Button } from 'react-native';
import { useDispatch ,useSelector} from 'react-redux';
import { addToCart ,removefromCart} from '../redux/action';

const Product =(props)=> {
    const item = props.item
    const  dispatch = useDispatch()
    const carditems = useSelector((state) => state.reducer)
    const [isAdded, setisAdded] = useState(false)
    const handleAddtoCart = (item) =>{
      
      dispatch(addToCart(item))
    }
    const handleRemovefromcart = (item)=>{
      dispatch(removefromCart(item.name))
    }
    useEffect(()=>{
     let result = carditems.filter((element)=>{
        return element.name === item.name
     });
     console.log('carditems', carditems);
     if(result.length){
      setisAdded(true)
     }
     else{setisAdded(false)}

     },[carditems])

  return (
    <View style={{alignItems:'center',borderBottomWidth:1, backgroundColor:'#f5f6fa'}}>
        <Text style={{ fontSize: 20}}>{item.name}</Text>
        <Text style={{ fontSize: 20}}>{item.category}</Text>
        <Text style={{ fontSize: 20}}>{item.price}</Text>
        {isAdded?
        <Button title="Remove Cart" onPress={()=>handleRemovefromcart(item)}/>:
        <Button title="Add to Cart" onPress={()=>handleAddtoCart(item)}/>
        }
        </View>
  )
};



export default Product;
