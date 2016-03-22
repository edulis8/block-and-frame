import React, { Component } from 'react';
import authHelpers from '../utils/authHelpers';
import SignupForm from '../components/SignupForm';


class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      showLink: false,
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
    const user = {
      email: this.state.email,
      password: this.state.password,
    };

    authHelpers.signup(user);

    this.setState({ email: '', password: '', showLink: true });
  }

  preventDefaultSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <SignupForm
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
