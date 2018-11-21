const MOCK_USER_NAME = 'mock_user_name';
const MOCK_AVATAR_CLASS = 'mock_avatar_class';
const MOCK_TEXT = 'mock_text';
const MOCK_SOCKET_REQ = {text: MOCK_TEXT, avatar: MOCK_AVATAR_CLASS, userName: MOCK_USER_NAME};
const MOCK_SELF_MESSAGE = {text: MOCK_TEXT, avatar: MOCK_AVATAR_CLASS, userName: MOCK_USER_NAME};
const MOCK_OTHER_MESSAGE = {text: MOCK_TEXT, avatar: MOCK_AVATAR_CLASS, userName: 'other_user'};

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
  MOCK_CHAT_DATA_INIT
}