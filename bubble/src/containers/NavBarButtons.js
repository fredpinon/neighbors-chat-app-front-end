import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class NavBarButtons extends Component {
  render () {
    return (
      <div className="NavBarButtons">
        <div className="LogButtons">
          <Link to='login'>Log In</Link>
        </div>
        <div className="ProfileButtons">
          <Link to='signup'>Sign Up</Link>
        </div>
      </div>
    )
  }
}

export default NavBarButtons;
