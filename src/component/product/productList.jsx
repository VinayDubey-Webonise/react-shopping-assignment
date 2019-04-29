import React, { Component } from 'react';
import ProductItem from './productItem';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Axios from 'axios';
import ProductCheckout from './productCheckout';

class ProductList extends Component {
  constructor() {
    super();
    this.addToCart = this.addToCart.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.disableButton = this.disableButton.bind(this);
  }

  addToCart(cartItemParam) {
    this.props.dispatch({
      type: 'ADD_TO_CART',
      cartItemParam
    });
  }

  getProductId(productId) {
    return productId;
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("all: ", this.state);
    if(this.state.cartItem.length) {
      Axios.post('http://demo5707519.mockable.io/add_to_cart', JSON.stringify(this.state.cartIds)).then(
        res => {
          console.log(res);
          window.location.href = "/cart";
        }
      );
    }
    else {
      alert("No item added to cart");
    }
  }

  disableButton() {
    return true;
  }  

  render() { 
    console.log("product list: ", this.props.productDataStore[0]);
    console.log("products: ", this.props.productDataStore);
    const mappedData = this.props.productDataStore[0].map((item) => <ProductItem key={item.id} 
                    productDataItem={ item } cartCallback={ this.addToCart } 
                    disableButton={ this.disableButton } />);
    return (  
      <div>
        { 
          mappedData  
        }
        <span>Total Item in Cart : { this.props.productDataStore[0].length }</span>
        <ProductCheckout submitUrl={ this.handleSubmit }/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state.productReducer);
  return {
    productDataStore: state.productReducer
  }
}

ProductList.propTypes = {
  productData: PropTypes.array,
  cartCallback: PropTypes.func
};

export default connect(mapStateToProps)(ProductList);
