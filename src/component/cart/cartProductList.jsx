import React, { Component } from 'react';
import CartProductItem from './cartProductItem';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PlaceOrder from './placeOrder';
import Axios from 'axios';

class CartProductList extends Component {
  constructor() {
    super();
    this.removeFromCart = this.removeFromCart.bind(this);
    this.increaseItemQuantity = this.increaseItemQuantity.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  removeFromCart(item, updatedQuantity) {
    if(updatedQuantity === 0) {
      this.removeWholeItem(item);
    }else {
      this.updatedItemQuantity(item, updatedQuantity);
    }
  }

  updatedItemQuantity(item, updatedQuantity) {
    this.props.dispatch({
      type: 'UPDATE_ITEM_IN_CART',
      item,
      updatedQuantity
    });
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
    this.props.dispatch({
      type: 'DELETE_ITEM_FROM_LIST',
      item
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    if(this.props.cartProductDataStore[0].length <= 0) {
      alert("Add some item in the cart");
    }
    else {
      Axios.post('http://demo5707519.mockable.io/place_order', JSON.stringify(this.props.cartProductDataItem)).then(
        res => {
          console.log(res);
          window.location.href = "/order_placed";
        }
      );
    }
  }

  render() { 
    if(!this.props.cartProductDataStore[0]) {
      return (<div>Loading...</div>);
    }
    const mappedData = this.props.cartProductDataStore[0].map((item) => <CartProductItem key={item.id} 
                        cartProductDataItem={ item } removeFromCart={ this.removeFromCart } 
                        increaseItemQuantity={ this.increaseItemQuantity } />);
    return (  
      <div>
        {
          mappedData
        }
        <PlaceOrder submitUrl={ this.handleSubmit } />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cartProductDataStore: state.cartReducer
  }
}

CartProductList.propTypes = {
  cartProductData: PropTypes.array,
  increaseItemQuantity: PropTypes.func,
  removeFromCart: PropTypes.func
};

export default connect(mapStateToProps)(CartProductList);
