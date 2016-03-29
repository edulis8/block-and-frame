import React, { Component } from 'react';

class ToBringItem extends Component {
  constructor(props) {
    super(props);
    this._onItemChange = this._onItemChange.bind(this);
    this._onNotesChange = this._onNotesChange.bind(this);
    this._onBringerChange = this._onBringerChange.bind(this);
  }

  // componentDidMount() {
  //   $('.ui.checkbox').checkbox();
  // }

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
        <div className="five wide field">
          <input
            className={`to-bring-item-${this.props.index}`}
            value={this.props.item}
            onChange={this._onItemChange}
            placeholder="We're gonna need some..."
          />
        </div>

        <div className="nine wide field">
          <input
            className={`to-bring-notes-${this.props.index}`}
            value={this.props.notes}
            onChange={this._onNotesChange}
            placeholder="...and the best place to find it around here is...?"
          />
        </div>

        <div className="three wide field center">
          <label htmlFor="to-bring">
            Host will bring:
          </label>
          <input
            id="host-bring"
            className={`to-bring-checkbox-${this.props.index}`}
            type="checkbox"
            onChange={this._onBringerChange}
            tabIndex="0" 
            className="hidden"
          />
        </div>
      </div>
    );
  }
}


export default ToBringItem;
