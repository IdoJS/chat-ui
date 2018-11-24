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

  it('Should render the login view', () => {
    const wrapper = shallow(<Login onUserCreate={() => {
    }}/>);
    const form = wrapper.find('.form');
    expect(form).toHaveLength(1);
  });

  it('Test onUserCreate', () => {
    const onUserCreate = jest.fn();
    const wrapper = shallow(<Login onUserCreate={onUserCreate}/>);

    const input = wrapper.find('input[type="text"]');
    const radioGroup = wrapper.find('ul.form_radio_group');
    const radioButtons = radioGroup.find('input');
    const btn = wrapper.find('button');

    input.simulate('change', evUserName);

    expect(radioButtons).toHaveLength(5);

    radioGroup.simulate('change', evAvatar);

    btn.simulate('click', ev);

    expect(onUserCreate).toHaveBeenCalledWith({userName: MOCK_USER_NAME, avatarClass: MOCK_AVATAR_CLASS})
  });

  it('SnapShot rendering Login', () => {
    const wrapper = shallow(<Login/>);
    const tree = renderer.create(wrapper).toJSON();
    expect(tree).toMatchSnapshot();
  });

});