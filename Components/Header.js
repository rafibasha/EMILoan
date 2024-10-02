/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
const Header = () => {
  const carddata = useSelector(state => state.reducer);
  const [isAdded, setisAdded] = useState(false);

  const [carditem, setcarditem] = useState(0);
  useEffect(() => {
    setcarditem(carddata.length);
  }, [carddata]);

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 20,
          textAlign: 'right',
          padding: 5,
          backgroundColor: 'red',
          color: 'white',
        }}>
        {carditem}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#fff',
  },
});

export default Header;
