import React, {Component} from 'react';

class ChatSendMessage extends Component {

  render() {
    return (
      <div className="SendBar">
        <input
          type="text"
          placeholder="Type a message..."
          />
        <div>Send</div>
      </div>
    );
  }
}

export default ChatSendMessage;
