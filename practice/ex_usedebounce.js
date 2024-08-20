import React, { useState } from 'react';
import { View, TextInput, Text } from 'react-native';
import { debounce } from 'lodash'; // Install lodash

const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  React.useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

const DebounceExample = () => {
  const [inputValue, setInputValue] = useState('');
  const debouncedValue = useDebounce(inputValue, 500);

  return (
    <View>
      <TextInput
        value={inputValue}
        onChangeText={setInputValue}
        placeholder="Type something..."
      />
      <Text>Debounced Value: {debouncedValue}</Text>
    </View>
  );
};

export default DebounceExample;
