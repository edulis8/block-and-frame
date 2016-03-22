import axios from 'axios';
import { browserHistory } from 'react-router';

const authHelpers = {
  signin(user) {
    axios.post('/auth/signin', user)
    .then((res) => {
      console.log('res in helpers', res);
      window.localStorage.setItem('token', res.data.token);
      window.localStorage.setItem('id', res.data.id);
      browserHistory.push('/');
    })
    .catch((err) => {
      console.log(err);
    });
  },

  signup(user) {
    axios.post('/auth/signup', user)
    .then((res) => {
      console.log('Sign up response: ', res);
      window.localStorage.setItem('token', res.data.token);
      window.localStorage.setItem('id', res.data.id);
      browserHistory.push('/');
    })
    .catch((err) => {
      console.log(err);
    });
  },

  logout() {
    window.localStorage.clear();
  },
};

export default authHelpers;
