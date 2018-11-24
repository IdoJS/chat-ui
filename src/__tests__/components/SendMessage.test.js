import React from 'react';
import {shallow, mount} from 'enzyme';
import renderer from 'react-test-renderer';

import SendMessage from '../../../src/components/SendMessage';
import {MOCK_USER_NAME} from '../../__mocks__/mockData';

describe('SendMessage component', () => {

  it('Should render the SendMessage view && isLoading is false', () => {
    const wrapper = shallow(<SendMessage isLoading={false} userName={MOCK_USER_NAME}
                                         onMessageSend={() => {
                                         }}
                                         onMessageTyping={() => {
                                         }}/>);

    expect(wrapper.find('.chat_send')).toHaveLength(1);
  });


  it('Enable input when props.loading false', () => {
    const wrapper = shallow(<SendMessage isLoading={false} userName={MOCK_USER_NAME}
                                         onMessageSend={() => {
                                         }}
                                         onMessageTyping={() => {
                                         }}/>);
    const input = wrapper.find('input');
    expect(input.props()['disabled']).toBeFalsy();
    expect(input.props()['placeholder']).toMatch('Type message...');
  });

  it('When props.loading false : disable input and apply placeHolder', () => {
    const wrapper = shallow(<SendMessage isLoading={true} userName={MOCK_USER_NAME}
                                         onMessageSend={() => {
                                         }}
                                         onMessageTyping={() => {
                                         }}/>);
    const input = wrapper.find('input');
    expect(input.props()['disabled']).toBeTruthy();
    expect(input.props()['placeholder']).toMatch('Please wait...');
  });

  it('disable button if input field is empty', () => {
    const wrapper = shallow(<SendMessage isLoading={true} userName={MOCK_USER_NAME}
                                         onMessageSend={() => {
                                         }}
                                         onMessageTyping={() => {
                                         }}/>);
    const btn = wrapper.find('button');

    expect(btn.props().disabled).toBeTruthy();
  });

  it('enable button if input field is not empty', () => {
    const wrapper = mount(<SendMessage isLoading={false} userName={MOCK_USER_NAME}
                                       onMessageSend={() => {
                                       }}
                                       onMessageTyping={() => {
                                       }}/>);
    const btn = wrapper.find('button');
    const input = wrapper.find('input');
    const msg = 'test';

    input.simulate('change', {
      target: {
        value: msg,
        name: 'inputMessage'
      }
    });

    expect(btn.html()).toBe('<button class="ui primary button">send</button>');
  });

  it('Simulate send via button', () => {
    const msg = 'test';
    const onMessageSend = jest.fn();

    const wrapper = mount(<SendMessage isLoading={false} userName={MOCK_USER_NAME}
                                       onMessageSend={onMessageSend}
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

    btn.simulate('click', {
      preventDefault: () => {
      }
    });

    expect(onMessageSend).toHaveBeenCalledWith({'text': msg});
  });

  it('Simulate send via Enter Key', () => {
    const msg = 'test';
    const onMessageSend = jest.fn();

    const wrapper = mount(<SendMessage isLoading={false} userName={MOCK_USER_NAME}
                                       onMessageSend={onMessageSend}
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
      key: 'Enter'
    });

    expect(onMessageSend).toHaveBeenCalledWith({'text': msg});
  });

  it('Clear input field after message is sent', () => {
    const msg = 'test';

    const wrapper = mount(<SendMessage isLoading={false} userName={MOCK_USER_NAME}
                                       onMessageSend={() => {
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
      key: 'Enter'
    });

    expect(input.props().value).toBe('');
  });

  it('Test onMessageTyping - pass true when text in input', (done) => {
    const msg = 'test';
    const onMessageTyping = jest.fn();

    const wrapper = mount(<SendMessage isLoading={false} userName={MOCK_USER_NAME}
                                       onMessageSend={() => {
                                       }}
                                       onMessageTyping={onMessageTyping}/>);

    const input = wrapper.find('input');


    input.simulate('change', {
      target: {
        value: msg,
        name: 'inputMessage'
      }
    });

    setTimeout(() => {
      expect(onMessageTyping).toHaveBeenCalledWith(true);
      done();
    }, 500);
  });

  it('Test onMessageTyping - pass false when no text in input', (done) => {
    const onMessageTyping = jest.fn();

    const wrapper = mount(<SendMessage isLoading={false} userName={MOCK_USER_NAME}
                                       onMessageSend={() => {
                                       }}
                                       onMessageTyping={onMessageTyping}/>);

    const input = wrapper.find('input');


    input.simulate('change', {
      target: {
        value: '',
        name: 'inputMessage'
      }
    });

    setTimeout(() => {
      expect(onMessageTyping).toHaveBeenCalledWith(false);
      done();
    }, 500);
  });

  it('SnapShot rendering SendMessage', () => {
    const wrapper = shallow(<SendMessage/>);
    const tree = renderer.create(wrapper).toJSON();
    expect(tree).toMatchSnapshot();
  });

});