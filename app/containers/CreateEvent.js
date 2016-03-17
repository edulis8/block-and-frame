import React, { Component } from 'react';
import axios from 'axios';
import MenuBar from '../components/MenuBar';
import ToBring from '../components/ToBring';

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

  onItemChange(e) {
    console.log(e);
  }

  onNotesChange(e) {
    console.log(e);
  }

  preventDefaultSubmit(e) {
    e.preventDefault();
  }

  render() {
    const toBringNodes = this.state.toBring.map((toBring) => {
      return (
        <ToBring
          onItemChange={this.onItemChange}
          onNotesChange={this.onNotesChange}
          key={toBring.index}
          item={toBring.item}
          notes={toBring.notes}
        />
      );
    });

    return (
        <div>
        <MenuBar />
        <div className="ui container">
          <h1 className="ui dividing header">Create an Event!</h1>
          <form
            className="ui form"
            onSubmit={this.preventDefaultSubmit}
          >
            <div className="field">
              <label>Name:</label>
              <input
                value={this.state.name}
                onChange={this.onNameChange}
              />
            </div>
            <div className="field">
              <label>Location:</label>
              <input
                value={this.state.location}
                onChange={this.onLocationChange}
              />
            </div>
            <div className="field">
              <label>Description:</label>
              <textarea
                value={this.state.description}
                onChange={this.onDescriptionChange}
              >
              </textarea>
            </div>


            <div className="inline fields">
              <label>To Bring:</label>
              <button
                className="ui icon button"
                onClick={this.onToBringAdd}
              >
                <i className="plus square icon"></i>
              </button>
            </div>

            <div id="to-bring">
              {toBringNodes}
            </div>


            <button
              className="ui button"
              onClick={this.onEventSubmit}
            >Create!
            </button>
          </form>
        </div>
      </div>
    );
  }
}

CreateEvent.contextTypes = {
  router: React.PropTypes.object.isRequired,
};

export default CreateEvent;
