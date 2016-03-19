import axios from 'axios';

const token = window.localStorage.id;

const helpers = {
  getCurrentUserData() {
    return axios.get(`/api/users/${token}`);
  },
  updateUser() {
    console.log('updateUser called')
  },
  deleteUser() {
    console.log('deleteUser called,')
  },
};

export default helpers;
