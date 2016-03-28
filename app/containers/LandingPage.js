import React, { Component } from 'react';
import Signin from './Signin';
import InstructionItem from '../components/landing/InstructionItem';
import InstructionText from '../components/landing/InstructionText.js';
import AboutUs from '../components/landing/AboutUs';
import Carousel from '../components/landing/Carousel';


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
    $('.ui.modal').modal();
  }
  handleClick() {
    this.setState({ showCredentials: !!!this.state.showCredentials });
  }
  render() {
    return (
      <div className="ui compact" id="stuck" >
        
        <div style={{ textAlign: 'center', color: 'white' }}>
          <button onClick={this.handleClick} className="ui sticky" style={{ backgroundColor: 'orange' }} >
            <h3>SIGNIN</h3>
          </button>
        </div>
        
        <section style={{ backgroundImage: 'url(https://s3.amazonaws.com/spreadout-img/LandingPage/photo11.jpg)', backgroundPosition: '-1 bottom', backgroundSize: 'cover', height: '50rem', overflow: 'hidden', textAlign: 'center', color: 'white' }} >
          {this.state.showCredentials ? <Signin /> : null}
          <h1 style={{ fontSize: '3.125rem', marginTop: '22rem', marginBottom: '1rem', fontWeight: '300' }} >Introducing Spread Out</h1>
          <h3 style={{ fontSize: '1.563rem', fontWeight: '300' }} >
            Your friendly free app connecting foodies and travelers in communal mealshares</h3>
          <button onClick={this.handleClick} style={{ backgroundColor: 'orange' }} >
            <h3>Learn More</h3>
          </button>
        </section>

        <div className="ui three column doubling stackable grid container" style={{ textAlign: 'center', height: '250', verticalAlign: 'center', margin: '100' }} >
          { InstructionText.map(el => 
            <InstructionItem key={el.s1Step}
              s1Source={el.s1Source} 
              s1Step={el.s1Step} 
              s2Header={el.s2Header}
              s2Text={el.s2Text} 
            />
          )}
        </div>

        <div className="ui divider"></div>
        <h1 className="ui centered">Our Team</h1>
        <Carousel />
        <AboutUs className="test" />

      </div>
    );
  }
}

export default LandingPage;
