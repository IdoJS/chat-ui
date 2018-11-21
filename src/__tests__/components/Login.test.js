import React from 'react';
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';

import Login from '../../../src/components/Login';
import {MOCK_USER_NAME, MOCK_AVATAR_CLASS} from '../../__mocks__/mockData';

describe('Login component', () => {
  const ev = {
    preventDefault: () => {
    }
  };

  const evUserName = Object.assign({}, ev, {
    target: {
      value: MOCK_USER_NAME,
      name: 'userName'
    }
  });

  const evAvatar = Object.assign({}, ev, {
    target: {
      id: MOCK_AVATAR_CLASS,
      checked: true
    }
  });

  it('Should render the login view', (done) => {

    const wrapper = shallow(<Login onUserCreate={({userName, avatarClass}) => {
      expect(userName).toEqual(MOCK_USER_NAME);
      expect(avatarClass).toEqual(MOCK_AVATAR_CLASS);
      done()
    }}/>);

    const input = wrapper.find('input[type="text"]');
    const radioGroup = wrapper.find('div.avatar_radio_group');
    const radioButtons = radioGroup.find('input');
    const btn = wrapper.find('button');

    input.simulate('change', evUserName);

    expect(radioButtons).toHaveLength(5);

    radioGroup.simulate('change', evAvatar);

    btn.simulate('click', ev);
  });

  it('SnapShot rendering Login', () => {
    const wrapper = shallow(<Login/>);
    const tree = renderer.create(wrapper).toJSON();
    expect(tree).toMatchSnapshot();
  });

});