import React, { Component } from 'react';
import Signin from './Signin';
import Signup from './Signup';
import Instructions from '../components/landing/Instructions';
import SplashImage from '../components/landing/SplashImage';

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSignin: false,
      showSignup: false,
    };
    this.signinClick = this.signinClick.bind(this);
    this.signupClick = this.signupClick.bind(this);
  }
  componentDidMount() {
    $('.ui.sticky').sticky({
      context: '#stuck',
    });
    $('.ui.modal').modal();
  }
  signinClick() {
    this.setState({ showSignin: !!!this.state.showSignin });
  }
  signupClick() {
    this.setState({ showSignup: !!!this.state.showSignup });
  }
  render() {
    return (
      <div>
        <div className="landing">
          <div className="ui fixed inverted menu">
            <div className="ui container">
              <a href="#" className="header item">
                Spread Out
              </a>
              <div className="right menu">
                <a onClick={this.signinClick} href="#" className="item right">Sign In</a>
                <a onClick={this.signupClick} href="#" className="item" >Sign Up</a>
                <a href="/about" className="item" >About</a>

              </div>
            </div>
          </div>
          <div className="popup" > 
            {this.state.showSignin ? <Signin /> : null}
            {this.state.showSignup ? <Signup /> : null}
          </div>
        </div>
        <SplashImage />
        <div className="ui main text container text centered">
          <div className="ui sixteen wide grid huge header centered">The app for communal food-centered experiences and connecting people.</div>
          <br />
          <div className="ui grid svgs">
            <div className="five wide column centered">
              <div className="devices centered">
                <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSX-3wf8Zwhqz69pblHcru56FnA-qr8_VXGc9xR31eDkimrohryRuYDbPA" width= "127px" />
                <h3>Choose a Spread and an Item to Contribute</h3>
              </div>
            </div>

            <div className="five wide column centered">
            <div className="devices"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Food_Bank_icon.svg/2000px-Food_Bank_icon.svg.png" width= "127px" /><h3>Explore, Forage, Procure</h3></div>

            </div>

            <div className="five wide column centered">
             <div className="devices"><img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQmmz2PrZrW6160Wlq4afBh8d5UI10X2O96NQ0Mt96gtKc7UJZi" width= "127px" /><h3>Share and Enjoy with New Friends</h3></div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}
      

export default LandingPage;
