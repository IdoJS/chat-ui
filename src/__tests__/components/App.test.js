import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import App from '../../../src/components/App';
import Login from '../../../src/components/Login';
import {setUserName, setAvatarClass, getUserName, getAvatarClass} from '../../utils/storage';

describe('App component', () => {

  beforeEach(()=>{
    global.localStorage.clear();
  });


  it('Should render the login view when storage is empty', () =>{
    const wrapper = shallow(<App/>);
    const child = wrapper.find(Login);
    expect(child).toHaveLength(1);


  });

  it('SnapShot rendering Login', () => {
    const wrapper = shallow(<App/>);
    const tree = renderer.create(wrapper).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Should render the ChatRoom view when storage is contain userName & avatarClass', () =>{
    setUserName('mockUser');
    setAvatarClass('mockAvatar');

    const instance = shallow(<App/>).instance();
    expect(instance.state.userName).toBe(getUserName());
    expect(instance.state.avatarClass).toBe(getAvatarClass());
  });
});