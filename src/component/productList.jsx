import React, { Component } from 'react';
import ProductItem from './productItem';

const mappedData = props.productData.map((item) => <ProductItem key={item.id} 
                    productDataItem={ item } cartCallback={ (productId) => props.cartCallback(productId) } 
                    disableButton={ props.disableButton } />);

function ProductList(props) {    
  return ( 
    <div>
      <h3>Product List</h3>
      <hr />
      {
        mappedData
      }
    </div>
    );
}
