import React from 'react';
import PropTypes from 'prop-types';

const Title = (props) => {
  return <h2 className='ui dividing header chat_title'>
    Hello {props.userName}
  </h2>;

};


Title.propTypes = {
  userName: PropTypes.string.isRequired
};

Title.defaultProps = {
  userName: ''
};

export default Title