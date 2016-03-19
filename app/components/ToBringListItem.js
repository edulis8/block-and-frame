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
    const toBringItemClass = `to-bring-item-${this.props.index}`;
    const toBringNotesClass = `to-bring-notes-${this.props.index}`;
    return (
      <div className="inline fields ui action input">
        <div className="four wide field">
          <input
            className={toBringItemClass}
            value={this.props.item}
            onChange={this._onItemChange}
            placeholder="Contribution Item"
          />
        </div>
        <div className="twelve wide field">
          <input
            className={toBringNotesClass}
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
