import React from 'react';
import { Link } from 'react-router';


const MenuBar = () => {
  return (
  <div className="ui attached stackable menu">
    <div className="ui container">
    <Link
      className="item"
      to={'/app'}
    >
      <i className="home icon"></i>
      Home
    </Link>
    <Link
      className="item"
      to={'/events'}
    >
        <i className="users icon"></i>
        View Events
    </Link>
    <Link
      className="item"
      to={'/eventcreate'}
    >
      <i className="spoon icon"></i>
      Host Something Awesome
    </Link>
    <div className="ui simple dropdown item right item">
      My Account
      <i className="dropdown icon"></i>
      <div className="menu">
        <Link
          className="item"
          to={'/profile'}
        >
            <i className="edit icon"></i>
            Edit Profile
        </Link>
        <a className="item"><i className="food icon"></i> My Events</a>
        <a className="item"><i className="mail icon"></i> Messages</a>
        <a className="item"><i className="settings icon"></i> Account Settings</a>
        <a className="item"><i className="sign out icon"></i> Log Out</a>

      </div>
    </div>
  </div>
</div>
  );
};

export default MenuBar;
