import React from 'react';
import HashTagPic from './HashTagPicComponent';


const HashTagPicsContainer = (props) => {
  return (
    <div>
      <p>
        <i className="icon small instagram"></i>Tag your grams for this Spread with {props.hashtag} <i className="icon small arrow circle down"></i>
      </p>
      {props.hashTagPics.map((pic, index) =>
        <HashTagPic
          key={index}
          id={index}
          pic = {pic}
        />
      )}
    </div>
  );
};

export default HashTagPicsContainer;
