import React, {Component} from 'react';
import { connect } from 'react-redux';

class Messages extends Component {

  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  scrollToBottom = () => {
    const scrollHeight = this.el.scrollHeight;
    const height = this.el.clientHeight;
    const maxScrollTop = scrollHeight - height;
    this.el.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
  }

  renderMessage = (msg, i) => {
    if(!this.props.users[msg.from]) return null;
    const { username } = this.props;
    const userColor = {backgroundColor: this.props.color};
    const space = { whiteSpace:'pre' };
    const color = this.props.users[msg.from].avatar_color;
    const neighborColor = {backgroundColor: color};
    if (msg.from === username) return (
      <div style={userColor} key={i} className="userMsg">{msg.msg}</div>
    )
    else return (
      <div key={i} className="neighborsMsg" style={neighborColor}>
        <span style={space}>{msg.name} </span>
        <p>{msg.msg}</p>
      </div>
    )
  }

  renderMessages = () => {
    if(!this.props.messages) return null;
    const { messages } = this.props.messages;
    if (messages === undefined || messages.length === 0) return null;
    return messages.map((msg, i) => this.renderMessage(msg, i));
  }

  renderTyping = () => {
    if(!this.props.isTyping) return null;
    else {
      var str = '';
      var count = 0;
      let obj = this.props.isTyping;
      for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
          if (obj[key] === true) {
            str+=key;
            count++;
            if (count > 0) str+=' & '
          }
        }
      }
    }
    if (count === 0) return '';
    else {
      str = str.trim().substring(0, str.length - 2);
      if (count === 1) return `${str} is typing..`;
      if (count < 4 ) return `${str} are typing..`;
      else return;
    }
  }

  render() {
    return (
      <div className="MessagesContainer">
        <div className="Messages" ref={(el) => this.el = el}>
          {this.renderMessages()}
        </div>
        <div className="IsTypingContainer">
          <div className="isTyping">{this.renderTyping()}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.users,
  isTyping: state.typing,
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Messages);
