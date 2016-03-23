import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import axios from 'axios';
import authHelpers from '../utils/authHelpers';
import SignupForm from '../components/auth/SignupForm';

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      error: null,
    };

    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onSignupSubmit = this.onSignupSubmit.bind(this);
    this.preventDefaultSubmit = this.preventDefaultSubmit.bind(this);
  }

  onEmailChange(e) {
    this.setState({ email: e.target.value });
  }

  onPasswordChange(e) {
    this.setState({ password: e.target.value });
  }

  onSignupSubmit() {
    this.checkInput();
  }

  checkInput() {
    const email = this.state.email;
    const password = this.state.password;
    const emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    let error = '';

    if (!emailRegex.test(email)) {
      error += 'Please enter a valid email address.\n ';
    }
    if (!password.length) {
      error += 'Please enter a password.\n ';
    }
    if (password.length < 6) {
      error += 'Password must be at least 6 characters.\n ';
    }

    error ? this.setState({ error }) : this.handleSubmit(email, password);
  }

  handleSubmit(email, password) {
    axios.post('/auth/signup', { email, password })
    .then((res) => {
      this.setState({ error: null, email: '', password: '' });
      authHelpers.storeToken(res.data.token, res.data.id);
      browserHistory.push('/profile');
    })
    .catch((err) => {
      this.setState({ error: err.data, email: '', password: '' });
    });
  }

  preventDefaultSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <SignupForm
        errorMessage={this.state.error}
        email={this.state.email}
        password={this.state.password}
        showLink={this.state.showLink}
        onEmailChange={this.onEmailChange}
        onPasswordChange={this.onPasswordChange}
        onSignupSubmit={this.onSignupSubmit}
        preventDefaultSubmit={this.preventDefaultSubmit}
      />
    );
  }
}

export default Signup;
