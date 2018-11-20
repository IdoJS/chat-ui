import React from 'react';
import PropTypes from 'prop-types';

const Title = (props) => {
  return <h1 className="secondary_title">My Chat Title {props.userName}</h1>;
};

Title.propTypes = {
  userName : PropTypes.string.isRequired
};

Title.defaultProps = {
  userName : ''
};

export default Title