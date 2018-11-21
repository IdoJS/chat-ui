import React from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash/debounce';

const ENTER_KEY = 'Enter';


class SendMessage extends React.PureComponent {

  state = {
    inputMessage: ''
  };

  constructor(props) {
    super(props);

    this.onTextChange = this.onTextChange.bind(this);
    this.sendButton = this.sendButton.bind(this);
    this.sendEnter = this.sendEnter.bind(this);
    this.debounceTyping = debounce(this.onMessageTyping.bind(this), 500);
  }

  onTextChange(ev) {
    this.setState({
      [ev.target.name]: ev.target.value
    });

    this.debounceTyping();
  }

  onMessageTyping() {
    this.props.onMessageTyping && this.props.onMessageTyping(this.state.inputMessage.length !== 0);
  }

  sendEnter(ev) {
    if (ev.key === ENTER_KEY) {
      this.onSend()
    }
  }

  sendButton() {
    this.onSend()
  }

  onSend() {
    this.props.onMessageSend && this.props.onMessageSend({text: this.state.inputMessage});

    this.setState({
      inputMessage: ''
    });
  }

  render() {
    return (
      <div className='send_box' key={0}>
        <input className='primary_input' disabled={this.props.isLoading} name='inputMessage' type='input'
               onKeyPress={this.sendEnter}
               onChange={this.onTextChange} placeholder={this.props.isLoading ? 'Please wait...' : 'Type message...'}
               value={this.state.inputMessage}/>
        <button className='secondary_button' disabled={this.state.inputMessage.length === 0} onClick={this.sendButton}>
          send
        </button>
      </div>
    )
  }
}

SendMessage.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  onMessageSend: PropTypes.func.isRequired,
  onMessageTyping: PropTypes.func.isRequired
};

SendMessage.defaultProps = {
  isLoading: false,
  userName: '',
  onMessageSend: () => {
    console.warn('Please pass onMessageSend as prop')
  },
  onMessageTyping: () => {
    console.warn('Please pass onMessageTyping as prop')
  },
};

export default SendMessage;