import React from 'react';
import PropTypes from 'prop-types';

const SendMessage = () => {
  return (
    <div className='send_box'>
      <input className='primary_input' name='inputMessage' type='input'/>
      <button className='secondary_button'>
        send
      </button>
    </div>
  )
};

export default SendMessage;