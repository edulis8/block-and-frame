import React from 'react';
import update from 'react-addons-update';
import eventHelpers from '../utils/eventHelpers';
import UniqueEventEdit from '../components/events/UniqueEventEdit';
import UniqueEventView from '../components/events/UniqueEventView';
import MenuBar from '../components/MenuBar';
import Contribution from '../components/events/ContributionListItem';
import MapView from '../components/events/MapView';

const ContributionList = ({ contributions, onCheckBoxClick }) => (
  <ul>
    {contributions.map((contrib, index) =>
      <Contribution
        key={index}
        {...contrib}
        onCheckBoxClick={onCheckBoxClick}
      />
    )}
  </ul>
);
// Above, the ...spread operater is used instead of:
// bringer={contrib.bringer}
// item={contrib.item}
// notes={contrib.notes}
// index={contrib.index}


class UniqueEvent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      eventName: '',
      description: '',
      location: '',
      time: '',
      date: '',
      eventId: '',
      creator_name: '',
      creator_email: '',
      showEdit: false,
      editable: false,
      markers: [],
      url: location.href.split('/').pop(),
      creatorId: '',
    };

    this.setEdit = this.setEdit.bind(this);
    this.initializePage = this.initializePage.bind(this);
    this.editState = this.editState.bind(this);
    this.determineName = this.determineName.bind(this);
    this.saveEventChanges = this.saveEventChanges.bind(this);
    this.handleMapClick = this.handleMapClick.bind(this);
    this.handleMarkerRightClick = this.handleMarkerRightClick.bind(this);
    this.handleCheckBoxClick = this.handleCheckBoxClick.bind(this);
  }

  componentDidMount() {
    this.initializePage();
  }
  setEdit() {
    if (this.state.showEdit) {
      this.saveEventChanges();
    }

    this.setState({ showEdit: !this.state.showEdit });
  }

  handleCheckBoxClick(e, index) {
    // toggle 'bringer' to be user id or null 
    if (this.state.contributions[index].bringer === null) {
      this.state.contributions[index].bringer = window.localStorage.id;
    } else {
      this.state.contributions[index].bringer = null;
    }
  }
  initializePage() {
    eventHelpers.getEventbyId(this.state.url)
      .then((response) => {
        console.log('response from init page', response.data);
        response.data.users.forEach((user) => {
          if (user._pivot_user_id === Number(window.localStorage.id)) {
            this.setState({ creatorId: user._pivot_user_id });
          }
        });
        this.setState({
          eventName: response.data.name,
          description: response.data.description,
          location: response.data.location,
          date: response.data.date,
          time: response.data.time,
          eventId: response.data.id,
          creator_email: response.data.users[0].email,
          creator_name: response.data.users[0].name,
          contributions: response.data.toBring.contributions,
        });
        if (this.state.creatorId === Number(window.localStorage.id)) {
          this.setState({ editable: true });
        }
        console.log('outer', this.state.contributions);
      })
      .catch((error) => {
        console.log(error);
      });
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

    eventHelpers.editEvent(this.state.url, edits);
  }

  // adds markers to map when map is left clicked
  handleMapClick(event) {
    if (this.state.markers.length === 1) {
      return;
    }
    let { markers } = this.state;
    markers = update(markers, {
      $push: [
        {
          position: event.latLng,
          defaultAnimation: 2,
          key: Date.now(),
        },
      ],
    });
    this.setState({ markers });
  }

  // removes marker from map when marker is right clicked
  handleMarkerRightClick(index, event) {
    console.log('here in rightclick');
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
                  eventId={this.state.url}
                  eventName={this.state.eventName}
                  description={this.state.description}
                  location={this.state.location}
                  date={this.state.date}
                  time={this.state.time}
                  contributions={this.state.contributions}
                  hostName={this.determineName}
                  setEdit={this.setEdit}
                  sameEmail={this.state.editable}
                />
              }

              <MapView 
                markers={this.state.markers}
                handleMapClick={this.handleMapClick}
                handleMarkerRightClick={this.handleMarkerRightClick}
              />

              <h3 className="ui header">
                Please bring for this spread:
              </h3>
              <ContributionList 
                contributions = {this.state.contributions}
                onCheckBoxClick = {this.handleCheckBoxClick}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UniqueEvent;
