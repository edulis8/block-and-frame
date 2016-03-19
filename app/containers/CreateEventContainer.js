import React, { Component } from 'react';
import axios from 'axios';
import MenuBar from '../components/MenuBar';
import CreateEventForm from '../components/CreateEventForm';

class CreateEvent extends Component {
  constructor(props) {
    super(props);

    // TODO: add coordinates
    this.state = {
      name: '',
      location: '',
      description: '',
      toBring: [],
    };

    this.onNameChange = this.onNameChange.bind(this);
    this.onLocationChange = this.onLocationChange.bind(this);
    this.onDescriptionChange = this.onDescriptionChange.bind(this);
    this.onEventSubmit = this.onEventSubmit.bind(this);
    this.onToBringAdd = this.onToBringAdd.bind(this);
    this.onItemChange = this.onItemChange.bind(this);
    this.onNotesChange = this.onNotesChange.bind(this);
    this.preventDefaultSubmit = this.preventDefaultSubmit.bind(this);
  }

  onNameChange(e) {
    this.setState({ name: e.target.value });
  }

  onLocationChange(e) {
    this.setState({ location: e.target.value });
  }

  onDescriptionChange(e) {
    this.setState({ description: e.target.value });
  }

  onEventSubmit() {
    const event = {
      name: this.state.name,
      location: this.state.location,
      description: this.state.description,
    };

    // TODO: change depending on auth
    // TODO: put HTTP request in helpers.js 
    const userId = window.localStorage.getItem('id');
    axios.post(`/api/events/${userId}`, event)
    .then((res) => {
      console.log(res);
      this.context.router.push({
        pathname: '/events',
        // TODO: change path to /event once available
        // state: res.data,
      });
    })
    .catch((res) => {
      console.log(res);
    });

    this.setState({
      name: '',
      location: '',
      description: '',
      toBring: [],
    });
  }

  onToBringAdd(e) {
    e.preventDefault();
    this.setState({
      toBring: this.state.toBring.concat([{
        index: this.state.toBring.length,
        item: '',
        notes: '',
      }]),
    });
  }

  onItemChange(e, index) {
    const updated = this.state.toBring.slice();
    updated[index].item = e.target.value;
    this.setState({
      toBring: updated,
    });
  }

  onNotesChange(e, index) {
    const updated = this.state.toBring.slice();
    updated[index].notes = e.target.value;
    this.setState({
      toBring: updated,
    });
  }

  preventDefaultSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <MenuBar />
        <br />
        <div className="ui container">
          <h1 className="ui dividing header">Host a Spread!</h1>
        </div>
        <CreateEventForm
          name={this.state.name}
          location={this.state.location}
          description={this.state.description}
          toBring={this.state.toBring}
          onNameChange={this.onNameChange}
          onLocationChange={this.onLocationChange}
          onDescriptionChange={this.onDescriptionChange}
          onEventSubmit={this.onEventSubmit}
          onToBringAdd={this.onToBringAdd}
          onItemChange={this.onItemChange}
          onNotesChange={this.onNotesChange}
          preventDefaultSubmit={this.preventDefaultSubmit}
        />
      </div>
    );
  }
}

CreateEvent.contextTypes = {
  router: React.PropTypes.object.isRequired,
};

export default CreateEvent;
