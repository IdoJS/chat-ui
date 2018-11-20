import ActionTypes from '../actionTypes';

export const messageSend = ({data}) => {
  return {
    type: ActionTypes.MESSAGE_SEND,
    payload: {
      data
    }
  };
};