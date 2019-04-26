//import _ from 'lodash';

const postReducer = (state = [], action) => {
  switch(action.type) {
    case 'GET_INITIAL_PRODUCT_DATA':
      return state.concat([action.products]);
    case 'ADD_TO_CART':
      return state.concat([action.cartItemParam]);        
    default:
      return state;
  }  
}

export default postReducer;
