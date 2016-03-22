import React from 'react';
import helpers from '../utils/helpers';
import UniqueEventEdit from '../components/UniqueEventEdit';
import UniqueEventView from '../components/UniqueEventView';
import MenuBar from '../components/MenuBar';

class UniqueEvent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      eventName: '',
      description: '',
      location: '',
      eventId: '',
      creator_name: '',
      creator_email: '',
      showEdit: false,
      editable: false,
      url: location.href.split('/').pop(),
    };

    this.setEdit = this.setEdit.bind(this);
    this.initalizePage = this.initalizePage.bind(this);
    this.editState = this.editState.bind(this);
    this.determineName = this.determineName.bind(this);
    this.saveEventChanges = this.saveEventChanges.bind(this);
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
        console.log(response.data);
        this.setState({ eventName: response.data.name,
          description: response.data.description,
          location: response.data.location,
          eventId: response.data.id,
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
  }

  determineName() {
    if (!this.state.creator_name) {
      return this.state.creator_email;
    }
    return this.state.creator_name;
  }

  // TODO: add toBring and coordinates here as well
  saveEventChanges() {
    console.log('saveEventChanges');
    const edits = ({
      name: this.state.eventName,
      location: this.state.location,
      description: this.state.description,
    });

    helpers.editEvent(this.state.url, edits)
      .then((response) => {
        console.log('inside eventedit');
        console.log(response);
      })
      .catch((error) => {
        console.log('ERROR');
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <MenuBar />
        <div className="ui massive relaxed list">
          <div className="item">
            <div className="ui very padded text container segment">

              {this.state.showEdit ?
                <UniqueEventEdit
                  eventName={this.state.eventName}
                  description={this.state.description}
                  location={this.state.location}
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
                />
              }

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UniqueEvent;
