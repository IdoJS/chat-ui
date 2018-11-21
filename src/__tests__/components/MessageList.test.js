import React from 'react';
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';
import {MOCK_USER_NAME, MOCK_CHAT_DATA_INIT} from '../../__mocks__/mockData';

import MessageList from '../../../src/components/MessageList';

describe('MessageList component', () => {
  it('Should render the MessageList view', () => {

    const wrapper = shallow(<MessageList currentUser={MOCK_USER_NAME} chatData={MOCK_CHAT_DATA_INIT}/>);
    const li = wrapper.find('li');

    expect(li).toHaveLength(0);

  });

  it('SnapShot rendering MessageList', () => {
    const wrapper = shallow(<MessageList currentUser={MOCK_USER_NAME} chatData={MOCK_CHAT_DATA_INIT}/>);
    const tree = renderer.create(wrapper).toJSON();
    expect(tree).toMatchSnapshot();
  });

});