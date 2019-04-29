import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFound from './component/notFoundPage';
import Cart from './component/cart/cart';
import Product from './component/product/product';
import OrderPlaced from './component/cart/orderPlaced';
import Login from './component/singIn/login';
import SignUp from './component/signup/signup';
import Homepage from './component/homepage/homepage';
import AxiosTest from './test/axiosTest';
import TestConcat from './testconcat';

class App extends Component {  
  render() { 
    return ( 
        <Router>
            <Switch>
                <Route path="/testconcat" exact component={ TestConcat } />
                <Route path="/" exact component={ Homepage } />
                <Route path="/signUp" component={ SignUp } />
                <Route path="/product" exact component={ Product } />
                <Route path="/cart" component={ Cart } />
                <Route path="/order_placed" component={ OrderPlaced } />
                <Route path="/login" component={ Login } />
                <Route path="/axiostest" component={ AxiosTest } />
                <Route component={ NotFound } />
            </Switch>
        </Router>
    );
  }
}

export default App;
