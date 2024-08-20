import * as React from 'react';
import { View, Text ,Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Home';
import DetailScreen from './Details';
import Counter from './practice/ex_usestate';
import DataFetcher from './practice/ex_useeffect';
import AppContext from './practice/ex_usecontext';
import CounterWithReducer from './practice/ex_usereducer';
import UseCallbackExample from './practice/ex_usecallback';
import UseMemoExample from './practice/ex_usememo';
import PreviousValueExample from './practice/ex_useprevious';
import DebounceExample from './practice/ex_usedebounce';
import LayoutEffectExample from './practice/ex_uselayouteffect';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={LayoutEffectExample} options={{ title: 'Overview' }}/>
        <Stack.Screen name="Details" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;