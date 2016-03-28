import axios from 'axios';

const imageHelpers = {
  readFileURL(file, callback) {
    const fileReader = new FileReader();
    fileReader.addEventListener('load', () => {
      callback(fileReader.result);
    }, false);
    if (file) {
      fileReader.readAsDataURL(file);
    }
  },

/* Not currently using this func - converts image to 
   binary if we choose to store image in that format.
   Right now we are only sending & storing the url */
  readFileBinary(file, callback) {
    const fileReader = new FileReader();
    fileReader.addEventListener('load', () => {
      callback(fileReader.result);
    }, false);
    if (file) {
      fileReader.readAsBinaryString(file);
      // fileReader.readAsArrayBuffer(file);
    }
  },

  saveAvatarURL(filepath) {
    const token = window.localStorage.getItem('token');
    const userId = window.localStorage.getItem('id');

    return axios({
      url: 'api/users/avatar',
      method: 'post',
      headers: { Authorization: token },
      data: { filepath, userId },
    });
  },

  getUserAvatar(userId) {
    const id = userId || window.localStorage.getItem('id');
    const token = window.localStorage.getItem('token');
    return axios({
      url: `api/users/avatar/${id}`,
      method: 'get',
      headers: { Authorization: token },
    }); // avatarURL will be in the response
  },

};

export default imageHelpers;
