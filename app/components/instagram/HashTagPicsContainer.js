import React from 'react';
import HashTagPic from './HashTagPicComponent';

const HashTagPicsContainer = (props) => {
  console.log('??', props.hashTagPics)
  return (
    <div>
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

