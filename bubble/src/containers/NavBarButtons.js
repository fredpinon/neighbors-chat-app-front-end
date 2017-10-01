import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { userLoggedOut } from '../actions';

import { logoutUser } from '../serverApi';

class NavBarButtons extends Component {

  handleLogout = (e) => {
    e.preventDefault();
    logoutUser(this.props.userInfo.details.username)
    .then(data => data.json())
    .then(data => {
      this.props.dispatchLogOut(this.props.userInfo);
    });
  }

  renderButtons = () => {
    return this.props.userInfo.token ? (
      <div className="NavBarButtons">
        <div className="LogButtons">
          <a onClick={this.handleLogout}>Log Out</a>
        </div>
        <div className="ProfileButtons">
          <a>Delete Account</a>
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
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBarButtons);
