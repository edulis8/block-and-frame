import React, { Component } from 'react';

class UserProfileForm extends Component {
  render() {
    return (
     <form className="ui form"
       onSubmit={this.props.preventDefaultSubmit}
     >
          <div className="field">
            <label>Your email:</label>
            <input type="email"
              value={this.props.email}
              onChange={this.props.onEmailChange}
              placeholder={this.props.email}
            />
          </div>
          <div className="field">
            <label>Your name:</label>
           
              <input
                value={this.props.username}
                onChange={this.props.onNameChange} 
                placeholder= {this.props.username || 'Your name'}
              /> 
          </div>
          <div className="field">
            <label>Your city:</label>
     
              <input 
                value={this.props.city}
                onChange={this.props.onCityChange}
                placeholder= {this.props.city || 'Your city'}
              /> 
              
          </div>
           <div className="field">
            <label>Your country:</label>
              <input 
                placeholder= {this.props.country || 'Your country'}
              /> 
          </div>
          <div className="field">
            <div className="ui checkbox">
            <label>I am currently traveling</label>
              <input type="checkbox" tabIndex="0" className="hidden" />
              {/* jQuery must be used or checkbox doesn't work */}
              <script>$('.ui.checkbox').checkbox()</script>
            </div>
            
          </div>
           <div className="field">
            <label>Your Bio:</label>
              <textarea 
                placeholder= {this.props.bio || 'Say a few words about yourself, and your relationship to food and travel'}
              /> 
            
          </div>
          <div className="field">
          <label><i className="instagram icon"></i> Instagram:</label>
            <input 
              placeholder= {this.props.instagram || '@spread_out'}
            />
            
          </div>
          <button
            className="ui button"
            onClick={this.props.onProfileSubmit}
          ><i className="icon save"></i> Save Profile
          </button>
          <button
            className="ui basic button"
            onClick={this.props.onDeleteUser} 
          >Delete Account
          </button>
        </form>
    );
  }
}

export default UserProfileForm;
