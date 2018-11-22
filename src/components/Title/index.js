import React from 'react';
import PropTypes from 'prop-types';

const Title = (props) => {
  return <h2 className="ui dividing header chat_title blue">
    <div className="content">
      <span className={`chat_title_img avatar ${props.avatarClass}`}/>
      <span>{props.userName}</span>
    </div>
</h2>
};

Title.propTypes = {
  userName: PropTypes.string.isRequired,
  avatarClass: PropTypes.string.isRequired
};

Title.defaultProps = {
  userName: '',
  avatarClass:''
};

export default Title