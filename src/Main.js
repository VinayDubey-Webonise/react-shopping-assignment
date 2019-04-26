import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFound from './component/notFoundPage';
import Cart from './component/cart';
import App from './App';
import OrderPlaced from './component/orderPlaced';
import login from './component/singIn/login';
import signUp from './component/signup/signup';
import homepage from './component/homepage/homepage';
import axiosTest from './test/axiosTest';

class Main extends Component {
  
  render() { 
    return ( 
        <Router>
            <Switch>
                <Route path="/" exact component={ homepage } />
                <Route path="/signUp" component={ signUp } />
                <Route path="/product" exact component={ App } />
                <Route path="/cart" component={ Cart } />
                <Route path="/order_placed" component={ OrderPlaced } />
                <Route path="/login" component={ login } />
                <Route path="/axiostest" component={ axiosTest } />
                <Route component={ NotFound } />
            </Switch>
        </Router>
    );
  }
}

export default Main;
