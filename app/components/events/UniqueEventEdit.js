import React from 'react';

const UniqueEventEdit = (props) => {
  return (
    <div className="ui massive relaxed list">
      <div className="item">
        <h1>You are now making your spread even more awesome!</h1>
        <form className="eventEdit">

          <input
            className="eventName"
            value={props.eventName}
            placeholder={props.eventName}
            onChange={props.editState}
          />

          <input
            className="location"
            value={props.location}
            placeholder={props.location}
            onChange={props.editState}
          />

          <input
            className="description"
            value={props.description}
            placeholder={props.description}
            onChange={props.editState}
          /><br />

          <button
            className="save-changes ui tiny button"
            onClick={props.setEdit}
          >
            <i className="icon save"></i>
            Save changes
          </button>

        </form>
      </div>
    </div>
  );
};

export default UniqueEventEdit;
