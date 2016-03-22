import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

// jQuery and CDN for Semantic-UI
import $ from 'jquery';
import jQuery from 'jquery';
window.$ = $;
window.jQuery = jQuery;
$('head').append($('<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.1.8/semantic.min.css">'));
$('body').append($('<script src="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.1.8/semantic.min.js"></script>'));
$('body').append($('<script src="../app/csstemp/main.css"></script>'));


// TODO: do we even need App?
// import App from './containers/App';
import Site from './containers/Site';
import EventList from './containers/EventList';
import CreateEvent from './containers/CreateEventContainer';
import Signin from './containers/Signin';
import Signup from './containers/Signup';
import UserProfile from './containers/UserProfile';
import UniqueEvent from './containers/UniqueEvent';

// TODO: Index Route may change - whatever we want to render
// on visiting the site home path '/'
const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Site} >
      <IndexRoute component={EventList} />
      <Route path="signin" component={Signin} />
      <Route path="signup" component={Signup} />
      <Route path="profile" component={UserProfile} />
      <Route path="events" component={EventList} />
      <Route path="eventcreate" component={CreateEvent} />
      <Route path="/:eventID" component={UniqueEvent} />
    </Route>
  </Router>
);

ReactDOM.render(routes, document.getElementById('root'));
