import React, { Component } from 'react';
import Navbar from '../navbar/navbar';
import Axios from 'axios';

class SignUp extends Component {
  signUp = () => {
    Axios.post('http://demo5707519.mockable.io/singup', {
      firstName: this.refs.first_name.value,
      lastName: this.refs.last_name.value,
      email: this.refs.email.value,
      password: this.refs.pwd.value
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((response) => {
      console.log(response.data);
    });
  }
  handleSignUp = (event) => {
    event.preventDefault();
    this.signUp();
  }
  render() { 
    return (  
      <div className="container">
        <Navbar />
        <h3>User Sign Up</h3>
        <form onSubmit={ this.handleSignUp }>
          <div className="form-group">
            <label htmlFor="First Name">First Name:</label>
            <input type="text" className="form-control" ref="first_name" placeholder="First Name" name="first_name" />
          </div>
          <div className="form-group">
            <label htmlFor="Last Name">Last Name:</label>
            <input type="text" className="form-control" ref="last_name" placeholder="Last Name" name="last_name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" className="form-control" ref="email" placeholder="Enter email" name="email" />
          </div>
          <div className="form-group">
            <label htmlFor="pwd">Password:</label>
            <input type="password" className="form-control" ref="pwd" placeholder="Enter password" name="pswd" />
          </div>
          <div className="form-group form-check">
            <label className="form-check-label">
              <input className="form-check-input" type="checkbox" name="remember" /> Remember me
            </label>
          </div>
          <button type="submit" className="btn btn-primary">Register</button>
        </form>
      </div>
    );
  }
}

export default SignUp;