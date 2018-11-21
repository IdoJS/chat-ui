import React from 'react';
import {getUserName, getAvatarClass, setAvatarClass, setUserName} from '../../utils/storage';
import Login from '../Login';
import ChatRoom from '../../containers/ChatRoom';

class App extends React.PureComponent {

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
    return !this.state.userName || !this.state.avatarClass ?
      (<Login onUserCreate={this.onUserCreate}/>) :
      (<ChatRoom/>);
  }
}

export default App;
