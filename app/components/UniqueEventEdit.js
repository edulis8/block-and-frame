import React from 'react';

class UniqueEventEdit extends React.Component {
  render() {
    return (
      <div className="ui massive relaxed list">
        <div className="item">
          <h1>You are now making your spread even more awesome!</h1>
          <form className="eventEdit">

            <input
              className="eventName"
              value={this.props.eventName}
              placeholder={this.props.eventName}
              onChange={this.props.editState}
            />

            <input
              className="location"
              value={this.props.location}
              placeholder={this.props.location}
              onChange={this.props.editState}
            />

            <input
              className={this.props.hostKey()}
              value={this.props.hostName}
              placeholder={this.props.hostName}
              onChange={this.props.editState}
            />

            <input
              className="description"
              value={this.props.description}
              placeholder={this.props.description}
              onChange={this.props.editState}
            /><br />

            <button
              className="save-changes ui icon button"
              onClick={this.props.setEdit}
            >
              Save changes!
            </button>

          </form>
        </div>
      </div>
    );
  }
}

export default UniqueEventEdit;
