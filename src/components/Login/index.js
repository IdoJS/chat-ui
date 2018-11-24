import React from 'react';
import PropTypes from 'prop-types';


class Login extends React.PureComponent {

  static propTypes = {
    onUserCreate: PropTypes.func.isRequired
  };

  static defaultProps = {
    onUserCreate: () => {
      console.warn('Please implement onUserCreate');
    }
  };

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

  generateAvarList(){
    return [...Array(5).keys()].map((index) => (
      <li key={index} className='ui image label'>
        <input type='radio' className='radio' name='avatar' id={`avatar_img0${index + 1}`}/>
        <div className={`avatar avatar_img0${index + 1}`}></div>
      </li>
    ));
  }

  render() {
    return <form className='ui form' key={0}>
      <h1 className='ui large header'>Login</h1>
      <div className='field'>
        <label>Please enter userName</label>
        <div className='ui left icon input'>
          <input type='text'
                 className='ui input'
                 name='userName'
                 placeholder='Type name here...'
                 value={this.state.userName}
                 onChange={this.onTextChange}/>
          <i className='user circle icon'></i>
        </div>
      </div>

      <div className='field'>
        <label>Please choose avatar</label>
        <div className='ui list'>
          <ul className='form_radio_group' onChange={this.onAvatarChange.bind(this)}>
            {this.generateAvarList()}
          </ul>
        </div>
      </div>

      <button className='ui primary button' onClick={this.submit}>Submit</button>
    </form>
  }
};


export default Login;