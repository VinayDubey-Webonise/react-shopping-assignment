import _ from 'lodash';

const postReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_INITIAL_PRODUCT_DATA':
      return state.concat([action.cartItem]);
    case 'UPDATE_ITEM_IN_CART':
      let tempState = _.cloneDeep(state); // create a clone of the existing state not pointing to same state
      let index = _.findIndex(state[0], action.item);
      tempState[0][index]['cart_quantity'] = action.updatedQuantity;
      return tempState;
    case 'DELETE_ITEM_FROM_LIST':
      let newState = [state[0].filter((stateItem)=>stateItem['id'] !== action.item['id'])];
      return newState;
    default:
      return state;
  }  
}

export default postReducer;

/*
  Note :- 
  1) Directly change into the state will not trigger render component. Need to return a new copy of the state object
*/
