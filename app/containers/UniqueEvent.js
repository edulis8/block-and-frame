import React from 'react';
import axios from 'axios';
import { Link } from 'react-router';

class UniqueEvent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      eventName: '',
      description: '',
      location: '',
      id: '',
      creator_name: '',
      creator_email: '',
      showEdit: false,
      editable: false,
    };

    this.setEdit = this.setEdit.bind(this);
    this.nameChange = this.nameChange.bind(this);
  }

  componentDidMount() {
    const url = location.href.split('/').pop();
    axios.get('/api/events/' + url)
      .then((response) => {
        console.log('data', response.data);
        this.setState({ eventName: response.data.name,
          description: response.data.description,
          location: response.data.location,
          id: response.data.id,
          creator_email: response.data.users[0].email,
          creator_name: response.data.users[0].name });
      })
      .catch((error) => {
        console.log(error);
      });
    console.log('creator email ', this.state.creator_email);
    console.log('session email ', window.sessionStorage.userEmail);
    if (this.state.creator_email === window.sessionStorage.userEmail) {
      console.log('SAME EMAIL');
      this.setState({ showEdit: true });
    }
  }

  setEdit(e) {
    e.preventDefault();
    this.setState({ editable: true });
  }

  nameChange(e) {
    console.log('there');
    e.preventDefault();
    this.setState({ eventName: e.target.value });
    console.log(e);
    console.log(this.state.eventName);
    console.log('here');
  }

  render() {
    return (
      <div className="ui massive relaxed list">
        <div className="item">
          <div className="ui very padded text container segment">
            <img className="ui tiny circular right floated image" src="http://www.geekstogo.com/forum/public/style_images/shift/profile/xdefault_large.png.pagespeed.ic.-RW8oDYs8z.png" />
            <div className="header" contentEditable={this.state.editable} onInput={this.nameChange}>{this.state.eventName}</div>
            <div className="location" contentEditable={this.state.editable}>{this.state.location}</div>
            <div className="host">
              Hosted by {this.state.creator_name || this.state.creator_email}
            </div>
            <div className="description" contentEditable={this.state.editable}>{this.state.description}</div>
            {this.state.showEdit ?
              <div onClick={this.setEdit.bind(this)}>Edit spread</div>
              : null}
          </div>
        </div>
      </div>
    );
  }
}

export default UniqueEvent;
