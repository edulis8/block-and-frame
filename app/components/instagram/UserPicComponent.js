import React, { Component } from 'react';
import FlipPic from './FlipPic';

class UserPic extends Component {
  
  componentDidMount() {
    $(`#${this.props.id}`).click(function () {
      $(this).shape('flip over');
    });
  }
  render() {
    return (
      <FlipPic 
        data = {this.props}
      />
    );
  }
}
export default UserPic;

