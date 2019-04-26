import React, { Component } from 'react';
import NavbarPreLogin from './navbarPreLogin';
import NavbarPostLogin from './navbarPostLogin';

class Navbar extends Component {
  render() { 
    const navbarLinks = localStorage.getItem('access_token') ? <NavbarPostLogin /> : <NavbarPreLogin />
    return (  
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">Home</a>
            </li>
            {
              navbarLinks
            }
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;