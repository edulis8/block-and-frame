import axios from 'axios';

const userHelpers = {
  getCurrentUserData() {
    const token = window.localStorage.getItem('token');
    const userId = window.localStorage.getItem('id');
    return axios({
      url: `/api/users/${userId}`,
      method: 'get',
      headers: { Authorization: token },
    });
  },

  getAnyUserById(userId) {
    const token = window.localStorage.getItem('token');
    return axios({
      url: `/api/users/${userId}`,
      method: 'get',
      headers: { Authorization: token },
    });
  },

  updateUser(stateAsUserUpdates) {
    const token = window.localStorage.getItem('token');

    // Format for database
    stateAsUserUpdates.is_traveling = stateAsUserUpdates.isTraveling;
    delete stateAsUserUpdates.isTraveling;

    return axios({
      url: 'api/users/',
      method: 'put',
      data: stateAsUserUpdates,
      headers: { Authorization: token },
    });
  },
  
  deleteUser() {
    const token = window.localStorage.getItem('token');
    return axios({
      url: 'api/users/',
      method: 'delete',
      headers: { Authorization: token },
    });
  },
};

export default userHelpers;
