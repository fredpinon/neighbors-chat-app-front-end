import React, {Component} from 'react';
import User from './User';
import _ from 'underscore';

class ChatUsersList extends Component {
  renderUsers = () => {
    let usersObj = this.props.users;
    return _
    .reduce(usersObj, (accum, val) => {
      accum.push(val);
      return accum;
    }, [])
    .filter(item => {
      if (item.username !== this.props.user.details.username) return item;
      else return null;
    })
    .sort((a,b) => (a.online === b.online) ? 0 : a.online ? -1 : 1)
    .map((item, i) => <User info={item} key={i}/>);
  }

  render() {
    return (
      <div className="UsersList">
        {this.renderUsers()}
      </div>
    );
  }
}

export default ChatUsersList;
