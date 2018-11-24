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

const STORAGE_AVATAR_CLASS = 'avatarClass';
const STORAGE_USER_NAME = 'userName';
const STORAGE_USER_ID = 'UserID';

export const getAvatarClass = () => {
  return storage.getItem(STORAGE_AVATAR_CLASS);
};

export const getUserName = () => {
  return storage.getItem(STORAGE_USER_NAME);
};

export const setAvatarClass = (avatar) => {
  storage.setItem(STORAGE_AVATAR_CLASS, avatar);
};

export const setUserName = (userName) => {
  storage.setItem(STORAGE_USER_NAME, userName);
};

export const getUserId = () => {
  return storage.getItem(STORAGE_USER_ID);
};

export const setUserId = () => {
  storage.setItem(STORAGE_USER_ID, guid());
};