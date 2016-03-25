import React, { Component } from 'react';
import Signin from './Signin';
import Image from '../components/landing/Image';
import Direction from '../components/landing/Direction';
import Parallax from '../components/landing/Direction';

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCredentials: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    $('.ui.sticky').sticky({
      context: '#stuck',
    });
  }
  handleClick() {
    this.setState({ showCredentials: !!!this.state.showCredentials });
  }
  render() {
    const style1 = { 
      height: '800px', 
      align: 'center', 
    };
    return (
      <div className="ui compact" id="stuck" style={{ backgroundColor: '#284947' }} >
        <div onClick={this.handleClick} className="ui sticky" style={{ width: '200' }} >
          <h3 style={{ textAlign: 'center', color: 'white' }} >Sign In    -   Sign Up</h3>
          {this.state.showCredentials ? <Signin /> : null}
        </div>
        <Image source="http://i.imgur.com/5CtyRes.png" style={style} />
        <div className="ui three column doubling stackable grid container" style={style} >
          <Direction style={style} source="http://www.geekstogo.com/forum/public/style_images/shift/profile/xdefault_large.png.pagespeed.ic.-RW8oDYs8z.png" />
          <Direction style={style} source="http://www.geekstogo.com/forum/public/style_images/shift/profile/xdefault_large.png.pagespeed.ic.-RW8oDYs8z.png" />
          <Direction style={style} source="http://www.geekstogo.com/forum/public/style_images/shift/profile/xdefault_large.png.pagespeed.ic.-RW8oDYs8z.png" />
        </div>
        <div style={style}></div>
        <Image source="http://i.imgur.com/5CtyRes.png" style={style} />
      </div>
    );
  }

}
export default LandingPage;
