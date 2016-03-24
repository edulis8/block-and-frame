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
      <div className="item">
          Contribution {this.props.index}
          {this.props.item}
          {this.props.notes}
          {this.props.bringer || <p>Bring it-->
            <input 
              type="checkbox"
              onChange={this._onCheckBoxClick}
            /></p>}
      </div>
    );
  }
}

export default Contribution;

