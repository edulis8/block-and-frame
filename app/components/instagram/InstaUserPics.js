import React from 'react';

const InstaUserPics = ({ data }) => {
  return (
    <div>
      <img src={data.images.thumbnail.url} className="" /> 
      <h5 className="ui header">{data.caption.text}</h5> 
    </div>
  );
};

export default InstaUserPics;
