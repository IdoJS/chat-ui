import React from 'react';
import {connect} from 'react-redux';

import ChatRoom from '../../components/ChatRoom';
import {messageSend, messageReceived, messageTypingAdd, messageTypingRemove} from '../../actions/chatAction';

const mapDispatchToProps = dispatch => {
  return {
    userSendMessage: (data) => dispatch(messageSend(data)),
    updateMessageList: (data) => dispatch(messageReceived(data)),
    updateMessageTypingAdd: (data) => dispatch(messageTypingAdd(data)),
    updateMessageTypingRemove: (data) => dispatch(messageTypingRemove(data))
  };
};

const mapStateToProps = state => {
  return {
    chatData: state
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatRoom);