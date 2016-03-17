import React, { Component } from 'react';

class ToBring extends Component {
  render() {
    return (
      <div className="inline fields ui action input">
        <div className="four wide field">
          <input
            value={this.props.item}
            onChange={this.props.onItemChange}
            placeholder="Contribution Item"
          />
        </div>
        <div className="twelve wide field">
          <input
            value={this.props.notes}
            onChange={this.props.onNotesChange}
            placeholder="Where and how do they find it?"
          />
        </div>
      </div>
    );
  }
}

export default ToBring;
