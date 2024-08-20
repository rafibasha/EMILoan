import React, { useState, useMemo } from 'react';
import { View, Text, Button } from 'react-native';

const calculateSquare = (num) => {
  console.log('Calculating square...');
  return num * num;
};

const UseMemoExample = () => {
  const [number, setNumber] = useState(1);
  const [count, setCount] = useState(0);

  const square = useMemo(() => calculateSquare(number), [number]);
  //const square = calculateSquare(number);

  return (
    <View>
      <Text>Number: {number}</Text>
      <Text>Square: {square}</Text>
      <Text>count: {count}</Text>
      <Button title="Increase Number" onPress={() => setNumber(number + 1)} />
      <Button title="Increase Count" onPress={() => setCount(count + 1)} />
    </View>
  );
};

export default UseMemoExample;
