import ActionTypes from '../actionTypes';

export const messageSend = (data) => {
  return {
    type: ActionTypes.MESSAGE_SEND,
    payload: {
      data
    }
  };
};

export const messageReceived = (data) => {
  return {
    type: ActionTypes.MESSAGE_RECEIVED,
    payload: {
      data
    }
  };
};

export const messageTypingAdd = (data) => {
  return {
    type: ActionTypes.MESSAGE_TYPING_ADD,
    payload: {
      data
    }
  };
};

export const messageTypingRemove = (data) => {
  return {
    type: ActionTypes.MESSAGE_TYPING_REMOVE,
    payload: {
      data
    }
  };
};