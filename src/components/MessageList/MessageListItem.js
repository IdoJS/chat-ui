import React from 'react';
import PropTypes from 'prop-types';
import {splitTimestamp} from '../../utils/formats';

const MessageListItem = (props) => {
  const {data, currentUser} = props;
  const {text, userName, timestamp, avatar} = data;
  const currentTimeArr = splitTimestamp(timestamp);
  const msgDirection = userName === currentUser ? 'my_msg' : 'default_msg';

  return <li className={`chat_item ${msgDirection}`}>
    <div className='chat_item_avatar'>
      <h3 className="chat_item_avatarName">{userName}</h3>
      <div className={`chat_item_avatarImg ${avatar}`}/>
      <h3
        className='chat_item_timestamp '>
        <div>{currentTimeArr[1]}</div>
        <div>{currentTimeArr[0]}</div>
      </h3>
    </div>
    <p className={`chat_item_text ${msgDirection}`}>{text}</p>
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
  data : {
    text : '',
    userName: '',
    timestamp : Date.now()
  }
};

export default MessageListItem;


