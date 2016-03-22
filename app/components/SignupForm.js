import React from 'react';
import { Link } from 'react-router';

const SignupForm = (props) => {
  return (
    <div className="ui centered padded container raised segment">
    <h1 className="ui header center aligned">Spread Out</h1>
    <h2 className="ui header">Sign Up</h2>
      <form
        className="ui form signup"
        onSubmit={props.preventDefaultSubmit}
      >
        <div className="field">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={props.email}
            onChange={props.onEmailChange}
          />
        </div>
        <div className="field">
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={props.password}
            onChange={props.onPasswordChange}
          />
        </div>
        <button
          className="ui button"
          type="submit"
          onClick={props.onSignupSubmit}
        >Sign Up</button>
      </form>
      { props.showLink ?
        <div className="ui centered padded segment">
          <Link to={'/profile'}>
              <h4>
                You have successfully signed up! Go to your new user profile.
              </h4>
          </Link>
        </div> : null }
    </div>
  );
};

export default SignupForm;
