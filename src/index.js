import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore,applyMiddleware,compose} from 'redux';
import mainReducer from './reducers/mainReducer'
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import {rootSaga} from './sagas/saga'
import ChildApp from './components/child'
//ACTION

//REDUCER



const sagaMiddleWare = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//create staore
const store = createStore(
        mainReducer,
        composeEnhancers(applyMiddleware(sagaMiddleWare)),
      );
    sagaMiddleWare.run(rootSaga);


ReactDOM.render(
  <Provider store = {store}>
    <App name="parent">
     <ChildApp name="child">
        <ChildApp name="grandChild">
          <ChildApp name="greatGrandChild"></ChildApp>
        </ChildApp>
      </ChildApp>
     </App>
  </Provider>
  , document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
