import React, {Component} from 'react';

import { connect } from 'react-redux';
import { getUsersList } from '../actions';

import ChatUsersList from '../components/ChatUsersList';
import ChatInteractions from './ChatInteractions';
import { getAllUsers } from '../serverApi';

class ChatContainer extends Component {

  constructor (props) {
    super(props);
    this.fetchAllUsers();
  }

  fetchAllUsers () {
    console.log(this.props.userInfo.details.address);
    getAllUsers(this.props.userInfo.details.address)
    .then(data => data.json())
    .then(data => this.props.dispatchUsersList(data));
  }

  render() {
    return (
      <div className="ChatContainer">
        <ChatUsersList users={this.props.usersInfo} user={this.props.userInfo}/>
        <ChatInteractions/>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userInfo: state.user,
  usersInfo: state.users,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchUsersList: data => dispatch(getUsersList(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatContainer);
