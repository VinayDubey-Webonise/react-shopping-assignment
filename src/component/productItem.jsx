import React, { Component } from 'react';

class ProductItem extends Component {
  constructor() {
    super();
    this.state = {
      isButtonDisable : false
    };
  }

  addItemToCart() {
    this.props.cartCallback(this.props.productDataItem.id);
    this.setState({
      isButtonDisable : true
    });
  }

  render() { 
    return ( 
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <div className="container-3"><img src={ this.props.productDataItem.imageUrl } 
              alt="" height="100" width="100"/></div>
          </div>
          <div className="col-sm">
            <div className="container-3">{ this.props.productDataItem.name }</div>
          </div>
          <div className="col-sm">
            <div className="container-3">&#8377;{ this.props.productDataItem.price }</div>
          </div>
          <div className="col-sm">
          <button type="button" onClick={ addItemToCart } disabled={ this.state.isButtonDisable }>Add to cart</button>
          </div>
        </div>
      </div>     
    );
  }
}

export default ProductItem;
