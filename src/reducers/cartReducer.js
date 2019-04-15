const postReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_INITIAL_PRODUCT_DATA': 
      return state.concat([action.cartItem]);
    case 'UPDATE_ITEM_IN_CART':
      return state.filter((item)=>item.id !== action.itemId);
    default:
      return state;
  }  
}

export default postReducer;
