import React, { Component } from 'react';

class NavbarPostLogin extends Component {
  render() { 
    return (  
      <React.Fragment>
        <li className="nav-item">
          <a className="nav-link" href="/login">Logout</a>
        </li>
      </React.Fragment>
    );
  }
}

export default NavbarPostLogin;