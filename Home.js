import React, { Component } from 'react';
import { View, Text,Button } from 'react-native';

  
  function HomeScreen({ navigation }) {
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center' ,backgroundColor:'red',height: '50%',}}>
        <Text>Home Screenddddd</Text>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Details')}
        />
      </View>
    );
  }


export default HomeScreen;
