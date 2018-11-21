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