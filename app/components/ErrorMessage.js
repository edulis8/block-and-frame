import React from 'react';

const ErrorMessage = (props) => {
  if (props.errorMessage) {
    return (
      <div className="ui negative message">
        {props.errorMessage}
      </div>
    );
  }
  return (<div></div>);
};

export default ErrorMessage;
