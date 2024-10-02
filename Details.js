import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {getUserList} from './redux/action';
import {useDispatch, useSelector} from 'react-redux';
function DetailScreen() {
  const dispatch = useDispatch();
  const userlists = useSelector(state => state.reducer);

  useEffect(() => {
    dispatch(getUserList());
  }, [dispatch]);
  console.warn('innn', userlists);
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
    </View>
  );
}

export default DetailScreen;
