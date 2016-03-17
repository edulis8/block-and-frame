import React, { Component } from 'react';

class ToBring extends Component {
  render() {
    return (
      <div className="inline fields ui action input">
        <div className="four wide field">
          <input
            value={this.props.item}
            onChange={this.props.onItemChange}
            placeholder="You'll bring ..."
          />
        </div>
        <div className="twelve wide field">
          <input
            value={this.props.notes}
            onChange={this.props.onNotesChange}
            placeholder="Notes"
          />
        </div>
      </div>
    );
  }
}

export default ToBring;
