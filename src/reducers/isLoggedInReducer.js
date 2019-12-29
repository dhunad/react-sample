const userLogin = (state = {loggedIn :false,userdetaiLs :{}},action) =>{
    switch (action.type) {
      case 'UPDATE_LOGIN_ASYNC': return action.payload;
      default:  return state;
    }
}

export default userLogin;
