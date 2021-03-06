import React, {Component} from 'react';

import { connect } from 'react-redux';
import { userLoggedIn } from '../actions';
import { socketConnect, socketGetMessages } from '../actions/socketActions';

import LogInPageComponent from '../components/LoginPageComponent';
import { loginUserServerApi } from '../serverApi';

class LoginPageContainer extends Component {

  state = {
    wrongCredentials: false,
    renderProgress: false,
  }

  componentWillMount () {
    if (this.props.userInfo.token) this.props.history.push('chat');
  }

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
      else {
        const address = data.details.address;
        this.props.dispatchUserInfo(data);
        this.props.dispatchSocketConnect(data);
        this.props.dispatchSocketGetMessages(address);
        this.props.history.push('chat');
      }
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

const mapStateToProps = (state) => ({
  userInfo: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchUserInfo: data => dispatch(userLoggedIn(data)),
  dispatchSocketConnect: data => dispatch(socketConnect(data)),
  dispatchSocketGetMessages: data => dispatch(socketGetMessages(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPageContainer);
