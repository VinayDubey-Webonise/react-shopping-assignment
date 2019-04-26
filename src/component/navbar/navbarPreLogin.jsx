import React, { Component } from 'react';

class NavbarPreLogin extends Component {
  render() { 
    return (  
      <React.Fragment>
        <li className="nav-item">
          <a className="nav-link" href="/login">Sign In</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/signUp">Sign Up</a>
        </li>
      </React.Fragment>
    );
  }
}

export default NavbarPreLogin;