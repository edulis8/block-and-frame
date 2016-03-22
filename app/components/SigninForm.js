import React from 'react';

const SigninForm = (props) => {
  return (
    <div className="ui centered padded container raised segment">
      <h1 classNmae="ui header">Sign In</h1>
      <form
        className="ui form signin"
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
          onClick={props.onSigninSubmit}
        >Sign In</button>
      </form>
    </div>
  );
};

export default SigninForm;
