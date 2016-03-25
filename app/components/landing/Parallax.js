import React, { Component } from 'react';
import ParallaxComponent from 'react-parallax-component';

const Test = (props) => {
  return (
    <div>
      <ParallaxComponent 
                  speed="0.5"
                  right="200" >
        <div>
           <img src="http://www.geekstogo.com/forum/public/style_images/shift/profile/xdefault_large.png.pagespeed.ic.-RW8oDYs8z.png" width="100" height="100" />
        </div>
      </ParallaxComponent>
    </div>
  );
}

export default Test; 
