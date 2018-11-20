let storage = !process.env.NODE_ENV || process.env.NODE_ENV === 'development' ? sessionStorage : localStorage;

export const getAvatarClass = () => {
  return storage.getItem('avatarClass');
};


export const getUserName = () => {
  return storage.getItem('userName');
};

export const setAvatarClass = (avatar) => {
  return storage.setItem('avatarClass', avatar);
};


export const setUserName = (userName) => {
  return storage.setItem('userName', userName);
};