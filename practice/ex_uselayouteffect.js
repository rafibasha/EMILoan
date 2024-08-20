import React, { useLayoutEffect, useRef, useState } from 'react';
import { View, Text, Button, LayoutRectangle } from 'react-native';

const LayoutEffectExample = () => {
  const [layout, setLayout] = useState({width:200,height:300});
  const viewRef = useRef(null);

  useLayoutEffect(() => {
    viewRef.current.measure((x, y, width, height, pageX, pageY) => {
      setLayout({ width, height, pageX, pageY });
    });
  }, []);

  return (
    <View ref={viewRef} style={{ padding: 20 }}>
      <Text>Layout: {layout ? `Width: ${layout.width}, Height: ${layout.height}` : 'Measuring...'}</Text>
    </View>
  );
};

export default LayoutEffectExample;
