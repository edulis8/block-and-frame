import axios from 'axios';

const helpers = {
  createEvent(event, component) {
    const token = window.localStorage.getItem('token');
    const userId = window.localStorage.getItem('id');
    console.log('event in helper', event);
    axios({
      url: `/api/events/${userId}`,
      method: 'post',
      data: event,
      headers: { Authorization: token },
    })
    .then((res) => {
      console.log('res from creating', res);
      component.context.router.push({
        pathname: '/events',
        // TODO: change path to /event once available
        // state: res.data,
      });
    })
    .catch((res) => {
      console.log(res);
    });
  },
  getCurrentUserData() {
    const token = window.localStorage.getItem('token');
    const userID = window.localStorage.getItem('id');
    return axios({
      url: `/api/users/${userID}`,
      token: 'get',
      headers: { Authorization: token },
    });
  },
  updateUser(stateAsUserUpdates) {
    const token = window.localStorage.getItem('token');
    const userId = window.localStorage.getItem('id');
    console.log('updateUser called with:', stateAsUserUpdates);
    return axios({
      url: `api/users/${userId}`,
      method: 'put',
      data: stateAsUserUpdates,
      headers: { Authorization: token },
    })
    .catch((err) => {
      console.log(err);
    });
  },
  deleteUser() {
    const token = window.localStorage.getItem('token');
    console.log('deleteUser called,');
    return axios.delete(`api/users/${token}`);
  },
  getEventbyId(id) {
    const token = window.localStorage.getItem('token');
    console.log('getEventbyId called');
    return axios({
      url: '/api/events/' + id,
      method: 'get',
      headers: { Authorization: token },
    });
  },
  editEvent(id, stateAsUserUpdates) {
    const token = window.localStorage.getItem('token');
    console.log('data sent', stateAsUserUpdates);
    console.log('editEvent called');
    return axios({
      url: 'api/events/' + id,
      method: 'put',
      data: stateAsUserUpdates,
      headers: { Authorization: token },
    });
    // return axios({
    //   url: '/api/events/' + id,
    //   token: 'put',
    //   headers: { Authorization: token },
    // });
  },
};

export default helpers;
