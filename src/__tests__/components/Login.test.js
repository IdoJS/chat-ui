import React from 'react';
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';

import Login from '../../../src/components/Login';

describe('App component', () => {

  const textValue = 'mockTest';
  const radioValue = 'mockAvatar';

  const ev = {
    preventDefault: () => {
    }
  };

  const evUserName = Object.assign({}, ev, {
    target: {
      value: textValue,
      name: 'userName'
    }
  });

  const evAvatar = Object.assign({}, ev, {
    target: {
      id: radioValue,
      checked: true
    }
  });

  it('Should render the login view', (done) => {

    const wrapper = shallow(<Login onUserCreate={({userName, avatarClass}) => {
      expect(userName).toEqual(textValue);
      expect(avatarClass).toEqual(radioValue);
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