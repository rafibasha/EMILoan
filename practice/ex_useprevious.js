import React, { useRef, useEffect } from 'react';
import { View, Text, Button } from 'react-native';

const usePrevious = (value) => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
};

const PreviousValueExample = () => {
  const [count, setCount] = React.useState(0);
  const prevCount = usePrevious(count);

  return (
    <View>
      <Text>Current Count: {count}</Text>
      <Text>Previous Count: {prevCount}</Text>
      <Button title="Increase" onPress={() => setCount(count + 1)} />
    </View>
  );
};

export default PreviousValueExample;
