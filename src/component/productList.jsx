import React, { Component } from 'react';
import ProductItem from './productItem';

class ProductList extends Component {
  render() {
    const mappedData = this.props.productData.map((item) => <ProductItem key={item.id} productDataItem={ item } cartCallback={ (productId) => this.props.cartCallback(productId) } disableButton={ this.props.disableButton } />);
    return ( 
      <div>
        <h3>Product List</h3>
        <hr />
        { mappedData  }
      </div>
     );
  }
}
 
export default ProductList;
