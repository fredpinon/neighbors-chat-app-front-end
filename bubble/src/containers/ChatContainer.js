import React, {Component} from 'react';

import { connect } from 'react-redux';

import ChatUsersList from '../components/ChatUsersList';
import ChatInteractions from './ChatInteractions';

class ChatContainer extends Component {
  render() {
    return (
      <div className="ChatContainer">
        <ChatUsersList users={this.props.users} user={this.props.userInfo}/>
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
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatContainer);
