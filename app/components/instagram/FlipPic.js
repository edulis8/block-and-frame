import React from 'react';

const FlipPic = ({ data }) => {
  console.log('dta', data)
  return (
    <div className="ui shape" id={data.id}>
      <div className="sides insta-fixed">
        <div className="active side">
          <div className="ui card insta-fixed">
            <div className="image insta-fixed">
              <img className="hashtag-img" src={data.pic.images.thumbnail.url} />
            </div>
          </div>
        </div>
          <div className="side insta-fixed">
            <div className="ui card insta-fixed">
              {data.pic.caption.text}
            </div>
          </div>
      </div>      
    </div>
  );
};

export default FlipPic;
