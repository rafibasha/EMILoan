import { takeEvery, put } from 'redux-saga/effects';
import { USER_LIST ,GET_ALL_USERS} from './constants';

function* userList() {
  const url ="https://dummyjson.com/users"
  let data = yield fetch(url);
  data = yield data.json();
 yield put({type: GET_ALL_USERS, data});


}

function* SagaData(){
yield takeEvery(USER_LIST,userList)
}

export default SagaData;


