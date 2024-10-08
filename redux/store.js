
import { configureStore } from '@reduxjs/toolkit';
import  rootReducer from './rootReducer';
import createSagaMiddleware from 'redux-saga'
import SagaData from './saga';
const sageMiddeleware = createSagaMiddleware();



const store = configureStore({
    reducer: rootReducer,
    middleware: ()=>[sageMiddeleware]
});


sageMiddeleware.run(SagaData);
export default store;