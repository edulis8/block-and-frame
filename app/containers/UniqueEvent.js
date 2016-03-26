import React from 'react';
import update from 'react-addons-update';
import eventHelpers from '../utils/eventHelpers';
import UniqueEventEdit from '../components/events/UniqueEventEdit';
import UniqueEventView from '../components/events/UniqueEventView';
import MenuBar from '../components/MenuBar';
import MapView from '../components/events/MapView';
import ContributionList from '../components/events/ContributionList';
import UserInfo from '../components/users/UserInfo';


class UniqueEvent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: Number(window.localStorage.getItem('id')),
      eventName: '',
      description: '',
      location: '',
      time: '',
      date: '',
      eventId: '',
      showEdit: false,
      editable: false,
      joinable: true,
      markers: [],
      url: location.href.split('/').pop(),
      msgDivClass: 'warning',
      coordinates: '',
      host: null,
      attendants: [],
    };

    this.setEdit = this.setEdit.bind(this);
    this.editState = this.editState.bind(this);
    this.saveEventChanges = this.saveEventChanges.bind(this);
    this.handleMapClick = this.handleMapClick.bind(this);
    this.handleMarkerRightClick = this.handleMarkerRightClick.bind(this);
    this.handleCheckBoxClick = this.handleCheckBoxClick.bind(this);
    this.handleJoinEventWithContributions = this.handleJoinEventWithContributions.bind(this);
    this.loadMarker = this.loadMarker.bind(this);
    this.initializePage = this.initializePage.bind(this);
  }

  componentDidMount() {
    this.initializePage();
    setTimeout(this.loadMarker, 2000);
  }

  setEdit() {
    if (this.state.showEdit) {
      this.saveEventChanges();
    }
    this.setState({ showEdit: !this.state.showEdit });
  }

  initializePage() {
    eventHelpers.getEventbyId(this.state.url)
    .then((response) => {
      // Populate state with users
      let tempHost = null;
      let tempEditable = false;
      let tempJoinable = true;
      const tempAttendants = [];

      // Populate state with host and users
      response.data.users.forEach((user) => {
        if (user._pivot_is_creator) {
          tempHost = user;
          // Current user is host
          if (tempHost._pivot_user_id === this.state.userId) {
            tempEditable = true;
            tempJoinable = false;
          }
        } else {
          tempAttendants.push(user);
          // User is already attending
          if (user._pivot_user_id === this.state.userId) {
            tempJoinable = false;
          }
        }
      });

      this.setState({
        eventName: response.data.name,
        description: response.data.description,
        location: response.data.location,
        date: response.data.date,
        time: response.data.time,
        eventId: response.data.id,
        contributions: response.data.toBring.contributions,
        coordinates: response.data.coordinates,
        host: tempHost,
        editable: tempEditable,
        joinable: tempJoinable,
        attendants: tempAttendants,
      });
    })
    .catch((error) => {
      console.log(error);
    });
  }

  handleCheckBoxClick(e, index) {
    // toggle 'bringer' to be user id or null 
    if (this.state.contributions[index].bringer === null) {
      this.state.contributions[index].bringer = window.localStorage.id;
    } else {
      this.state.contributions[index].bringer = null;
    }
  }

  handleJoinEventWithContributions(eventId, contribs) {
    this.setState({ msgDivClass: 'positive' });
    eventHelpers.joinEventWithContributions(eventId, contribs, this.initializePage);
  }

  editState(e) {
    this.setState({ [e.target.className]: e.target.value });
  }

  // TODO: add toBring and coordinates here as well
  saveEventChanges() {
    console.log('saveEventChanges');

    const edits = ({
      name: this.state.eventName,
      location: this.state.location,
      description: this.state.description,
    });

    eventHelpers.editEvent(this.state.url, edits);
  }

  // adds markers to map when map is left clicked
  loadMarker() {
    const location = {};
    const coordinates = this.state.coordinates;
    let { markers } = this.state;
    if (this.state.markers.length === 1) {
      return;
    }
    const latitude = coordinates.split(',').shift();
    const longitude = coordinates.split(',').pop();
    location.lat = Number(latitude);
    location.lng = Number(longitude);
    console.log('LOCATION', location);
    markers = update(markers, {
      $push: [
        {
          position: location,
          defaultAnimation: 2,
          key: Date.now(),
        },
      ],
    });
    this.setState({ markers });
  }

  handleMapClick() {
    return;
  }

  // removes marker from map when marker is right clicked
  handleMarkerRightClick(index, event) {
    console.log('here in rightclick', event);
    let { markers } = this.state;
    console.log('here');
    markers = update(markers, {
      $splice: [
        [index, 1],
      ],
    });
    this.setState({ markers });
  }


  render() {
    this.state.contributions = this.state.contributions || [];
    return (
    <div>
      <MenuBar />
      <br />
      <div className="ui two column stackable grid container">
        <div className="sixteen wide column"><br /></div>
          <div className="five wide column">
            <UserInfo user={this.state.host || {}} />
            <MapView 
              markers={this.state.markers}
              handleMapClick={this.handleMapClick}
              handleMarkerRightClick={this.handleMarkerRightClick}
            />
          </div>
          <div className="ten wide column">
            <div className="ui segment">
              {
                this.state.showEdit ?
                <UniqueEventEdit
                  eventName={this.state.eventName}
                  description={this.state.description}
                  location={this.state.location}
                  editState={this.editState}
                  setEdit={this.setEdit}
                />
                :
                <UniqueEventView
                  eventId={this.state.url}
                  eventName={this.state.eventName}
                  description={this.state.description}
                  location={this.state.location}
                  date={this.state.date}
                  time={this.state.time}
                  contributions={this.state.contributions}
                  joinable={this.state.joinable}
                  editable={this.state.editable}
                  setEdit={this.setEdit}
                  handleJoinEventWithContributions={this.handleJoinEventWithContributions}
                />
              }
            </div>

            {
              this.state.contributions.length > 0 ? 
              <ContributionList
                ref="contribution-list"
                msgDivClass={this.state.msgDivClass}
                contributions={this.state.contributions}
                onCheckBoxClick={this.handleCheckBoxClick}
              />
              :
              null
            }
          </div>
        </div>
      </div>
    );
  }
}

export default UniqueEvent;
