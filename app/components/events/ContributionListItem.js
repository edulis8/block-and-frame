import React, { Component } from 'react';

class Contribution extends Component {
  constructor(props) {
    super(props);
    this._onCheckBoxClick = this._onCheckBoxClick.bind(this);
  }
  _onCheckBoxClick(e) {
    this.props._onCheckBoxClick(e, this.props.index);
  }
  render() {
    /* have access to this.props.index to get more info */
    const message = this.props.bringer ? 'someones got this!' : null;
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
        { /* If user is bringing item, display message */
        this.props.bringer && 
        <div className="extra content">{message}</div>
        }
      </div>
    );
  }
}

export default Contribution;

