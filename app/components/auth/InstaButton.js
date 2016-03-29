import React from 'react';

const InstaButton = (props) => {
  return (
  
  <button className="ui instagram button toggle" >
      <i className="instagram icon"></i>
      <a className="instabutton" href="/auth/instagram">Login with Instagram</a>
  </button>

  );
};

export default InstaButton;
