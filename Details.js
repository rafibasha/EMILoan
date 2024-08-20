import React, { Component } from 'react';
import { View, Text,Button,StyleSheet } from 'react-native';

  
  function DetailScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        
      </View>
    );
  }
  const styles = StyleSheet.create({
    main_view: { alignItems: 'center', justifyContent: 'center' ,backgroundColor:'#8570C6',height: '50%'}})

export default DetailScreen;
