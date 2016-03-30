import React, { Component } from 'react';
import FlipPic from './FlipPic';

class UserPic extends Component {
  
  componentDidMount() {
    $(`#${this.props.id}`).click(function () {
      $(this).shape('flip over');
    });
  }
  render() {
    console.log('props', this.props.pic)

    return (
      <FlipPic 
        data = {this.props}
      />
    );
  }
}

export default UserPic;

/*
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
*/




// import React from 'react';

// const InstaUserPics = ({ data }) => {
//   return (
//     <div>
//       <img src={data.images.thumbnail.url} className="" /> 
//       <h5 className="ui header">{data.caption.text}</h5> 
//     </div>
//   );
// };

// export default InstaUserPics;
