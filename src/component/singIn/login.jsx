import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Axios from 'axios';
import Navbar from '../navbar/navbar';
import { connect } from 'react-redux';

class Login extends Component {
  
  handleLogin = (event) => {
    event.preventDefault();
    let component = this;
    Axios.post('http://demo5707519.mockable.io/check_credentials', {
      email: this.refs.email.value,
      password: this.refs.pwd.value
    })
    .then(function (response) {
      console.log(response.data['session_token']);
      const access_token = response.data['session_token'];
      component.storeSessionToken(access_token);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  storeSessionToken = (sessionToken) => {
    if(sessionToken !== '') {
      this.props.dispatch({
        type: 'ADD_ACCESS_TOKEN',
        token : sessionToken
      });
      localStorage.setItem('access_Token', sessionToken);
    }
  }

  render() { 
    return (  
      <div className="container">
        <Navbar />
        <h3>User Sign In</h3>
        <form onSubmit={ this.handleLogin }>
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
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state.authReducer);
  return {
    authDataStore: state.authReducer
  }
}
 
export default connect(mapStateToProps)(Login);