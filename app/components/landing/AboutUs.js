import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div className="ui three column doubling stackable grid container" >
        <h1 className="ui centered">Our Team</h1>
        <div className="ui container stackable five column grid">
          <div className="column center aligned ">
            <img className="ui small circular bordered image" src="https://avatars3.githubusercontent.com/u/13525195?v=3&s=460" alt="" />
            <h4 className="ui header">Eric Broberg</h4>
            <p>Product Owner</p>
            <p>Full Stack Engineer</p>
          </div>
          <div className="column center aligned">
            <img className="ui small circular bordered image" src="https://avatars2.githubusercontent.com/u/15180113?v=3&s=460" alt="" />
            <h4 className="ui header centered">Bryan More </h4>
            <p>Scrum Master</p>
            <p>Full Stack Engineer</p>
          </div>
          <div className="column center aligned">
            <img className="ui small circular bordered image" src="https://avatars0.githubusercontent.com/u/12578772?v=3&s=460" alt="" />
            <h4 className="ui header centered">Alex Ko </h4>
            <p>Full Stack Engineer</p>
          </div>
          <div className="column center aligned">
            <img className="ui small circular bordered image" src="https://avatars0.githubusercontent.com/u/13473504?v=3&s=460" alt="" />
            <h4 className="ui header centered">Kris Burke </h4>
            <p>Full Stack Engineer</p>
          </div>
          <div className="column center aligned">
            <img className="ui small circular bordered image" src="https://avatars2.githubusercontent.com/u/13617738?v=3&s=460" alt="" />
            <h4 className="ui header centered">J.T. Yim </h4>
            <p>Full Stack Engineer</p>
          </div>
        </div>    
      </div>
    );
  } 
}

export default About; 
