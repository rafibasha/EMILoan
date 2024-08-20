import React, { useState, useCallback } from 'react';
import { View, Text, Button } from 'react-native';

const ExpensiveComponent = React.memo(({ onClick }) => {
  console.log('ExpensiveComponent re-rendered');
  return <Button title="Click Me" onPress={onClick} />;
});

const UseCallbackExample = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <View>
      <Text>Count: {count}</Text>
      <ExpensiveComponent onClick={handleClick} />
    </View>
  );
};

export default UseCallbackExample;
