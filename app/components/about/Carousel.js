import React, { Component } from 'react';
import AboutUsText from './AboutUsText';
import CarouselItem from './CarouselItem';

class Carousel extends Component {
  render() {
    return (
      <div className="carousel ui raised rounded container segment" >
        <ul className="carousel__panes">
          { AboutUsText.map(el => 
            <CarouselItem key={el.name}
              name={el.name}
              role={el.role}
              role2={el.role2}
              imgSource={el.source}
              blurbs={el.blurbs}
            />
          )}
        </ul>
      </div>
    );
  } 
}

export default Carousel;
