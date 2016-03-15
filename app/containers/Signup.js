import React, { Component } from 'react';

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };

    this.onUsernameChange = this.onUsernameChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onSignupSubmit = this.onSignupSubmit.bind(this);
    this.preventDefaultSubmit = this.preventDefaultSubmit.bind(this);
  }

  onUsernameChange(e) {
    this.setState({ username: e.target.value });
  }

  onPasswordChange(e) {
    this.setState({ password: e.target.value });
  }

  onSignupSubmit() {
    const user = {
      username: this.state.username,
      password: this.state.password,
    };

    console.log('Submit user signup here: ', user);

    // clear forms
    this.setState({ username: '', password: '' });
  }

  preventDefaultSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <form
          onSubmit={this.preventDefaultSubmit}
        >
          <input
            placeholder="username"
            value={this.state.username}
            onChange={this.onUsernameChange}
          />
          <input
            placeholder="password"
            value={this.state.password}
            onChange={this.onPasswordChange}
          />
          <button
            onClick={this.onSignupSubmit}
          >Sign Up</button>
        </form>
      </div>
    );
  }
}

export default Signup;
