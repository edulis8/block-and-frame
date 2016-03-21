import axios from 'axios';

const helpers = {
  createEvent(event, component) {
    const userId = window.localStorage.getItem('id');
    const token = window.localStorage.getItem('token');
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
    const userID = window.localStorage.getItem('id');
    const token = window.localStorage.getItem('token');
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
};

export default helpers;
