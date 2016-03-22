import axios from 'axios';

const userHelpers = {
  getCurrentUserData() {
    const token = window.localStorage.getItem('token');
    const userID = window.localStorage.getItem('id');
    return axios({
      url: `/api/users/${userID}`,
      method: 'get',
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
    return axios({
      url: `api/users/${token}`,
      method: 'delete',
      headers: { Authorization: token },
    })
    .catch((err) => {
      console.log(err);
    });
  },
};

export default userHelpers;
