/**
 * Choose storage by ENV
 * @type {Storage}
 */
const storage = !process.env.NODE_ENV || process.env.NODE_ENV === 'development' ? sessionStorage : localStorage;

/**
 * Generate unique ID
 * https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
 * @returns {string}
 */
const guid = () => {
  const s4 = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  };
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
};

export const getAvatarClass = () => {
  return storage.getItem('avatarClass');
};

export const getUserName = () => {
  return storage.getItem('userName');
};

export const setAvatarClass = (avatar) => {
  storage.setItem('avatarClass', avatar);
};

export const setUserName = (userName) => {
  storage.setItem('userName', userName);
};

export const getUserId = () => {
  return storage.getItem('userId');
};

export const setUserId = () => {
  storage.setItem('userId', guid());
};