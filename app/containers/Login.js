import React from 'react';

class Login extends React.Component {
  componentDidMount() {
    console.log('Logins children', this.props);
  }

  render() {
    return (
      <div>
        Login
      </div>
    );
  }
}

export default Login;
