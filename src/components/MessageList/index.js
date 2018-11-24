import React from 'react';
import MessageListItem from './MessageListItem';
import PropTypes from 'prop-types';

class MessageList extends React.PureComponent {
  static propTypes = {
    currentUser: PropTypes.string.isRequired,
    currentUserId: PropTypes.string.isRequired,
    chatData: PropTypes.shape({
      chatArr: PropTypes.array.isRequired,
      typingArr: PropTypes.array.isRequired,
    }).isRequired
  };

  componentDidUpdate() {
    const objDiv = document.getElementById('chat_container');
    objDiv.scrollTop = objDiv.scrollHeight;
  }

  render() {
    const {chatData, currentUser, currentUserId} = this.props;
    const {chatArr, typingArr} = chatData;

    const items = chatArr.map((data, key) => {
      return <MessageListItem {...data} currentUser={currentUser} currentUserId={currentUserId} key={key}/>
    });

    const typing = typingArr.map((data, key) => {
      return <MessageListItem {...data} currentUser={currentUser} currentUserId={currentUserId} key={key}/>
    });

    return <ul className='chat_box' id='chat_container'>{items} {typing}</ul>
  }
}

export default MessageList;