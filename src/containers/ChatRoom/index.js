import React from 'react';
import socketObserver from '../../utils/socketObserver';

import Title from '../../components/Title';
import SendMessage from '../../components/SendMessage';
import MessageList from '../../components/MessageList';

const ChatRoom = () => {
  socketObserver.subscribe({
    identifier: '', o: function (data) {
      console.log('socket', data);
    }
  });

  socketObserver.send({
    data: 'test'
  });
  return <div className='chat_box_container'>
    <Title userName="FAKE USER NAME"/>
    <MessageList/>
    <SendMessage/>
  </div>
};

export default ChatRoom;