import React from 'react';
import CartProductItem from './cartProductItem';

const mappedData = props.cartProductData.map((item) => 
                  <CartProductItem key={item.id} cartProductDataItem={ item } 
                  removeFromCart={ props.removeFromCart } increaseItemQuantity={ props.increaseItemQuantity } />);
                  
function CartProductList(props) {
  return ( 
    <div>
      {
        mappedData
      }
    </div>
  );
}
