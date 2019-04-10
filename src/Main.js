import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFound from './component/notFoundPage';
import Cart from './component/cart';
import App from './App';
import OrderPlaced from './component/orderPlaced';

class Main extends Component {
  
  render() { 
    return ( 
        <Router>
            <Switch>
                <Route path="/" exact component={App} />
                <Route path="/cart" component={Cart} />
                <Route path="/order_placed" component={OrderPlaced} />
                <Route component={NotFound} />
            </Switch>
        </Router>
    );
  }
}
 
export default Main;
