import React from 'react';
import {useSelector,useDispatch,connect} from 'react-redux';
import {increment,decrement} from '../actions/counterAction';
const ChildApp = props => {
  const counter = useSelector(state=> state.counter);
  const isLoggedIn = useSelector(state=> state.isLoggedIn);
  const dispatch = useDispatch();
  const greeting = 'Hello Im a ';
  return (
    <div>
    counter : {counter} {greeting}{props.name}{props.children}
    <button onClick = {() => dispatch(increment(5))}>+</button>
    <button onClick = {() => dispatch(decrement(4))}>-</button>
    </div>
  );
}
export default ChildApp;
