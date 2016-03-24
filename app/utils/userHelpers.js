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

  updateUser(stateAsUserUpdates) {
    const token = window.localStorage.getItem('token');
    const userId = window.localStorage.getItem('id');

    // Format for database
    stateAsUserUpdates.is_traveling = stateAsUserUpdates.isTraveling;
    delete stateAsUserUpdates.isTraveling;

    console.log('updateUser called with:', stateAsUserUpdates);
    return axios({
      url: `api/users/${userId}`,
      method: 'put',
      data: stateAsUserUpdates,
      headers: { Authorization: token },
    });
  },

  deleteUser() {
    const userId = window.localStorage.getItem('id');
    const token = window.localStorage.getItem('token');
    return axios({
      url: `api/users/${userId}`,
      method: 'delete',
      headers: { Authorization: token },
    });
  },

  getSignedRequest(file) {
    const token = window.localStorage.getItem('token');
    return axios({
      url: `/api/users/sign_s3?file_name=${file.name}&file_type=${file.type}`,
      method: 'get',
      headers: { Authorization: token },
    });
  },

  uploadImage(file, signedRequest, url) {
    console.log('file', file);
    console.log('signedRequest', signedRequest);
    console.log('url', url);
    return axios({
      url: signedRequest,
      method: 'put',
      headers: { 'x-amz-acl': 'public-read' },
      data: file,
    })
    .then((res) => {
      console.log('success', res);
      console.log('url', url);
      // here would be a good place to set the urls
      // still need to call something to save those in the db?
    })
    .catch((err) => {
      console.log('Could not upload', err);
    });
  },
};

export default userHelpers;
