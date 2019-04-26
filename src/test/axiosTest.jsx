import React, { Component } from 'react';
import _ from 'lodash';
import { axiosPost } from '../util/Axios';

class axiosTest extends Component {
  constructor() {
    super();
    this.state = {
      result: null
    }
    axiosPost("http://demo5707519.mockable.io/axiosTest")
    .then((response) => {
      this.setState({
        result: response
      });
    });
  }
  render() { 
    console.log("result-", !_.isEmpty(this.state.result) ? this.state.result.msg : "Loading...");
    return (  
      <h3>
      </h3>
    );
  }
}
export default axiosTest;
