import React, { Component } from 'react';
import CartProductItem from './cartProductItem';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _ from 'lodash';

class CartProductList extends Component {
  constructor() {
    super();
    this.removeFromCart = this.removeFromCart.bind(this);
    this.increaseItemQuantity = this.increaseItemQuantity.bind(this);
  }

  removeFromCart(item, updatedQuantity) {
    if(updatedQuantity === 0) {
      this.removeWholeItem(item);
    }else {
      this.updatedItemQuantity(item, updatedQuantity);
    }
  }

  increaseItemQuantity(item, updatedQuantity) {
    if(updatedQuantity <= item.quantity) {
      this.updatedItemQuantity(item, updatedQuantity);
    }
    else {
      alert("No more item available")
    }
  }

  removeWholeItem(item) {
    let tempCartItem = this.state.cartItem;
    _.remove(tempCartItem, item);
    this.setState({
      cartItem : tempCartItem
    }
    );
  }

  updatedItemQuantity(item, updatedQuantity) {
    this.props.dispatch({
      type: 'UPDATE_ITEM_IN_CART',
      item: {
        id: item,
        quantity: updatedQuantity
      }
    });
  }

  render() { 
    if(!this.props.cartProductDataStore[0]) {
      return (<div>Loading...</div>);
    }
    const mappedData = this.props.cartProductDataStore[0].map((item) => <CartProductItem key={item.id} cartProductDataItem={ item } removeFromCart={ this.removeFromCart } increaseItemQuantity={ this.increaseItemQuantity } />);
    return (  
      <div>
        {
          mappedData
        }
      </div>
    );
  }
}
 
// export default CartProductList;

// function CartProductList(props) {
//   if(!props.cartProductDataStore[0]) {
//     return (<div>Loading</div>);
//   }
//const mappedData = props.cartProductDataStore[0].map((item) => <CartProductItem key={item.id} cartProductDataItem={ item } removeFromCart={ props.removeFromCart } increaseItemQuantity={ props.increaseItemQuantity } />);
//   return (
    
//   );
// }

const mapStateToProps = (state) => {
  return {
    cartProductDataStore: state
  }
}

CartProductList.propTypes = {
  cartProductData: PropTypes.array,
  increaseItemQuantity: PropTypes.func,
  removeFromCart: PropTypes.func
};

export default connect(mapStateToProps)(CartProductList);
