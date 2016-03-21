import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router';

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      showLink: false,
    };

    this.onUsernameChange = this.onUsernameChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onSignupSubmit = this.onSignupSubmit.bind(this);
    this.preventDefaultSubmit = this.preventDefaultSubmit.bind(this);
  }

  onUsernameChange(e) {
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

    // TODO: put HTTP reqs in helpers.js:
    axios.post('/auth/signup', user)
    .then((res) => {
      console.log('Sign up response: ', res);
      window.localStorage.setItem('token', res.data.token);
      window.localStorage.setItem('id', res.data.id);
    })
    .catch((err) => {
      console.log(err);
    });

    this.setState({ email: '', password: '', showLink: true });
  }

  preventDefaultSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div className="ui centered padded container raised segment">
      <h1 className="ui header center aligned">Spread Out</h1>
      <h2 className="ui header">Sign Up</h2>
        <form
          className="ui form signup"
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
            <label>Pasword</label>
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
            onClick={this.onSignupSubmit}
          >Sign Up</button>
        </form>
        { this.state.showLink ?
          <div className="ui centered padded segment">
            <Link to={'/profile'}>
                <h4>
                  You have successfully signed up! Go to your new user profile.
                </h4>
            </Link>
          </div> : null }
      </div>
    );
  }
}

export default Signup;
