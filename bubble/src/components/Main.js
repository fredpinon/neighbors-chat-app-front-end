import React, {Component} from 'react';
import { withRouter, Switch, Route } from 'react-router';

import '../css/Main.css';
import HomePage from '../containers/HomePage';
import SignUpPageContainer from '../containers/SignUpPageContainer';

class Main extends Component {
  render () {
    return (
      <div className="Main">
        <Switch>
          <Route
            exact path='/'
            component={HomePage}
            />
          <Route
            path='/signup'
            component={SignUpPageContainer}
            />
        </Switch>
      </div>
    )
  }
}

export default Main;
