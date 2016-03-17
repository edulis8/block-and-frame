import React, { Component } from 'react';
import axios from 'axios';

class Signin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };

    this.onUsernameChange = this.onUsernameChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onSigninSubmit = this.onSigninSubmit.bind(this);
    this.preventDefaultSubmit = this.preventDefaultSubmit.bind(this);
  }

  onUsernameChange(e) {
    this.setState({ email: e.target.value });
  }

  onPasswordChange(e) {
    this.setState({ password: e.target.value });
  }

  onSigninSubmit() {
    const user = {
      email: this.state.email,
      password: this.state.password,
    };

    console.log('Submit user login here: ', user);

    axios.post('/auth/signin', user)
    .then((res) => {
      console.log('Signin in response: ', res);
      window.localStorage.setItem('token', res.data.token);
      window.localStorage.setItem('id', res.data.id);
    })
    .catch((res) => {
      console.log(res);
    });

    // clear forms
    this.setState({ email: '', password: '' });
  }

  preventDefaultSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (

      <div className="ui centered padded container raised segment">
        <h1 classNmae="ui header">Sign In</h1>
        <form
          className="ui form signin"
          onSubmit={this.preventDefaultSubmit}
        >
          <div className="field">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.onUsernameChange}
            />
          </div>
          <div className="field">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.onPasswordChange}
            />
          </div>
          <button
            className="ui button"
            type="submit"
            onClick={this.onSigninSubmit}
          >Sign In</button>
        </form>
      </div>
    );
  }
}

export default Signin;
