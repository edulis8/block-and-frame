import axios from 'axios';

const token = window.localStorage.id;

const helpers = {
  getCurrentUserData() {
    console.log('getCurrentUserData called with', token)
    return axios.get(`/api/users/${token}`);
  },
  updateUser(stateAsUserUpdates) {
    console.log('updateUser called with:', stateAsUserUpdates);
    return axios.put(`api/users/${token}`, stateAsUserUpdates);
  },
  deleteUser() {
    console.log('deleteUser called,')
    return axios.delete(`api/users/${token}`);
  },
};

export default helpers;
