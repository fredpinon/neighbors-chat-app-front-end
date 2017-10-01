import React, {Component} from 'react';

import { connect } from 'react-redux';
import { broadcastMessage } from '../actions/socketActions';

import '../css/Chat.css';
import ChatMessages from './ChatMessages';
import ChatSendMessage from './ChatSendMessage';

class ChatInteractions extends Component {

  sendMessage = (msg) => {
    const {address, username, fname, lname} = this.props.userInfo.details;
    const payload = {address, username, fname, lname, msg};
    this.props.dispatchSocketMessage(payload);
  }

  render() {
    return (
      <div className="ChatInteractions">
        <ChatMessages/>
        <ChatSendMessage sendMessage={this.sendMessage}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userInfo: state.user,
  conversation: state.messages,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchSocketMessage: data => dispatch(broadcastMessage(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatInteractions);
