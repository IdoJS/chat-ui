import React from 'react';
import socketObserver from '../../utils/socketObserver';

const ChatRoom = () => {
  socketObserver.subscribe({identifier : '', o : function (data) {
    console.log('socket', data);
  }});

  socketObserver.send({
    data : 'test'
  });
  return <div>Chat room</div>
};

export default ChatRoom;