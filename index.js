/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
// import store from './store'
import store from './redux/store';
const AppRedux = () => (
  <Provider store={store}>
    <App />
  </Provider>
);
// export default App;
export default AppRedux;
AppRegistry.registerComponent(appName, () => AppRedux);
