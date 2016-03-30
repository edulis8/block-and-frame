import React, { Component } from 'react';
import FlipPic from './FlipPic';

class HashTagPic extends Component {
  // constructor(props) {
  //   super(props);
  // }
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

export default HashTagPic;


