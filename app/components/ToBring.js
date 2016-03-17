import React, { Component } from 'react';

class ToBring extends Component {
  render() {
    return (
      <div className="inline fields ui action input">
        <div className="four wide field">
          <input
            value={this.props.item}
            placeholder="You'll bring ..."
          />
        </div>
        <div className="twelve wide field">
          <input
            value={this.props.notes}
            placeholder="Notes"
          />
        </div>
      </div>
    );
  }
}

export default ToBring;
