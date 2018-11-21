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

    default:
      nextState = state;
      break;
  }

  logPrint(action.type, state, nextState);

  return nextState;
};

export default chatReducer;