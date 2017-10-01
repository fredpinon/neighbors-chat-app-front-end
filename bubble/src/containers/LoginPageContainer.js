import React, {Component} from 'react';

import LogInPageComponent from '../components/LoginPageComponent';
import { loginUserServerApi } from '../serverApi';

class LoginPageContainer extends Component {

  state = {
    wrongCredentials: false,
    renderProgress: false,
  }

  // componentWillMount () {
  //   if (this.props.userInfo.token) this.props.history.push('chat');
  // }

  loginUser = (info) => {
    this.setState({
      wrongCredentials: false,
      renderProgress: true
    });
    loginUserServerApi(info)
    .then(data => new Promise((resolve, reject) => {
      setTimeout(() => resolve(data), 3000);
    }))
    .then(data => data.json())
    .then(data => {
      this.setState({renderProgress: false});
      if (data === 'wrong credentials') this.setState({wrongCredentials: true});
      else this.props.history.push('chat');
    });
  }

  render() {
    return (
      <LogInPageComponent
        wrongCredentials={this.state.wrongCredentials}
        renderProgress = {this.state.renderProgress}
        logIn={this.loginUser}
      />
    );
  }
}

export default LoginPageContainer;
