import ActionTypes from '../actionTypes';
import {logPrint} from '../utils/logger';

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

    default:
      nextState = state;
      break;
  }

  logPrint(action.type, state, nextState);

  return nextState;
};

export default chatReducer;