import React from 'react';

const UniqueEventEdit = (props) => {
  return (
    <div className="container">
      <div className="ui small form">
        <div className="two fields">   
        
          <div className="field">
            <label>Spread: </label>
            <div className="ui left input">
              <input
                type="text"
                value={props.eventName}
                placeholder={props.eventName}
                onChange={props.editState}
              />
            </div>
          </div>
              
          <div className="field">
            <label>Location: </label>
            <div className="ui left input">
              <input
                type="text"
                value={props.location}
                placeholder={props.location}
                onChange={props.editState}
              />
            </div>
          </div>
        </div>

        <div className="field">
          <label>Description: </label>
          <div className="ui left input">
            <textarea
              rows="3"
              value={props.description}
              placeholder={props.description}
              onChange={props.editState}
            />
          </div>
        </div>
            
        <div
          className="ui tiny submit button"
          onClick={props.setEdit}
        >Save Changes
        </div>
      
      </div>  
    </div>
  );
};

export default UniqueEventEdit;
