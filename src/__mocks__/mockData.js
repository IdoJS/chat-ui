const MOCK_USER_NAME = 'mock_user_name';
const MOCK_AVATAR_CLASS = 'mock_avatar_class';
const MOCK_TEXT = 'mock_text';
const MOCK_SOCKET_REQ = {text: MOCK_TEXT, avatar: MOCK_AVATAR_CLASS, userName: MOCK_USER_NAME, userId: '0'};
const MOCK_SELF_MESSAGE = {text: MOCK_TEXT, avatar: MOCK_AVATAR_CLASS, userName: MOCK_USER_NAME, timestamp: 0, userId: '0'};
const MOCK_OTHER_MESSAGE = {text: MOCK_TEXT, avatar: MOCK_AVATAR_CLASS, userName: 'other_user', timestamp: 0, userId: '1'};

const MOCK_CHAT_DATA_INIT = {
  loading: false,
  timestamp: Date.now(),
  chatArr: [],
  typingArr: [],
  timeout: false
};
export {
  MOCK_USER_NAME,
  MOCK_AVATAR_CLASS,
  MOCK_TEXT,
  MOCK_SOCKET_REQ,
  MOCK_CHAT_DATA_INIT,
  MOCK_SELF_MESSAGE,
  MOCK_OTHER_MESSAGE
}