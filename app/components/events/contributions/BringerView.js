import React, { Component } from 'react';

// TODO: style better / make into a flippable card ?
class BringerView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bringer: props.info,
    };
  } 

  componentWillReceiveProps(nextProps) {
    this.setState({ bringer: nextProps.info });
    this.forceUpdate();
  }

  render() {
    const instagramLink = `https://www.instagram.com/${this.state.bringer.instagramUsername}/`;
    return (
      <div className="extra content">
        <b>Will be brought to you by: </b>
          <span className="bringer-line-item">
            <a>{this.state.bringer.username || null}</a><br />
               {this.state.bringer.isTraveling ? 'A traveler' : 'A local'}<br />
               {this.state.bringer.userLocation || null}<br />
               {this.state.bringer.instagramUsername &&
                <a href={instagramLink}><i className="instagram icon"></i>
                {this.state.bringer.instagramUsername}</a>}
          </span>
        <a className="right floated" href="instagram.com">
          <img className="ui avatar tiny image" src={ this.state.bringer.instagramPic || null} />
        </a>
    </div>
    );
  }
  
}

export default BringerView;
