import React, { useRef } from 'react';
import { View, Text, Button, TextInput } from 'react-native';

const FocusInput = () => {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <View>
      <TextInput ref={inputRef} placeholder="Tap the button to focus me" />
      <Button title="Focus Input" onPress={focusInput} />
    </View>
  );
};

export default FocusInput;
