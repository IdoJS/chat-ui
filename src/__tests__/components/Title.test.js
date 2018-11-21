import React from 'react';
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';

import Title from '../../../src/components/Title';

describe('Title component', () => {
  const mockUserName = 'mockUserName';

  it('Should render the Title view', () => {

    const wrapper = shallow(<Title userName={mockUserName}/>);
    const title = wrapper.find('h1');

    expect(title).toHaveLength(1);

  });

  it('SnapShot rendering ChatRoom', () => {
    const wrapper = shallow(<Title userName={mockUserName}/>);
    const tree = renderer.create(wrapper).toJSON();
    expect(tree).toMatchSnapshot();
  });

});