import React, {Component} from 'react';

class ChatSendMessage extends Component {

  captureMessageEnter = (e) => {
    if(e.key !== 'Enter') return;
    this.captureMessage();
  }

  captureMessage = () => {
    if (this.message.value === '') return;
    this.props.sendMessage(this.message.value);
    this.message.value = '';
    // const {username, firstname, lastname, address} = this.props.userInfo.details;
    // this.props.dispatchStopedTyping(username, firstname, lastname, address);
  }

  render() {
    return (
      <div className="SendBar">
        <input
          ref={input => this.message = input}
          type="text"
          placeholder="Type a message..."
          onKeyPress={this.captureMessageEnter}
          />
        <div onClick={this.captureMessage} onKeyPress={this.captureMessageEnter}>Send</div>
      </div>
    );
  }
}

export default ChatSendMessage;
