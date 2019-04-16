import React, { Component } from 'react';
import Axios from 'axios';
import CartProductList from './cartProductList';
import 'bootstrap/dist/css/bootstrap.css';
import { connect } from 'react-redux';

class Cart extends Component {
  constructor() {
    super();
    this.state = {
      isLoading : true,
    };
  }

  componentDidMount() {
    Axios.get('http://demo5707519.mockable.io/cart_products').then(response => {
      this.setState({
        isLoading : false,
      });

      this.props.dispatch({
        type: 'ADD_INITIAL_PRODUCT_DATA',
        cartItem : response.data
      });
      
    })
    .catch(error => {
      console.log('Error fetching and parsing data', error);
    });
  }

  render() { 
    const cartProduct = this.state.isLoading ?  <h2>Loading...</h2> : <div><CartProductList /></div>; 
    return ( 
        <div className="container">
          <h3>Cart List</h3>
          <hr />
            { 
              cartProduct 
            }          
        </div>
     );
  }
}

export default connect()(Cart);
 