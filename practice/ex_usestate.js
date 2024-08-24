import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const Counter = () => {
  const [count, setCount] = useState(0);
function getdata(){
  console.log('getdata')
}
function getdata(){
  console.log('getdata')
}
  return (
    <View>
      <Text>Count: {count}</Text>
      <Button title="Increase" onPress={() => setCount(count + 1)} />
        
    </View>
  );
};

export default Counter;