import React, { Component } from 'react';

class ToBringItem extends Component {
  constructor(props) {
    super(props);
    this._onItemChange = this._onItemChange.bind(this);
    this._onNotesChange = this._onNotesChange.bind(this);
    this._onBringerChange = this._onBringerChange.bind(this);
  }

  _onItemChange(e) {
    this.props.onItemChange(e, this.props.index);
  }

  _onNotesChange(e) {
    this.props.onNotesChange(e, this.props.index);
  }

  _onBringerChange(e) {
    this.props.onBringerChange(e, this.props.index);
  }

  render() {
    return (
      <div className="inline fields ui action input">
        <div className="four wide field">
          <input
            className={`to-bring-item-${this.props.index}`}
            value={this.props.item}
            onChange={this._onItemChange}
            placeholder="Contribution Item"
          />
        </div>
        <div className="ten wide field">
          <input
            className={`to-bring-notes-${this.props.index}`}
            value={this.props.notes}
            onChange={this._onNotesChange}
            placeholder="Where and how do they find it?"
          />
        </div>
        <div className="two wide field center">
          <input
            className={`to-bring-checkbox-${this.props.index}`}
            type="checkbox"
            onChange={this._onBringerChange}
          />
        </div>
      </div>
    );
  }
}

export default ToBringItem;
