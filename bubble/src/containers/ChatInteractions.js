import React, {Component} from 'react';

import { connect } from 'react-redux';

import '../css/Chat.css';
import ChatMessages from './ChatMessages';
import ChatSendMessage from './ChatSendMessage';

class ChatInteractions extends Component {

  render() {
    return (
      <div className="ChatInteractions">
        <ChatMessages/>
        <ChatSendMessage/>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatInteractions);
