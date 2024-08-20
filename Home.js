import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
//import AppButton from'./Components/appbutton';

function HomeScreen({ navigation }) {
  return (
    <View style={styles.main_view}>
      <View style={styles.sub_view}>
      <Button
        title="EMI"
        onPress={() => navigation.navigate('Details')}
      />
      <Button
        title="Principal"
        onPress={() => navigation.navigate('Details')}
      />
      </View>
      
      <View style={styles.sub_view2}>
      <Button
        title="EMI"
        onPress={() => navigation.navigate('Details')}
      />
      <Button
        title="Principal"
        onPress={() => navigation.navigate('Details')}
      />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  main_view: { flex:1,alignItems: 'center', justifyContent: 'center', backgroundColor: '#8570C6' },
  sub_view: { flex:2,alignItems: 'center', justifyContent: 'center', backgroundColor: 'red', height: '50%' },
  sub_view2: {flex:1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'green', height: '50%' },

  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
})

export default HomeScreen;
