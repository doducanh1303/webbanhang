import React, { Component } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
import {connect} from 'react-redux';
import * as action from './../action/index'

// Configure Firebase.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'redirect',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: '/',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
  
  ]
};
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSignedIn: false,
    }
  }
  
  // Make sure we un-register Firebase observers when the component unmounts.
render() {
      console.log(this.state.name);
        return (
            <div>
                <div className="page-section mb-60">
  <div className="container">
    <div className="row">
      <div className="col-sm-12 col-md-12 col-xs-12 col-lg-6 mb-30">
        {/* Login Form s*/}
        <form action="#">
          <div className="login-form">
            <h4 className="login-title">Login</h4>
            <div className="row">
              <div className="col-md-12 col-12 mb-20">
                <label>Email Address*</label>
                <input className="mb-0" type="email" placeholder="Email Address" />
              </div>
              <div className="col-12 mb-20">
                <label>Password</label>
                <input className="mb-0" type="password" placeholder="Password" />
              </div>
              <div className="col-md-8">
                <div className="check-box d-inline-block ml-0 ml-md-2 mt-10">
                  <input type="checkbox" id="remember_me" />
                  <label htmlFor="remember_me">Remember me</label>
                </div>
              </div>
              <div className="col-md-4 mt-10 mb-20 text-left text-md-right">
                <a href="#"> Forgotten pasward?</a>
              </div>
              <div className="col-md-12">
                <button className="register-button mt-0">Login</button>
              </div>
              <div className="col-md-8">
                <div className="check-box d-inline-block ml-0 ml-md-2 mt-10">
                <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>
                 
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="col-sm-12 col-md-12 col-lg-6 col-xs-12">
        <form action="#">
          <div className="login-form">
            <h4 className="login-title">Register</h4>
            <div className="row">
              <div className="col-md-6 col-12 mb-20">
                <label>First Name</label>
                <input className="mb-0" type="text" placeholder="First Name" />
              </div>
              <div className="col-md-6 col-12 mb-20">
                <label>Last Name</label>
                <input className="mb-0" type="text" placeholder="Last Name" />
              </div>
              <div className="col-md-12 mb-20">
                <label>Email Address*</label>
                <input className="mb-0" type="email" placeholder="Email Address" />
              </div>
              <div className="col-md-6 mb-20">
                <label>Password</label>
                <input className="mb-0" type="password" placeholder="Password" />
              </div>
              <div className="col-md-6 mb-20">
                <label>Confirm Password</label>
                <input className="mb-0" type="password" placeholder="Confirm Password" />
              </div>
              <div className="col-12">
                <button className="register-button mt-0">Register</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>

            </div>
        );
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
     userlogin: (user) => {
      dispatch(action.userlogin(user));
    }
  }
}
export default connect(null, mapDispatchToProps)(Login);