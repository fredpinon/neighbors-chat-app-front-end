import React, {Component} from 'react';

import { connect } from 'react-redux';
import { userLoggedIn } from '../actions';
import { socketConnect } from '../actions/socketActions';

import SignUpPageComponent from '../components/SignUpPageComponent';
import { registerNewUser } from '../serverApi';

class SignUpPageContainer extends Component {

  state = {
    duplicateUserName: false,
    renderProgress: false,
  }

  componentWillMount () {
    if (this.props.userInfo.token) this.props.history.push('chat');
  }

  signUpUser = (info) => {
    this.setState({
      duplicateUserName:false,
      renderProgress: true,
    });
    registerNewUser(info)
    .then(data => new Promise((resolve, reject) => {
      setTimeout(() => resolve(data), 3000);
    }))
    .then(data => data.json())
    .then(data => {
      this.setState({renderProgress: false});
      if (data === 'username already exists') this.setState({duplicateUserName: true});
      else {
        this.props.dispatchUserInfo(data);
        this.props.dispatchSocketConnect(data);
        this.props.history.push('chat')
      }
    });
  }

  render() {
    return (
      <SignUpPageComponent
        duplicateUserName={this.state.duplicateUserName}
        renderProgress = {this.state.renderProgress}
        signUp={this.signUpUser}
        />
    );
  }
}

const mapStateToProps = (state) => ({
  userInfo: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchUserInfo: data => dispatch(userLoggedIn(data)),
  dispatchSocketConnect: data => dispatch(socketConnect(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPageContainer);
