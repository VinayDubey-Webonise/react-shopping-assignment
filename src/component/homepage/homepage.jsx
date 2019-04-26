import React, { Component } from 'react';
import '../../asset/css/style.css';
import Navbar from '../navbar/navbar';

class Homepage extends Component {
  render() { 
    return (  
      <div className="bg">
        <Navbar />
      </div>
    );
  }
}

export default Homepage;