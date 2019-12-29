
import {takeEvery,takeLatest,put,delay,all,call} from 'redux-saga/effects';


function* incrementAsync(){
//  yield delay(4000);
  yield put({type: 'INCREMENT_ASYNC',payload : 2 })
}

function* decrementAsync(){
  //yield delay(4000);
  yield put({type: 'DECREMENT_ASYNC',payload : 1 })

}

function* getUserDetails(){
  try{
    const promise =   yield call(fetch,'https://jsonplaceholder.typicode.com/todos/1');
    const data = yield promise.json();
    yield put({type: 'UPDATE_LOGIN_ASYNC',payload : {loggedIn : true ,userDetails : data }});
  }
 catch(error) {
   yield put({type: 'UPDATE_LOGIN_ASYNC',payload :  {loggedIn : true ,userDetails : {} }});
 }

}

 function* watchIncrement(){
  yield takeEvery('INCREMENT',incrementAsync)
}
 function* watchDecrement(){
  yield takeLatest('DECREMENT',decrementAsync)
}
function* updateLogin(){
 yield takeLatest('CHECK_LOGIN',getUserDetails)
}


export function* rootSaga () {
     yield all([
      watchIncrement(),
        watchDecrement(),
        updateLogin()
    ]);
}
