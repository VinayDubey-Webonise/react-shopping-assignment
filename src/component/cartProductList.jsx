import React, { Component } from 'react';
import CartProductItem from './cartProductItem';

class CartProductList extends Component {
  render() { 
    const mappedData = this.props.cartProductData.map((item) => <CartProductItem key={item.id} cartProductDataItem={ item } removeFromCart={ this.props.removeFromCart } increaseItemQuantity={ this.props.increaseItemQuantity } />);
    return ( 
        <div>
          {
            mappedData
          }
        </div>
      );
  }
}
 
export default CartProductList;
