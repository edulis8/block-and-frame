import React, { Component } from 'react';

class Contribution extends Component {
  constructor(props) {
    super(props);
    this._onCheckBoxClick = this._onCheckBoxClick.bind(this);
  }
  _onCheckBoxClick(e) {
    this.props.onCheckBoxClick(e, this.props.index);
  }
  render() {
    return (
      <li>Contribution {this.props.index}
        <ul>
          <li>{this.props.item}</li>
          <li>{this.props.notes}</li>
          <li>{this.props.bringer || 
            <p>Bring it-->  
              <input 
                type="checkbox"
                onChange={this._onCheckBoxClick}
              />
            </p> }
          </li>
        </ul>
      </li>
    );
  }
}

export default Contribution;

