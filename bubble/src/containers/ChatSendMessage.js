import React, {Component} from 'react';
import { connect } from 'react-redux';

import { broadcastIsTyping, broadcastStoppedTyping } from '../actions/socketActions';

class ChatSendMessage extends Component {

  captureMessageEnter = (e) => {
    if(e.key !== 'Enter') return;
    this.captureMessage();
  }

  captureMessage = () => {
    if (this.message.value === '') return;
    this.props.sendMessage(this.message.value);
    this.message.value = '';
    const {username, fname, lname, address} = this.props.userInfo.details;
    const payload = {username, fname, lname, address};
    this.props.dispatchSocketStoppedTyping(payload);
  }

  emitTyping = () => {
  const {username, fname, lname, address} = this.props.userInfo.details;
  const payload = {username, fname, lname, address};
  if (this.message.value.length === 0) {
    this.props.dispatchSocketStoppedTyping(payload);
  } else {
      this.props.dispatchSocketIsTyping(payload);
    }
  }

  render() {
    return (
      <div className="SendBar">
        <input
          type="text"
          ref={input => this.message = input}
          placeholder="Type a message..."
          onKeyPress={this.captureMessageEnter}
          onChange={this.emitTyping}
          />
        <div onClick={this.captureMessage} onKeyPress={this.captureMessageEnter}>Send</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userInfo: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchSocketIsTyping: data => dispatch(broadcastIsTyping(data)),
  dispatchSocketStoppedTyping: data => dispatch(broadcastStoppedTyping(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatSendMessage);
