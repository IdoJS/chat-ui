import React from 'react';
import {connect} from 'react-redux';

import ChatRoom from '../../components/ChatRoom';
import {messageSend, messageReceived, messageTyping} from '../../actions/chatAction';

const mapDispatchToProps = dispatch => {
  return {
    userSendMessage: (data) => dispatch(messageSend(data)),
    updateMessageList: (data) => dispatch(messageReceived(data)),
    updateMessageTyping: (data) => dispatch(messageTyping(data))
  };
};

const mapStateToProps = state => {
  return {
    chatData: state
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatRoom);