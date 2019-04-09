import React, { Component } from 'react';

class ProductCheckout extends Component {

  render() { 
    return (
      <form onSubmit={ this.props.submitUrl }>
        <input type="submit" value="Submit"/>
      </form>
     );
  }
}
 
export default ProductCheckout;