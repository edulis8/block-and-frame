import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
// Sass file imported:
import './main.scss';

import Site from './containers/Site';
import EventList from './containers/EventList';
import CreateEvent from './containers/CreateEventContainer';
import Signin from './containers/Signin';
import Signup from './containers/Signup';
import Profile from './containers/UserProfile';
import EditUserProfile from './containers/EditUserProfile';
import UniqueEvent from './containers/UniqueEvent';
import LandingPage from './containers/LandingPage';
import About from './containers/About';

// TODO: Index Route may change - whatever we want to render
// on visiting the site home path '/'
const routes = (
  <Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>
    <Route path="/" component={Site} >
      <IndexRoute component={LandingPage} />
      <Route path="signin" component={Signin} />
      <Route path="signup" component={Signup} />
      <Route path="about" component={About} />
      <Route path="editProfile" component={EditUserProfile} />
      <Route path="profile" component={Profile} />
      <Route path="events" component={EventList} />
      <Route path="eventcreate" component={CreateEvent} />
      <Route path="/:eventID" component={UniqueEvent} />
    </Route>
  </Router>
);

ReactDOM.render(routes, document.getElementById('root'));
