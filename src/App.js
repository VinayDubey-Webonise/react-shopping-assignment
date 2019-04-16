import React, { Component } from 'react';
import './App.css';
import ProductList from './component/productList';
import Axios from 'axios';
import { connect } from 'react-redux';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoading : true,
    };
  }

  componentDidMount() {
    Axios.get('http://demo5707519.mockable.io/products').then(response => {
      this.props.dispatch({
        type: 'GET_INITIAL_PRODUCT_DATA',
        products : response.data
      });
      this.setState({
        isLoading : false,
      });
    })
    .catch(error => {
      console.log('Error fetching and parsing data', error);
    });
  }

  addToCart(cartItemParam) {
    let tempCartItem = this.state.cartItem;
    tempCartItem.push(cartItemParam);
    this.setState({
      cartItem : tempCartItem
    });

    console.log(this.state.cartItem);
  }

  getProductId(productId) {
    return productId;
  }

  handleSubmit(event) {
    event.preventDefault();
    if(this.state.cartItem.length) {
      Axios.post('http://demo5707519.mockable.io/add_to_cart', JSON.stringify(this.state.cartIds)).then(
        res => {
          console.log(res);
          this.props.history.push(`/cart`);
        }
      );
    }
    else {
      alert("No item added to cart");
    }
  }

  disableButton(productId) {
    return true;
  }

  render() {
    const proList =<div>
        <ProductList />
        </div>;
    const cartProduct = this.state.isLoading ? <h2>Loading...</h2> : proList;

    return (
      <div className="App">
        { 
          cartProduct 
        }
      </div>
    );
  }
}

export default connect()(App);
