import React from 'react';
import CartProductItem from './cartProductItem';
import PropTypes from 'prop-types';

function CartProductList(props) {
  const mappedData = props.cartProductData.map((item) => <CartProductItem key={item.id} cartProductDataItem={ item } removeFromCart={ props.removeFromCart } increaseItemQuantity={ props.increaseItemQuantity } />);
  return (
    <div>
      {
        mappedData
      }
    </div>
  );
}

CartProductList.propTypes = {
  cartProductData: PropTypes.array,
  increaseItemQuantity: PropTypes.func,
  removeFromCart: PropTypes.func
};

export default CartProductList;
