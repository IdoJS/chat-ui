import React from 'react';
import PropTypes from 'prop-types';

const Title = (props) => {
  return <h1 key={0} className="secondary_title">Hello {props.userName}</h1>;
};

Title.propTypes = {
  userName : PropTypes.string.isRequired
};

Title.defaultProps = {
  userName : ''
};

export default Title