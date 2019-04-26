const authReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_ACCESS_TOKEN':
    console.log("in auth reducer");
      return state.concat([action.token]);
    default:
      return state;
  }  
}

export default authReducer;
