import axios from 'axios';

const helpers = {
  getCurrentUserData(token) {
    return axios.get(['/api/users/', token].join(''));
  },
};

export default helpers;
