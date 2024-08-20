import React, { useImperativeHandle, useRef, forwardRef } from 'react';
import { View, Text, Button, TextInput } from 'react-native';

const CustomInput = forwardRef((props, ref) => {
  const inputRef = useRef(null);

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    }
  }));

  return <TextInput ref={inputRef} {...props} />;
});

const UseImperativeHandleExample = () => {
  const inputRef = useRef(null);

  return (
    <View>
      <CustomInput ref={inputRef} placeholder="Custom Input" />
      <Button title="Focus Input" onPress={() => inputRef.current.focus()} />
    </View>
  );
};

export default UseImperativeHandleExample;
