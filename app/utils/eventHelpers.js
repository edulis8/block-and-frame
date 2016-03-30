import axios from 'axios';

const eventHelpers = {
  createEvent(event, component) {
    console.log('event to be created', event);
    const token = window.localStorage.getItem('token');
    axios({
      url: '/api/events/',
      method: 'post',
      data: event,
      headers: { Authorization: token },
    })
    .then((res) => {
      component.context.router.push({
        pathname: `/${res.data.id}`,
      });
    })
    .catch((res) => {
      console.log(res);
    });
  },

  getEventbyId(id) {
    const token = window.localStorage.getItem('token');
    return axios({
      url: `/api/events/${id}`,
      method: 'get',
      headers: { Authorization: token },
    });
  },

  editEvent(id, stateAsUserUpdates) {
    const token = window.localStorage.getItem('token');
    return axios({
      url: `api/events/${id}`,
      method: 'put',
      data: stateAsUserUpdates,
      headers: { Authorization: token },
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
  },

  // wrap blobSender and joinEvent in third function
  joinEventWithContributions(eventId, contributions, callback, host) {
    eventHelpers.joinEvent(eventId, callback, host);
    // return this?
    eventHelpers.contributionsSave(contributions, eventId, callback);
  },

  contributionsSave(contributionsArray, eventId, callback) {
    const token = window.localStorage.getItem('token');
    return axios({
      url: `api/events/${eventId}`,
      method: 'put',
      data: { toBring: { contributions: contributionsArray } },
      headers: { Authorization: token },
    })
    .then((response) => {
      console.log('cont save', response);
      if (callback) {
        callback();
      }
    })
    .catch((error) => {
      console.log(error);
    });
  },
  joinEvent(eventId, callback, host) {
    const token = window.localStorage.getItem('token');
    return axios({
      url: `api/events/join/${eventId}`,
      method: 'put',
      data: {
        host,
      },
      headers: { Authorization: token },
    })
    .then((response) => {
      if (callback) {
        callback();
      }
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
  },
  getAllEvents() {
    const token = window.localStorage.getItem('token');
    return axios({
      url: '/api/events/',
      method: 'get',
      headers: { Authorization: token },
    });
  },
};

export default eventHelpers;
