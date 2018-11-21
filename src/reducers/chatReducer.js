import ActionTypes from '../actionTypes';
import {logPrint} from '../utils/logger';
import {getUserName} from '../utils/storage';

const currentUserName = getUserName();

const chatReducerInitializeState = {
  loading: false,
  timestamp: Date.now(),
  chatArr: [],
  typingArr: [],
  timeout: false
};

const chatReducer = (state = chatReducerInitializeState, action) => {
  let nextState = {};

  switch (action.type) {

    case ActionTypes.MESSAGE_SEND:

      nextState = {
        ...state,
        loading: true,
        timestamp: Date.now()
      };
      break;

    case ActionTypes.MESSAGE_RECEIVED:

      nextState = {
        ...state,
        chatArr: [...state.chatArr, action.payload],
        typingArr: state.typingArr.filter(typing => typing.data.userName !== action.payload.data.userName),
        loading: action.payload.userName === currentUserName,
        timestamp: Date.now()
      };
      break;

    case ActionTypes.MESSAGE_TYPING:
      const typingUserIndex = state.typingArr.findIndex(typing => typing.data.userName === action.payload.data.userName)
      let typingArr = [...state.typingArr];
      if (action.payload.data.isTyping) {
        (typingUserIndex === -1) ? typingArr.push(action.payload) : null;
      } else {
        typingArr.splice(typingUserIndex, 1);
      }

      nextState = {
        ...state,
        typingArr,
        loading: false,
        timeout: true,
        timestamp: Date.now()

      };
      break;

    default:
      nextState = state;
      break;
  }

  logPrint(action.type, 'state:', state, 'nextState:', nextState);

  return nextState;
};

export default chatReducer;