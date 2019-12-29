import counterReducer from './counterReducer';
import userLogin from './isLoggedInReducer';
import {combineReducers} from 'redux'

//set up all redux

const mainReducer = combineReducers({
  counter : counterReducer,
  userLogin : userLogin
})

export default mainReducer;
