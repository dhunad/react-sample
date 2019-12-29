const counterReducer = (state = 0,action) =>{
    switch (action.type) {
      case 'INCREMENT_ASYNC': return state + action.payload;
      case 'DECREMENT_ASYNC': return state - action.payload;
      default: return state;
    }
}

export default counterReducer;
