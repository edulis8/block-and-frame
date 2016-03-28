import React, { Component } from 'react';

class Carousel extends Component {
  render() {
    return (
      <div className="carousel" >
        <ul className="carousel__panes">
          <div className="carousel__pane">
            <div>
              <img className="ui small circular bordered image" src="https://avatars3.githubusercontent.com/u/13525195?v=3&s=460" alt="" />
            </div>
            <div>
              <p>Eric Broberg</p>
              <p>Product Owner</p>
              <p>Full Stack Engineer</p>
            </div>
          </div>
          <div className="carousel__pane">
            <div>
              <img className="ui small circular bordered image" src="https://avatars2.githubusercontent.com/u/15180113?v=3&s=460" alt="" />
            </div>
            <div>
              <p>Bryan Moore</p>
              <p>Product Owner</p>
              <p>Full Stack Engineer</p>
            </div>
          </div>
          <div className="carousel__pane">
            <div>
              <img className="ui small circular bordered image" src="https://avatars0.githubusercontent.com/u/12578772?v=3&s=460" alt="" />
            </div>
            <div>
              <p>Alex Ko</p>
              <p>Full Stack Engineer</p>
            </div>
          </div>
          <div className="carousel__pane">
            <div>
              <img className="ui small circular bordered image" src="https://avatars0.githubusercontent.com/u/13473504?v=3&s=460" alt="" />
            </div>
            <div>
              <p>Kris Burke</p>
              <p>Full Stack Engineer</p>
            </div>
          </div>
          <div className="carousel__pane">
            <div>
                      <img className="ui small circular bordered image" src="https://avatars2.githubusercontent.com/u/13617738?v=3&s=460" alt="" />
            </div>
            <div>
              <p>J.T. Yim</p>
              <p>Full Stack Engineer</p>
            </div>
          </div>
        </ul>
      </div>
    );
  } 
}

export default Carousel;
