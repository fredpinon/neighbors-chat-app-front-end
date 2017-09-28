import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import '../css/NavBar.css';
import NavBarButtons from '../containers/NavBarButtons';

class NavBar extends Component {
  render() {
    return (
      <div className="NavBar">
        <div className="Logo">
          <Link to='/'>Bubble</Link>
        </div>
        <NavBarButtons/>
      </div>
    );
  }
}

export default NavBar;
