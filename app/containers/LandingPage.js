import React, { Component } from 'react';
import Signin from './Signin';

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCredentials: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  // jQuery
  componentDidMount() {
    $('.ui.sticky').sticky({
      context: '#stuck'
    });
  }
  handleClick() {
    console.log("CLICKED");
    this.setState({ showCredentials: !!!this.state.showCredentials });
  }

  render() {
    return (
    <div className="ui compact" id="stuck">      
      <div onClick={this.handleClick} className="ui sticky">
        <h2 style={{ textAlign: 'center' }} >
          Signin or Signup
        </h2>
        {this.state.showCredentials ? <Signin /> : null}
      </div>        
        <p>Content</p>
        <br></br>
        <p>Content</p>
        <br></br>
        <p>Content</p>
        <br></br>
        <p>Content</p>
        <br></br>
        <p>Content</p>
        <br></br>
        <p>Content</p>
        <br></br>
        <p>Content</p>
        <br></br>
        <p>Content</p>
        <br></br>
        <p>Content</p>
        <br></br>
        <p>Content</p>
        <br></br>
        <p>Content</p>
        <br></br>
        <p>Content</p>
        <br></br>
        <p>Content</p>
        <br></br>
        <p>Content</p>
        <br></br>
        <p>Content</p>
        <br></br>
        <p>Content</p>
        <br></br>
        <p>Content</p>
        <br></br>
        <p>Content</p>
        <br></br>
        <p>Content</p>
        <br></br>
        <p>Content</p>
        <br></br>
        <p>Content</p>
        <br></br>
        <p>Content</p>
        <br></br>
        <p>Content</p>
        <br></br>
        <p>Content</p>
        <br></br>
        <p>Content</p>
        <br></br>
        <p>Content</p>
        <br></br>
        <p>Content</p>
        <p>Content</p>
        <br></br>
        <p>Content</p>
        <br></br>
        <p>Content</p>
        <br></br>
        <p>Content</p>
        <br></br>
        <p>Content</p>
        <br></br>
        <p>Content</p>
        <br></br>
        <p>Content</p>
        <br></br>
        <p>Content</p>
        <br></br>
        <p>Content</p>
        <br></br>
        <p>Content</p>
        <br></br>
        <p>Content</p>
        <br></br>
        <p>Content</p>
        <br></br>
        <p>Content</p>
        <br></br>
        <p>Content</p>
        <br></br>
        <p>Content</p>
        <br></br>
        <p>Content</p>
        <br></br>
        <p>Content</p>
        <br></br>
        <p>Content</p>
        <br></br>
        <p>Content</p>
        <br></br>
        <p>Content</p>
        <br></br>
        <p>Content</p>
        <br></br>
        <p>Content</p>
        <br></br>
        <p>Content</p>
        <br></br>
        <p>Content</p>
        <br></br>
        <p>Content</p>
        <br></br>
        <p>Content</p>
        <br></br>
        <p>Content</p>
      </div>
    );
  }

}
export default LandingPage;
