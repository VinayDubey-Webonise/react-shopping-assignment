import React, { Component } from 'react';
import ProductHeader from './productHeader'
import ProductList from './productList'

class Main extends Component {
  constructor() {
    super();
    this.state = {
      product_names : [],
      product_amount : [],
      product_quantity : []
    };
  }

  componentDidMount() {
    
  }

  render() { 
    return ( 
      <div>
        <ProductHeader />
        <ProductList product_names={ this.state.product_names } product_amounts={ this.state.product_amount }
         product_quantity={ this.state.product_quantity }/>
      </div>
     );
  }
}
 
export default Main;