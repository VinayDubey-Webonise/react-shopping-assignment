import React, { Component } from 'react';

const removeFromCart = () => {
  props.removeFromCart(props.cartProductDataItem, props.cartProductDataItem.cart_quantity - 1);
};

const increaseItemQuantity = () => {
  props.increaseItemQuantity(props.cartProductDataItem, props.cartProductDataItem.cart_quantity + 1);
};

function CartProductItem(props) {
  return ( 
    <div>
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <div className="container-3">{ props.cartProductDataItem.name }</div>
          </div>
          <div className="col-sm">
            <div className="container-3">&#8377;{ props.cartProductDataItem.price }</div>
          </div>
          <div className="col-sm">
            <button className="btn-primary" type="button" onClick={ increaseItemQuantity }>+</button>
          </div>
          <div className="col-sm">
            <div className="container-3">{ props.cartProductDataItem.cart_quantity } </div>
          </div>
          <div className="col-sm">
            <button className="btn-primary" type="button" onClick={ removeFromCart }>-</button>
          </div>
        </div>
      </div>     
    </div>
  );
}
