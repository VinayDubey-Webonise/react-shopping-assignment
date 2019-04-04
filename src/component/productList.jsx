import React, { Component } from 'react';
import ProductListItem from './productListItem';

class ProductList extends Component {
  state = {  }
  render() {
    return ( 
      <div>
        <ProductListItem name_list={ this.props.product_names } amount_list={ this.props.product_amounts } quantity_list={ this.props.product_quantity }/>
      </div>
     );
  }
}
 
export default ProductList;