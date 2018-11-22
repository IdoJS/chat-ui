import ActionTypes from '../actionTypes';
import {logPrint} from '../utils/logger';
import {getUserName} from '../utils/storage';

const currentUserName = getUserName();

const chatReducerInitializeState = {
  loading: false,
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
        loading: true
      };
      break;

    case ActionTypes.MESSAGE_RECEIVED:

      nextState = {
        ...state,
        chatArr: [...state.chatArr, action.payload],
        typingArr: state.typingArr.filter(typing => typing.data.userName !== action.payload.data.userName),
        loading: action.payload.userName === currentUserName
      };
      break;

    case ActionTypes.MESSAGE_TYPING_ADD:
      const typingUserIndex = state.typingArr.findIndex(typing => typing.data.userName === action.payload.data.userName);
      const typingArrAdd = [...state.typingArr];
      typingUserIndex === -1 ? typingArrAdd.push(action.payload) : null;

      nextState = {
        ...state,
        typingArr: typingArrAdd,
        loading: false

      };
      break;

    case ActionTypes.MESSAGE_TYPING_REMOVE:
      const typingArrRemove = state.typingArr.filter(typing => typing.data.userName !== action.payload.data.userName);

      nextState = {
        ...state,
        typingArr: typingArrRemove,
        loading: false

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