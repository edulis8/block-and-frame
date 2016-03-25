import React, { Component } from 'react';

class Instruct extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div className="column">
        <img src={this.props.source} width="100" height="100" />
        <h2> Step </h2>
        <p>Soufflé cookie caramels chupa chups tiramisu chupa chups marshmallow tart. Chocolate sugar plum marzipan croissant jelly-o marshmallow sugar plum. Liquorice tiramisu danish. Sugar plum pie tootsie roll sweet roll chocolate cake cheesecake. Bonbon jujubes jelly jelly beans dragée lemon drops. Soufflé cookie lollipop chupa chups topping.</p>
      </div>
    );
  } 
}

export default Instruct; 
