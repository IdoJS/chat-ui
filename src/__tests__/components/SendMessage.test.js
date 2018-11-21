import React from 'react';
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';

import SendMessage from '../../../src/components/SendMessage';

describe('SendMessage component', () => {

  const mockUserName = 'mockUserName';

  it('Should render the SendMessage view && isLoading is false', () => {
    const wrapper = shallow(<SendMessage isLoading={false} userName={mockUserName}
                                         onMessageSend={() => {
                                         }}
                                         onMessageTyping={() => {
                                         }}/>);
    const btn = wrapper.find('button');
    const input = wrapper.find('input');

    const msg = 'test';

    expect(btn).toHaveLength(1);
    expect(input).toHaveLength(1);

    expect(btn.props()['disabled']).toBe(true); // no text in input
    expect(input.props()['disabled']).toBe(false); // isloading === false
    expect(input.props()['placeholder']).toMatch('Type message...'); // isloading === false

    input.simulate('change', {
      target: {
        value: msg,
        name: 'inputMessage'
      }
    });

    expect(wrapper.instance().state.inputMessage).toEqual(msg);

  });

  it('Should render the SendMessage view && isLoading is true', () => {
    const wrapper = shallow(<SendMessage isLoading={true} userName={mockUserName}
                                         onMessageSend={() => {
                                         }}
                                         onMessageTyping={() => {
                                         }}/>);
    const btn = wrapper.find('button');
    const input = wrapper.find('input');

    expect(btn.props()['disabled']).toBe(true); // no text in input
    expect(input.props()['disabled']).toBe(true); // isloading === true
    expect(input.props()['placeholder']).toMatch('Please wait...'); // isloading === true


  });

  it('Simulate send via button', (done) => {
    const msg = 'test';

    const wrapper = shallow(<SendMessage isLoading={false} userName={mockUserName}
                                         onMessageSend={(data) => {
                                           expect(data).toMatchObject({'text': msg});
                                           done();
                                         }}
                                         onMessageTyping={() => {
                                         }}/>);
    const btn = wrapper.find('button');
    const input = wrapper.find('input');


    input.simulate('change', {
      target: {
        value: msg,
        name: 'inputMessage'
      }
    });


    btn.simulate('click',{
      preventDefault: () => {
      }
    });

  });

  it('Simulate send via Enter Key', (done) => {
    const msg = 'test';

    const wrapper = shallow(<SendMessage isLoading={false} userName={mockUserName}
                                         onMessageSend={(data) => {
                                           expect(data).toMatchObject({'text': msg});
                                           done();
                                         }}
                                         onMessageTyping={() => {
                                         }}/>);
    const input = wrapper.find('input');

    input.simulate('change', {
      target: {
        value: msg,
        name: 'inputMessage'
      }
    });

    input.simulate('keyPress', {
      key : 'Enter'
    })

  });

  it('SnapShot rendering SendMessage', () => {
    const wrapper = shallow(<SendMessage/>);
    const tree = renderer.create(wrapper).toJSON();
    expect(tree).toMatchSnapshot();
  });

});