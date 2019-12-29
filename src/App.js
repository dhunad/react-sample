import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {useSelector,useDispatch,connect} from 'react-redux';
import {increment,decrement} from './actions/counterAction';
import {checkLogin} from './actions/loginAction';
import {ChildApp} from './components/child';

class App extends Component {

  constructor(props) {
        super(props);
    }

render() {
   return (
    <div className="App">
    {this.props.name}
      <div> Counter : {this.props.data.counter}</div>
      <div> Logged In : {this.props.data.userLogin.loggedIn?'Welcome '.concat(this.props.data.userLogin.userDetails.title):'Not Logged In'}</div>
      <button onClick = {() => this.props.dispatch(increment(5))}>+</button>
      <button onClick = {() => this.props.dispatch(decrement(4))}>-</button>
      <button onClick = {() => this.props.dispatch(checkLogin())}>{this.props.data.userLogin.loggedIn ? 'Log Out' : 'Log In'}</button>
      {this.props.children}
    </div>
  );
}
}

// start of code change
const mapStateToProps = (state) => {
  return { data: state };
};

export default connect(mapStateToProps)(App);
