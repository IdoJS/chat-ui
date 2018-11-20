import React from 'react';
import PropTypes from 'prop-types';
import {getUserName, getAvatarClass, setAvatarClass, setUserName} from '../../utils/storage';
import Login from '../Login';
import ChatRoom from '../../containers/ChatRoom'
class App extends React.Component {

  state = {
    userName: getUserName(),
    avatarClass: getAvatarClass()
  };

  constructor(props) {
    super(props);

    this.onUserCreate = this.onUserCreate.bind(this);
  }

  onUserCreate({userName, avatarClass}) {
    setUserName(userName);
    setAvatarClass(avatarClass);
    this.setState({
      userName,
      avatarClass
    });
  }

  render() {
    if (!this.state.userName || !this.state.avatarClass) {
      return <Login onUserCreate={this.onUserCreate}/>
    } else {
      return <ChatRoom />
    }
  }
}

export default App;