import React, { Component } from 'react';
import axios from 'axios';

class InstaButton extends Component {
  // constructor(props) {
  //   super(props);
  //   this.onInstagramClick = this.onInstagramClick.bind(this);
  // }
  //
  // onInstagramClick() {
  //   axios.get('/auth/instagram')
  //   .then((res) => {
  //     console.log(res);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   })
  // }

  render() {
    return (
      <button
        className="ui instagram button toggle"
      >
        <i className="instagram icon"></i>
        <a href="/auth/instagram" className="instabutton">Login with Instagram</a>
      </button>
    );
  }
}

export default InstaButton;
