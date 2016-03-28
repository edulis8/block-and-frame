import React from 'react';

const ImageUpload = (props) => {
  return (
    <div className="ui compact segment">
      <img 
        id="test"
        className="ui small spaced rounded image"
        src={props.avatarURL}
      />
      <div className="ui divider" />
      
      <form onSubmit={(e) => {e.preventDefault(); }}>
        <button
          className="ui tiny button"
          onClick={props.handleUploadClick}
        >Select Profile Image
        </button>
        
        <div className="ui fitted hidden divider" />
        <div>
          { /* show filename after image is selected */ props.filename && 
            <div className="ui basic small label">{props.filename}</div>
          }
        </div>
        
        <div className="ui fitted hidden divider" />
        {/*  Actual input field hidden - using a styled button in its place to activate submit */}
        <input
          type="file"
          accept="image/*"
          id="image-file"
          placeholder="upload image"
          style={{ display: 'none' }}
        />
        <button
          className="ui tiny button"
          onClick={props.handleSubmit}
        >
          <i className="plus square icon"></i>
          Upload
        </button>
      </form>
     </div>
  );
};

export default ImageUpload;

