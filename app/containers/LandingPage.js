import React, { Component } from 'react';
import Signin from './Signin';
import Directions from '../components/landing/Direction';
import AboutUs from '../components/landing/AboutUs';

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCredentials: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    $('.ui.sticky').sticky({
      context: '#stuck',
    });
  }
  handleClick() {
    this.setState({ showCredentials: !!!this.state.showCredentials });
  }
  render() {
    const Style = {
      maxHeight: '800',
    };
    return (
      <div className="ui compact" id="stuck" >
        <header onClick={this.handleClick} className="ui sticky" style={{ width: '200' }} >
          <h3 style={{ textAlign: 'center', color: 'orange' }} >Sign In    -   Sign Up</h3>
          {this.state.showCredentials ? <Signin /> : null}
        </header>
        <img style={Style} src="https://s3.amazonaws.com/spreadout-img/LandingPage/photo11.jpg" />
        <div style={{ height: '500', verticalAlign: 'center', margin: '100' }} >
          <Directions uniqueId="1" />
        </div>
        <div className="ui divider"></div>
        <AboutUs />
      </div>
    );
  }

}
export default LandingPage;
