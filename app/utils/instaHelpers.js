// https://api.instagram.com/v1/users/self/media/recent/?access_token=ACCESS-TOKEN
import axios from 'axios';

const instaHelpers = {
  getAllThisUsersPics(accessToken) {
    const token = window.localStorage.getItem('token');
    return axios({
      url: 'api/insta/getUserPics',
      method: 'post',
      headers: { Authorization: token },
      data: { accessToken },
    });
  },

  getUniqueTagPics(hashtag) {
    const token = window.localStorage.getItem('token');
    const userId = window.localStorage.getItem('id');
    console.log('getUniqueTagPics', hashtag);
    if (hashtag[0] === '#') {
      hashtag = hashtag.slice(1);
      console.log(hashtag);
    }
    if (hashtag !== undefined) {
      return axios({
        url: 'api/insta/getUniqueTagPics',
        method: 'post',
        headers: { Authorization: token },
        data: { hashtag, userId },
      });
    }
  },
};

export default instaHelpers;
