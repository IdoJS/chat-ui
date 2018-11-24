import ActionTypes from '../actionTypes';
import {getUserId} from '../utils/storage';

const currentUserId = getUserId();

const chatReducerInitializeState = {
  loading: false,
  chatArr: [],
  typingArr: [],
  timeout: false
};

const chatReducer = (state = chatReducerInitializeState, action) => {
  switch (action.type) {
    case ActionTypes.MESSAGE_SEND:
      return {
        ...state,
        loading: true
      };

    case ActionTypes.MESSAGE_RECEIVED:
      return {
        ...state,
        chatArr: [...state.chatArr, action.payload],
        typingArr: state.typingArr.filter(typing => typing.data.userId !== action.payload.data.userId),
        loading: action.payload.userId === currentUserId
      };

    case ActionTypes.MESSAGE_TYPING_ADD:
      const typingUserIndex = state.typingArr.findIndex(typing => typing.data.userId === action.payload.data.userId);
      const typingArrAdd = [...state.typingArr];
      if (typingUserIndex === -1) {
        typingArrAdd.push(action.payload);
      }
      return {
        ...state,
        typingArr: typingArrAdd,
        loading: false

      };

    case ActionTypes.MESSAGE_TYPING_REMOVE:
      const typingArrRemove = state.typingArr.filter(typing => typing.data.userId !== action.payload.data.userId);
      return {
        ...state,
        typingArr: typingArrRemove,
        loading: false
      };

    default:
      return state;
  }
};

export default chatReducer;