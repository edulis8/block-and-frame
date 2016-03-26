import axios from 'axios';
//
import { browserHistory } from 'react-router';
//

const authHelpers = {
  storeToken(token, userId) {
    window.localStorage.setItem('token', token);
    window.localStorage.setItem('id', userId);
  },

  logout() {
    window.localStorage.clear();
    this.logoutInstagram();
  },
  logoutInstagram() {
    return axios.get('/auth/logout');
  },
  signupInstagram() {
    //browserHistory.push('/auth/instagram');

    // axios.get('/auth/instagram')
    // .then((res) => {
    //   console.log('res.data', res.data)
    //   authHelpers.storeToken(res.data.token, res.data.id);
    //   // after signup user should be able to fill out more info first
    //   browserHistory.push('/editprofile');
    // })
    // .catch((err) => {
    //   console.log('error in authHelpers.signupInstagram', err)
    // });
  }
};

export default authHelpers;
