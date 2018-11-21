import chatReducer from '../../reducers/chatReducer';
import ActionTypes from '../../../src/actionTypes';
import {setUserName} from '../../utils/storage';
import {MOCK_CHAT_DATA_INIT, MOCK_USER_NAME} from '../../__mocks__/mockData';

describe('Test chatReducer', () => {

  beforeEach(() => {
    setUserName(MOCK_USER_NAME);
  });

  it('default state', () => {
    const nextState = chatReducer(undefined, {});

    // check all static values
    nextState.timestamp = 0;
    MOCK_CHAT_DATA_INIT.timestamp = 0;

    expect(nextState).toMatchObject(MOCK_CHAT_DATA_INIT)
  });

  it('ActionTypes.MESSAGE_SEND state', () => {
    const nextState = chatReducer(undefined, {
      type: ActionTypes.MESSAGE_SEND
    });

    expect(nextState.loading).toBeTruthy();
  });

  it('ActionTypes.MESSAGE_RECEIVED state', () => {
    const nextState = chatReducer(undefined, {
      type: ActionTypes.MESSAGE_RECEIVED,
      payload : {
        data : {
          userName : MOCK_USER_NAME
        }
      }
    });

    expect(nextState.loading).toBeFalsy();
    expect(nextState.chatArr).toHaveLength(1);

  });
});