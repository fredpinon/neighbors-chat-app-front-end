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

  render() {
    return (
      <div className="MessagesContainer">
        <div className="Messages" ref={(el) => this.el = el}>
          {this.renderMessages()}
        </div>
        <div className="IsTypingContainer">
          <div className="isTyping"></div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.users,
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Messages);
