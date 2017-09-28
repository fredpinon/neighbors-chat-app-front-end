import React, {Component} from 'react';
import { withRouter, Switch, Route } from 'react-router';

import '../css/Main.css';
import HomePage from '../containers/HomePage';

class Main extends Component {
  render () {
    return (
      <div className="Main">
        <Switch>
          <Route
            exact path='/'
            component={HomePage}
            />
        </Switch>
      </div>
    )
  }
}

export default Main;
