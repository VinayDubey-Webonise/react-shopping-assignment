import React, { Component } from 'react';
import _ from 'lodash';
import Axios from 'axios';

class TestConcat extends Component {
  constructor() {
    super();
    this.state = {
      product: [],
      cart: [],
      counter: 0
    }
  }

  handleApiCall = () => {
    Axios.get('http://demo5707519.mockable.io/products')
    .then((response) => {
      this.setState({
        tempProduct: response.data
      })
    })
    .catch((error) => {
      console.log("error: ", error);
    });
  }

  concatToProduct = () => {
    let index = this.state.counter;
    console.log("index:", index);
    index++;
    this.setState({
      counter: index
    });
    const id = _.clone(this.state.tempProduct[index].id);
    const name = _.clone(this.state.tempProduct[0].name);
    console.log("id: ", id);
    let newOne = {
      id: id,
      name: name
    }
    let n = _.concat(this.state.product, newOne);
    this.setState({
      product: n
    });
    console.log(this.state);
    return <p>Hey</p>;
  }

  handleConcat = () => {
    this.concatToProduct();
  }

  concatToCart = () => {
    let newOne = {
      id: 1,
      name: 'coke'
    }
    let n = _.concat(this.state.cart, newOne);
    this.setState({
      cart: n
    });
    console.log(this.state);
    return <p>Hey</p>;
  }

  handleConsole = () => {
    this.concatToCart();
  }

  render() { 
    return (  
      <React.Fragment>
        <button type="button" className="btn btn-warning" onClick={ this.handleConcat }>Click to concat</button>
        <ul>
          {
            this.state.product.map((products) => <li key={ products.id }>{ products.name }</li>)
          }
        </ul>
        <button type="button" className="btn btn-warning" onClick={ this.handleConsole }>Click to console</button>
        <button type="button" className="btn btn-warning" onClick={ this.handleApiCall }>Click to temp product</button>
      </React.Fragment>
    );
  }
}
 
export default TestConcat;