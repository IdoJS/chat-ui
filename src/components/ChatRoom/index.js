import React from 'react';
import PropTypes from 'prop-types';
import socketObserver from '../../utils/socketObserver';

import Title from '../Title';
import SendMessage from '../SendMessage';
import MessageList from '../MessageList';

import {getUserName, getAvatarClass} from '../../utils/storage';

class ChatRoom extends React.PureComponent {

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
      avatar: this.currentAvatarClass
    };

    socketObserver.send(data);
    this.props.userSendMessage(data);
  }

  onMessageTyping(isTyping) {
    // TODO handle user typing
  }

  componentDidMount() {
    socketObserver.subscribe({
      identifier: '', o: function (data) {
        this.props.updateMessageList && this.props.updateMessageList(data);
      }.bind(this)
    });
  }

  componentWillUnmount() {
    socketObserver.unSubscribe({
      identifier: this
    });
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
  }
};

ChatRoom.propTypes = {
  chatData: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    timestamp: PropTypes.number.isRequired,
    chatArr: PropTypes.array.isRequired,
    typingArr: PropTypes.array.isRequired,
    timeout: PropTypes.bool.isRequired
  }).isRequired,
  updateMessageList: PropTypes.func.isRequired
};

export default ChatRoom;