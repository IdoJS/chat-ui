import React from 'react';
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';
import {MOCK_USER_NAME, MOCK_SELF_MESSAGE, MOCK_OTHER_MESSAGE} from '../../__mocks__/mockData';

import MessageListItem from '../../../src/components/MessageList/MessageListItem';

describe('MessageListItem component', () => {
  it('Should render the MessageListItem view', () => {

    const wrapper = shallow(<MessageListItem currentUser={MOCK_USER_NAME} currentUserId={'0'} data={MOCK_SELF_MESSAGE}/>);
    const p = wrapper.find('p');

    expect(p.text()).toEqual(MOCK_SELF_MESSAGE.text);
    expect(p.hasClass('chat_item_msg_user')).toBeTruthy();

  });

  it('Should render the MessageListItem view', () => {

    const wrapper = shallow(<MessageListItem currentUser={MOCK_USER_NAME} currentUserId={'0'} data={MOCK_OTHER_MESSAGE}/>);
    const p = wrapper.find('p');

    expect(p.text()).toEqual(MOCK_OTHER_MESSAGE.text);
    expect(p.hasClass('chat_item_msg_default')).toBeTruthy();

  });

  it('SnapShot rendering MessageListItem', () => {
    const wrapper = shallow(<MessageListItem currentUser={MOCK_USER_NAME} currentUserId={'0'} data={MOCK_SELF_MESSAGE}/>);
    const tree = renderer.create(wrapper).toJSON();
    expect(tree).toMatchSnapshot();
  });

});