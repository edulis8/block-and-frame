import React from 'react';

const Comment = (props) => {
  return (
    <div className="comment">
      <a className="avatar">
        <img src={props.avatarURL || 'https://s3.amazonaws.com/spreadout-img/avatar.png'} />
      </a>
      <div className="content">
        <a className="author">{props.username}</a>
        <div className="metadata">
          <span className="date">{props.timeCreated}</span>
        </div>
        <div className="text">
          {props.text}
        </div>
      </div>
    </div>
  );
};

module.exports = Comment;
