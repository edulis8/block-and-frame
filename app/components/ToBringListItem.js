import React, { Component } from 'react';

class ToBringItem extends Component {
  constructor(props) {
    super(props);
    this._onItemChange = this._onItemChange.bind(this);
    this._onNotesChange = this._onNotesChange.bind(this);
  }

  _onItemChange(e) {
    this.props.onItemChange(e, this.props.index);
  }

  _onNotesChange(e) {
    this.props.onNotesChange(e, this.props.index);
  }

  render() {
    return (
      <div className="inline fields ui action input">
        <div className="four wide field">
          <input
            value={this.props.item}
            onChange={this._onItemChange}
            placeholder="Contribution Item"
          />
        </div>
        <div className="twelve wide field">
          <input
            value={this.props.notes}
            onChange={this._onNotesChange}
            placeholder="Where and how do they find it?"
          />
        </div>
      </div>
    );
  }
}

export default ToBringItem;
