import React, { Component } from 'react';

class PlaceOrder extends Component {
    state = {  }
    render() { 
        return ( 
            <form onSubmit={ this.props.submitUrl }>
                <input type="submit" value="Place Order"/>
            </form>
         );
    }
}
 
export default PlaceOrder;