import React from 'react';
import helpers from '../utils/helpers';
import UniqueEventEdit from '../components/UniqueEventEdit';
import UniqueEventView from '../components/UniqueEventView';

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
      isHover: false,
      url: location.href.split('/').pop(),
    };

    this.setEdit = this.setEdit.bind(this);
    this.initalizePage = this.initalizePage.bind(this);
    this.editState = this.editState.bind(this);
    this.determineName = this.determineName.bind(this);
    this.saveEventChanges = this.saveEventChanges.bind(this);
    this.determineHostKey = this.determineHostKey.bind(this);
  }

  componentDidMount() {
    this.initalizePage();
  }

  setEdit() {
    if (this.state.showEdit) {
      this.saveEventChanges();
    }

    this.setState({ showEdit: !this.state.showEdit });
  }

  initalizePage() {
    helpers.getEventbyId(this.state.url)
      .then((response) => {
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

    if (this.state.creator_email === window.sessionStorage.userEmail) {
      this.setState({ editable: true });
    }
    console.log('creator email ', this.state.creator_email);
    console.log('session email ', window.sessionStorage.userEmail);
  }

  editState(e) {
    this.setState({ [e.target.className]: e.target.value });
    console.log(e.target.value);
  }

  determineName() {
    if (!this.state.creator_name) {
      console.log('EMAIL');
      return this.state.creator_email;
    }
    console.log('NAME');
    return this.state.creator_name;
  }

  determineHostKey() {
    if (this.state.creator_name) {
      return 'creator_name';
    }
    return 'creator_email';
  }

  saveEventChanges() {
    console.log('saveEventChanges');
    helpers.editEvent(this.state)
      .then((response) => {
        console.log('inside editevent');
        console.log(response);
      })
      .catch((error) => {
        console.log('ERROR');
        console.log(error);
      });
  }

  render() {
    return (
      <div className="ui massive relaxed list">
        <div className="item">
          <div className="ui very padded text container segment">

            {this.state.showEdit ?
              <UniqueEventEdit
                eventName={this.state.eventName}
                description={this.state.description}
                location={this.state.location}
                hostName={this.determineName}
                hostKey={this.determineHostKey}
                editState={this.editState}
                setEdit={this.setEdit}
              />
               :
              <UniqueEventView
                eventName={this.state.eventName}
                description={this.state.description}
                location={this.state.location}
                hostName={this.determineName}
                setEdit={this.setEdit}
                sameEmail={this.state.editable}
              />}
          </div>
        </div>
      </div>
    );
  }
}

export default UniqueEvent;
