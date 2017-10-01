import React, {Component} from 'react';
import { connect } from 'react-redux';

class Messages extends Component {

  render() {
    return (
      <div className="MessagesContainer">
        <div className="Messages"></div>
        <div className="IsTypingContainer">
          <div className="isTyping"></div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Messages);
