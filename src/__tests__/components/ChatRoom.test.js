import React from 'react';
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';
import {setAvatarClass, setUserName} from '../../utils/storage';

import ChatRoom from '../../../src/components/ChatRoom';
import Title from '../../../src/components/Title';
import SendMessage from '../../../src/components/SendMessage';
import MessageList from '../../../src/components/MessageList';
import {MOCK_USER_NAME, MOCK_AVATAR_CLASS} from '../../__mocks__/mockData';
describe('ChatRoom component', () => {

  beforeAll(()=>{
    setAvatarClass(MOCK_USER_NAME);
    setUserName(MOCK_AVATAR_CLASS);
  });

  it('Should render the ChatRoom view', () => {
    const wrapper = shallow(<ChatRoom/>);
    const title = wrapper.find(Title);
    const sendMsg = wrapper.find(SendMessage);
    const msgList = wrapper.find(MessageList);

    expect(title).toHaveLength(1);
    expect(sendMsg).toHaveLength(1);
    expect(msgList).toHaveLength(1);

  });

  it('SnapShot rendering ChatRoom', () => {
    const wrapper = shallow(<ChatRoom/>);
    const tree = renderer.create(wrapper).toJSON();
    expect(tree).toMatchSnapshot();
  });

});