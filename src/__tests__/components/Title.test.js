import React from 'react';
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';
import {MOCK_USER_NAME} from '../../__mocks__/mockData';

import Title from '../../../src/components/Title';

describe('Title component', () => {
  it('Should render the Title view', () => {

    const wrapper = shallow(<Title userName={MOCK_USER_NAME}/>);
    const title = wrapper.find('h2');

    expect(title).toHaveLength(1);

  });

  it('SnapShot rendering ChatRoom', () => {
    const wrapper = shallow(<Title userName={MOCK_USER_NAME}/>);
    const tree = renderer.create(wrapper).toJSON();
    expect(tree).toMatchSnapshot();
  });

});