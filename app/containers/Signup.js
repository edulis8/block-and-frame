import React, { Component } from 'react';
import axios from 'axios';

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

    axios.post('/api/users/', user)
    .then((res) => {
      console.log(res);
    })
    .catch((res) => {
      console.log(res);
    });

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
          <label>Username: </label>
          <input
            value={this.state.username}
            onChange={this.onUsernameChange}
          /><br />
          <label>Password: </label>
          <input
            value={this.state.password}
            onChange={this.onPasswordChange}
          /><br />
          <button className="ui button"
            onClick={this.onSignupSubmit}
          >Sign Up</button>
        </form>
      </div>
    );
  }
}

export default Signup;
