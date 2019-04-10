import React from 'react';
import PropTypes from 'prop-types';

const removeFromCart = (props) => {
  props.removeFromCart(props.cartProductDataItem, props.cartProductDataItem.cart_quantity - 1);
};

const increaseItemQuantity = (props) => {
  props.increaseItemQuantity(props.cartProductDataItem, props.cartProductDataItem.cart_quantity + 1);
};

function CartProductItem(props) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <div className="container-3">{ props.cartProductDataItem.name }</div>
          </div>
          <div className="col-sm">
            <div className="container-3">&#8377;{ props.cartProductDataItem.price }</div>
          </div>
          <div className="col-sm">
            <button className="btn-primary" type="button" onClick={ () => increaseItemQuantity(props) }>+</button>
          </div>
          <div className="col-sm">
            <div className="container-3">{ props.cartProductDataItem.cart_quantity } </div>
          </div>
          <div className="col-sm">
            <button className="btn-primary" type="button" onClick={ () => removeFromCart(props) }>-</button>
          </div>
        </div>
      </div>     
     );
}

CartProductItem.propTypes = {
  cartProductData: PropTypes.object,
  removeFromCart: PropTypes.func,
  increaseItemQuantity: PropTypes.func
};

export default CartProductItem;
