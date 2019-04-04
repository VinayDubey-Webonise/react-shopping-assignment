import React, { Component } from 'react';
import '../asset/css/style.css';
class ProductListItem extends Component {

  render() { 
    const names = this.props.name_list, amounts = this.props.amount_list, quantity = this.props.quantity_list;

    const productListItemName = names.map(
        (names) => <li key={ names }> { names } </li>
      );
    const productListItemAmount = amounts.map(
      (amounts) => <li key={ amounts }> { amounts } </li>
    );
    const productListItemQuantity = quantity.map(
      (quantity) => <li key={ quantity }> { quantity } </li>
    );
    
    return ( 
      <React.Fragment>
        <div className="inline">
          <ul className="removeDecoration">
            { productListItemName }
          </ul>
        </div>
        <div className="inline">
          <ul className="removeDecoration">
            { productListItemAmount }
          </ul>
        </div>
        <div className="inline">
          <ul className="removeDecoration">
            { productListItemQuantity }
          </ul>
        </div>
      </React.Fragment>
     );
  }
}
 
export default ProductListItem;