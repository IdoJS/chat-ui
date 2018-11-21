import React from 'react';
import PropTypes from 'prop-types';

const MessageList = (props) => {
  const {chatData, currentUser} = props;

  const items = chatData.chatArr.map((listItem, key) => {
    return <li key={key}>{listItem.data.text}</li>
  });

  return <ul className='chat_box' id='chat_container'>
    {items}
  </ul>
};

export default MessageList;