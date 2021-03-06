import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { userLoggedOut, userDeletedAccount } from '../actions';
import { socketDisconnect, broadcastStoppedTyping } from '../actions/socketActions';

import { logoutUser, deleteUser } from '../serverApi';

class NavBarButtons extends Component {

  handleLogout = (e) => {
    e.preventDefault();
    logoutUser(this.props.userInfo.details.username)
    .then(data => data.json())
    .then(data => {
      const {username, fname, lname, address} = this.props.userInfo.details;
      const payload = {username, fname, lname, address};
      this.props.dispatchSocketStoppedTyping(payload);
      this.props.dispatchSocketDisconnect(this.props.userInfo.details.address);
      this.props.dispatchLogOut(this.props.userInfo);
    });
  }

  handleDeleteUser = (e) => {
    e.preventDefault();
    deleteUser(this.props.userInfo.details.username)
    .then(data => data.json())
    .then(data => {
      const {username, fname, lname, address} = this.props.userInfo.details;
      const payload = {username, fname, lname, address};
      this.props.dispatchSocketStoppedTyping(payload);
      this.props.dispatchSocketDisconnect(this.props.userInfo.details.address);
      this.props.dispatchDeleteUser(this.props.userInfo);
    });
  }

  renderButtons = () => {
    return this.props.userInfo.token ? (
      <div className="NavBarButtons">
        <div className="LogButtons">
          <a onClick={this.handleLogout}>Log Out</a>
        </div>
        <div className="ProfileButtons">
          <a onClick={this.handleDeleteUser}>Delete Account</a>
        </div>
      </div>
    ) : (
      <div className="NavBarButtons">
        <div className="LogButtons">
          <Link to='login'>Log In</Link>
        </div>
        <div className="ProfileButtons">
          <Link to='signup'>Sign Up</Link>
        </div>
      </div>
    )
  }

  render () {
    return (
      <div className="NavBarButtonsContainer">
        {this.renderButtons()}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  userInfo: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchLogOut: data => dispatch(userLoggedOut(data)),
  dispatchDeleteUser: data => dispatch(userDeletedAccount(data)),
  dispatchSocketDisconnect: data => dispatch(socketDisconnect(data)),
  dispatchSocketStoppedTyping: data => dispatch(broadcastStoppedTyping(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBarButtons);
