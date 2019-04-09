import React, { Component } from 'react';

class CartProductItem extends Component {
  render() { 
    const removeFromCart = () => {
      this.props.removeFromCart(this.props.cartProductDataItem, this.props.cartProductDataItem.cart_quantity - 1);
    };
    const increaseItemQuantity = () => {
      this.props.increaseItemQuantity(this.props.cartProductDataItem, this.props.cartProductDataItem.cart_quantity + 1);
    };

    return ( 
      <React.Fragment>
      <div>
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <div className="container-3">{ this.props.cartProductDataItem.name }</div>
          </div>
          <div className="col-sm">
            <div className="container-3">&#8377;{ this.props.cartProductDataItem.price }</div>
          </div>
          <div className="col-sm">
            <button className="btn-primary" type="button" onClick={ increaseItemQuantity }>+</button>
          </div>
          <div className="col-sm">
            <div className="container-3">{ this.props.cartProductDataItem.cart_quantity } </div>
          </div>
          <div className="col-sm">
            <button className="btn-primary" type="button" onClick={ removeFromCart }>-</button>
          </div>
        </div>
      </div>     
      </div>
      </React.Fragment>
     );
  }
}

export default CartProductItem;
