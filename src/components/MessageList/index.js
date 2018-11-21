import React from 'react';
import MessageListItem from './MessageListItem';
import PropTypes from 'prop-types';

class MessageList extends React.PureComponent {
  render() {
    const {chatData, currentUser} = this.props;
    const {chatArr} = chatData;
    const items = chatArr.map((data, key) => {
      return <MessageListItem {...data} currentUser={currentUser} key={key}/>
    });

    return <ul className='chat_box' id='chat_container'>{items} key={0}u</ul>
  }

  componentDidUpdate() {
    const objDiv = document.getElementById('chat_container');
    objDiv.scrollTop = objDiv.scrollHeight;
  }
}

MessageList.propTypes = {
  currentUser: PropTypes.string.isRequired,
  chatData: PropTypes.shape({
    chatArr: PropTypes.array.isRequired
  }).isRequired
};

export default MessageList;