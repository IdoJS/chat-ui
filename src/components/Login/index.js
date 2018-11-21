import React from 'react';
import PropTypes from 'prop-types';


class Login extends React.PureComponent {
  state = {
    avatarClass: '',
    userName: ''
  };

  constructor(props) {
    super(props);

    this.submit = this.submit.bind(this);
    this.onTextChange = this.onTextChange.bind(this);
    this.onAvatarChange = this.onAvatarChange.bind(this)
  }

  render() {
    return <form className="form" key={0}>
      <h1 className="primary_title">Login</h1>
      <div className="form_row">
        <h2 className="secondary_title">Please enter userName</h2>
        <input type="text" className="primary_input" name="userName" value={this.state.userName} onChange={this.onTextChange}/>
      </div>
      <div className="form_row">
        <h2 className="secondary_title">Please choose avatar</h2>
        <div className="avatar_radio_group" onChange={this.onAvatarChange.bind(this)}>
          <input type="radio" className="avatar_radio" name="avatar" id="avatar_img01"/> <div className="avatar_img01"></div>
          <input type="radio" className="avatar_radio" name="avatar" id="avatar_img02"/> <div className="avatar_img02"></div>
          <input type="radio" className="avatar_radio" name="avatar" id="avatar_img03"/> <div className="avatar_img03"></div>
          <input type="radio" className="avatar_radio" name="avatar" id="avatar_img04"/> <div className="avatar_img04"></div>
          <input type="radio" className="avatar_radio" name="avatar" id="avatar_img05"/> <div className="avatar_img05"></div>
        </div>
      </div>
      <button className="primary_button big" onClick={this.submit}>Submit</button>
    </form>
  }

  onAvatarChange(ev) {
    this.setState({
      avatarClass: ev.target.id
    })
  }

  onTextChange(ev) {
    this.setState({
      [ev.target.name]: ev.target.value
    });
  }

  submit(ev) {
    ev.preventDefault();
    this.props.onUserCreate({
      userName: this.state.userName,
      avatarClass: this.state.avatarClass
    })
  }
};


Login.propTypes = {
  onUserCreate : PropTypes.func.isRequired
};

Login.defaultProps = {
  onUserCreate : () => {
    console.warn('Please implement onUserCreate');
  }
};

export default Login;