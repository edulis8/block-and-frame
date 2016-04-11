import React, { Component } from 'react';
import AboutUsText from './AboutUsText';
import AboutEach from './AboutEach.js';
import Carousel from './Carousel';

class AboutUs extends Component {
  render() {
    return (
      <div className="ui container aboutus">
        <div className="ui two-column grid">
          <div className="column">
            <h2>Our Team</h2>
          </div>
          <div className="column"></div>
          <div className="four wide column">
            { AboutUsText.map(el => 
              <AboutEach key={el.name}
                name={el.name}
                role={el.role}
                role2={el.role2}
                imgSource={el.source} 
              />
            )}
          </div>
          <div className="eight wide column">
            <Carousel />
          </div>
        </div>
      </div>
    );
  } 
}

export default AboutUs; 
