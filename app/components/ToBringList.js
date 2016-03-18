import React, { Component } from 'react';
import ToBringListItem from './ToBringListItem';

class ToBringList extends Component {
  render() {
    return (
      <div>
        {this.props.toBring.map((toBring) => {
          return (
            <ToBringListItem
              key={toBring.index}
              index={toBring.index}
              item={toBring.item}
              notes={toBring.notes}
              onItemChange={this.props.onItemChange}
              onNotesChange={this.props.onNotesChange}
            />
          );
        })}
      </div>
    );
  }
}

export default ToBringList;
