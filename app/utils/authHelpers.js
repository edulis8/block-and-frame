const authHelpers = {
  storeToken(token, userId) {
    window.localStorage.setItem('token', token);
    window.localStorage.setItem('id', userId);
  },

  logout() {
    window.localStorage.clear();
  },
};

export default authHelpers;
