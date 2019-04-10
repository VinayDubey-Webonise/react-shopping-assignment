import React from 'react';
import ProductItem from './productItem';
import PropTypes from 'prop-types';

function ProductList(props) {
  const mappedData = props.productData.map((item) => <ProductItem key={item.id} 
                    productDataItem={ item } cartCallback={ (productId) => props.cartCallback(productId) } 
                    disableButton={ props.disableButton } />);
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

ProductList.propTypes = {
  productData: PropTypes.array,
  cartCallback: PropTypes.func
};

export default ProductList;

