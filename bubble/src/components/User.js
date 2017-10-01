import React, {Component} from 'react';

class User extends Component {

  renderOnline () {
    const { online } = this.props.info;
    if (online) return <div className="online"></div>
    else return <div className="offline"></div>
  }

  renderUser () {
    const style = {'backgroundColor': this.props.info.avatar_color};
    const {fname, lname, flat, initials} = this.props.info;
    return (
      <div className="userDetails">
        <div className="pic" style={style}>{initials} </div>
        <div className="name">
          <p>{fname} {lname} <span>from</span> {flat}</p>
        </div>
        {this.renderOnline()}
      </div>
    )
  }

  render () {
    return (
      <div className="User">
        {this.renderUser()}
      </div>
    );
  }
}

export default User;
