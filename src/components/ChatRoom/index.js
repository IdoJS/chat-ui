import React from 'react';
import PropTypes from 'prop-types';
import socketObserver from '../../utils/socketObserver';

import RequestTypes from '../../requestTypes';

import Title from '../Title';
import SendMessage from '../SendMessage';
import MessageList from '../MessageList';

import {getUserName, getAvatarClass} from '../../utils/storage';

class ChatRoom extends React.Component {

  constructor(props) {
    super(props);

    this.currentUserName = getUserName();
    this.currentAvatarClass = getAvatarClass();

    this.onMessageSend = this.onMessageSend.bind(this);
    this.onMessageTyping = this.onMessageTyping.bind(this);


  }

  onMessageSend({text}) {
    const data = {
      text,
      userName: this.currentUserName,
      timestamp: Date.now(),
      avatar: this.currentAvatarClass,
      isTyping: false,
      requestType: RequestTypes.REQUEST_SENDING
    };

    socketObserver.send(data);
    this.props.userSendMessage && this.props.userSendMessage(data);
  }

  onMessageTyping(isTyping) {
    socketObserver.send({
      text: '...',
      userName: this.currentUserName,
      timestamp: Date.now(),
      avatar: this.currentAvatarClass,
      isTyping,
      requestType: RequestTypes.REQUEST_TYPING
    });
  }

  componentDidMount() {
    socketObserver.subscribe({
      identifier: this,
      o: function (data) {
        if (data.requestType === RequestTypes.REQUEST_TYPING) {
          this.props.updateMessageTyping && this.props.updateMessageTyping(data)
        } else {
          this.props.updateMessageList(data);
        }
      }.bind(this)
    });
  }

  componentWillUnmount() {
    socketObserver.unSubscribe({
      identifier: this
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    const {chatData} = this.props;

    return chatData.typingArr.length !== nextProps.chatData.typingArr.length ||
      chatData.chatArr.length !== nextProps.chatData.chatArr.length ||
      chatData.loading !== nextProps.chatData.loading
  }

  render() {
    return (<div className='chat_box_container'>
      <Title userName={this.currentUserName}
             currentUser={this.currentUserName}/>

      <MessageList chatData={this.props.chatData}
                   currentUser={this.currentUserName}/>

      <SendMessage isLoading={this.props.chatData.loading}
                   onMessageSend={this.onMessageSend}
                   onMessageTyping={this.onMessageTyping}/>
    </div>);
  }
};


ChatRoom.defaultProps = {
  chatData: {
    loading: false,
    timestamp: Date.now(),
    chatArr: [],
    typingArr: [],
    timeout: false
  },
  updateMessageList: () => {
    console.warn('Please implement updateMessageList');
  },
  updateMessageTyping: () => {
    console.warn('Please implement updateMessageTyping');
  }
};

ChatRoom.propTypes = {
  chatData: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    chatArr: PropTypes.array.isRequired,
    typingArr: PropTypes.array.isRequired,
    timeout: PropTypes.bool.isRequired
  }).isRequired,
  updateMessageList: PropTypes.func.isRequired,
  updateMessageTyping : PropTypes.func.isRequired
};

export default ChatRoom;