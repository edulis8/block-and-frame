import axios from 'axios';

const authHelpers = {
  storeToken(token, userId) {
    window.localStorage.setItem('token', token);
    window.localStorage.setItem('id', userId);
  },

  logout() {
    authHelpers.logoutInstagram();
    setTimeout(function() {
      window.localStorage.clear();
    }, 300);
  },
  logoutInstagram() {
    // this performs a req.logout() on the server
    return axios.get('/auth/logout');
  },
};

export default authHelpers;
