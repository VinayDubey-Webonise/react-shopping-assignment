import React, { Component } from 'react';
import './App.css';
import ProductList from './component/productList';
import ProductCheckout from './component/productCheckout';
import Axios from 'axios';
import { connect } from 'react-redux';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoading : true,
      cartItem : []
    };
    this.addToCart = this.addToCart.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteFromCart = this.deleteFromCart.bind(this);
    this.disableButton = this.disableButton.bind(this);
    this.setInitialDataToStore = this.setInitialDataToStore.bind(this);
  }

  setInitialDataToStore(data) {
    console.log(data);
    this.props.dispatch({
      type: 'ADD_INITIAL_PRODUCT_DATA',
      products: data
    });
  }

  componentDidMount() {
    Axios.get('http://demo5707519.mockable.io/products').then(response => {
      // this.setState({
      //   isLoading : false,
      //   products : response.data
      // });
      this.setInitialDataToStore(response.data);
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

  deleteFromCart() {
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
        <ProductList productData={ this.state.products } cartCallback={ (cartItem) => this.addToCart(cartItem) } 
          disableButton={ (productId) => this.disableButton(productId) } />
        <span>Total Item in Cart : { this.state.cartItem.length }</span>
        <ProductCheckout submitUrl={ this.handleSubmit }/>
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

const mapStateToProps = (state) => {
  return {
    productStoreData: state
  }
}

export default connect()(App);
