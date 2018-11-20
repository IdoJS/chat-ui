import React from 'react';
import {connect} from 'react-redux';

import socketObserver from '../../utils/socketObserver';

import Title from '../../components/Title';
import SendMessage from '../../components/SendMessage';
import MessageList from '../../components/MessageList';

import {messageSend} from '../../actions/chatAction';

class ChatRoom extends React.Component {

  constructor(props){
    super(props);

    socketObserver.subscribe({
      identifier: '', o: function (data) {
        console.log('socket', data);
      }
    });

    const data = {
      text : 'FAKE TEXT',
      userName: 'FAKE USERNAME',
      timestamp: Date.now(),
      avatar:  'FAKE AVATAR'
    };

    props.userSendMessage(data);
    socketObserver.send(data);
  }

  render(){
    return <div className='chat_box_container'>
      <Title userName="FAKE USER NAME"/>
      <MessageList/>
      <SendMessage/>
    </div>
  }
};

const mapDispatchToProps = dispatch => {
  return {
    userSendMessage: (data) => dispatch(messageSend(data)),
  };
};

const mapStateToProps = state => {
  return {
    chatData: state
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatRoom);