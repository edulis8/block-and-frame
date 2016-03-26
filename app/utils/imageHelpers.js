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

  saveImage(filepath) {
    const token = window.localStorage.getItem('token');
    const userId = window.localStorage.getItem('id');

    return axios({
      url: 'api/users/upload',
      method: 'post',
      headers: { Authorization: token },
      data: { filepath, userId },

    });
  },
};

export default imageHelpers;
