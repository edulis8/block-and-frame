import React, { Component } from 'react';

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
      <div className="ui shape" id={this.props.id}>
        <div className="sides insta-fixed">
          <div className="active side">
            <div className="ui card insta-fixed">
              <div className="image insta-fixed">
                <img className="hashtag-img" src={this.props.pic.images.thumbnail.url} />
              </div>
            </div>
          </div>
            <div className="side insta-fixed">
              <div className="ui card insta-fixed">
                {this.props.pic.caption.text}
              </div>
            </div>
        </div>
      </div>
    );
  }
}

export default HashTagPic;

// class Contribution extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       userEmail: '',
//       userName: '',
//       userLocation: '',
//       isTraveling: null,
//     };

//     this._onCheckBoxClick = this._onCheckBoxClick.bind(this);
//   }

//   componentDidMount() {
//     if (this.props.bringer) {
//       userHelpers.getAnyUserById(this.props.bringer)
//       .then((user) => {
//         this.setState({
//           userEmail: user.data.email,
//           userName: user.data.username,
//           isTraveling: user.data.is_traveling,
//           userLocation: user.data.location,
//         });
//       });
//     }
//   }
