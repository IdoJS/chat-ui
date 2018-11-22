import React from 'react';
import PropTypes from 'prop-types';
import {splitTimestamp} from '../../utils/formats';

const MessageListItem = (props) => {
  const {data, currentUser} = props;
  const {text, userName, timestamp, avatar} = data;
  const currentTimeArr = splitTimestamp(timestamp);
  const isCurrentUserMsg = userName === currentUser;

  return <li className='chat_item'>
    <div className={`chat_item_text_header chat_item${isCurrentUserMsg ? '_user' : '_default'}`}>
      <h3 className='chat_item_user_name'>{userName}</h3>
      <h3>{currentTimeArr[1]}</h3>
    </div>
    <div className={`ui message chat_item_msg chat_item_msg${isCurrentUserMsg ? '_user' : '_default'}`}>
      <div></div>
      <div className={`chat_item_img avatar ${avatar}`}/>
      <div className={`chat_item_text chat_item_msg chat_item_msg${isCurrentUserMsg ? '_user' : '_default'}`}>
        <p className={`ui ${isCurrentUserMsg ? 'left pointing olive' : 'right pointing teal'} chat_item_msg${isCurrentUserMsg ? '_user' : '_default'} basic label`}>{text}</p>
      </div>
    </div>
  </li>
};

MessageListItem.propTypes = {
  currentUser: PropTypes.string.isRequired,
  data: PropTypes.shape({
    text: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
    timestamp: PropTypes.number.isRequired
  }).isRequired
};

MessageListItem.defaultProps = {
  currentUser: '',
  data: {
    text: '',
    userName: '',
    timestamp: Date.now()
  }
};

export default MessageListItem;


