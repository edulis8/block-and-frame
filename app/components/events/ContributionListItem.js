import React, { Component } from 'react';
import userHelpers from '../../utils/userHelpers';

class Contribution extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userEmail: '',
      userName: '',
      userLocation: '',
      isTraveling: null,
    };

    this._onCheckBoxClick = this._onCheckBoxClick.bind(this);
  }

  componentDidMount() {
    if (this.props.bringer) {
      userHelpers.getAnyUserById(this.props.bringer)
      .then((user) => {
        this.setState({
          userEmail: user.data.email,
          userName: user.data.username,
          isTraveling: user.data.is_traveling,
          userLocation: user.data.location,
        });
      });
    }
  }

  componentWillUpdate() {
    if (this.props.bringer) {
      userHelpers.getAnyUserById(this.props.bringer)
      .then((user) => {
        this.setState({
          userEmail: user.data.email,
          userName: user.data.username,
          isTraveling: user.data.is_traveling,
          userLocation: user.data.location,
        });
      });
    }
  }

  _onCheckBoxClick(e) {
    this.props._onCheckBoxClick(e, this.props.index);
  }

  render() {
    return (
      <div className="card">
        <div className="content">
          {
            !this.props.bringer ? 
            <div className="right floated ui fitted checkbox">
              <input 
                type="checkbox"
                onChange={this._onCheckBoxClick}
              />
              <label></label>
            </div>
          :
            null
          }
          <h4 className="left floated ui sub header">{this.props.item}</h4>
          { /* If there is a note, provide a note section */
            this.props.notes && <div>
            <div className="ui clearing section divider"></div>
              <div className="meta">
                {this.props.notes}
              </div>
            </div>
          }
        </div>
        { /* If user is bringing item, display message, also checking all fields are avialble */
          this.props.bringer && this.state.userName && this.state.isTraveling !== null && this.state.userLocation &&
          <div className="extra content">
            <p>Contributor:</p>
            <img className="ui avatar mini image" src="http://www.geekstogo.com/forum/public/style_images/shift/profile/xdefault_large.png.pagespeed.ic.-RW8oDYs8z.png" />
            <span>
              <a>{this.state.userName}</a>, {this.state.isTraveling ? 'a traveler' : ''} from {this.state.userLocation}
            </span>
            <a className="right floated" href="instagram.com"><i className="icon instagram"></i></a> 
          </div>
        }
      </div>
    );
  }
}

export default Contribution;

