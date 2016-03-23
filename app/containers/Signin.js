import React, { Component } from 'react';
import browserHistory from 'react-router';
import axios from 'axios';
import authHelpers from '../utils/authHelpers';
import SigninForm from '../components/SigninForm';

class Signin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      error: null,
    };

    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onSigninSubmit = this.onSigninSubmit.bind(this);
    this.preventDefaultSubmit = this.preventDefaultSubmit.bind(this);
  }

  onEmailChange(e) {
    this.setState({ email: e.target.value });
  }

  onPasswordChange(e) {
    this.setState({ password: e.target.value });
  }

  onSigninSubmit() {
    // create user
    const user = {
      email: this.state.email,
      password: this.state.password,
    };

    axios.post('/auth/signin', user)
    .then((res) => {
      this.setState({ error: null });
      authHelpers.storeToken(res.data.token, res.data.id);
      browserHistory.push('/');
    })
    .catch((err) => {
      this.setState({ error: err.data });
    });

    // clear form
    this.setState({ email: '', password: '' });
  }

  preventDefaultSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <SigninForm
        errorMessage={this.state.error}
        email={this.state.email}
        password={this.state.password}
        onEmailChange={this.onEmailChange}
        onPasswordChange={this.onPasswordChange}
        onSigninSubmit={this.onSigninSubmit}
        preventDefaultSubmit={this.preventDefaultSubmit}
      />
    );
  }
}

export default Signin;
