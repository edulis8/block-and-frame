import React, { Component } from 'react';

class Images extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div>
        <img src="http://i.imgur.com/5CtyRes.png" title="source: imgur.com" />
        <iframe src="//embed.gettyimages.com/embed/482143953?et=F-3f8piYQUFFXjjoLb5UpA&viewMoreLink=on&sig=GQkJSFeCQCy7YpRHzTS-Hvr6VWwagZ5wXFkxgcJWmsw=" width="507" height="338" scrolling="no" frameborder="0" style="display:inline-block;position:absolute;top:0;left:0;width:100%;height:100%;margin:0;">
        </iframe>
      </div>
    );
  } 
}

export default Images; 
