import React, {Component} from 'react';
import { withRouter, Switch, Route } from 'react-router';

import { connect } from 'react-redux';

import '../css/Main.css';
import HomePage from '../containers/HomePage';
import SignUpPageContainer from './SignUpPageContainer';
import LoginPageContainer from './LoginPageContainer';
import ChatContainer from './ChatContainer';
import PrivateRoute from '../components/PrivateRoute';

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
          <Route
            path='/login'
            component={LoginPageContainer}
            />
          <PrivateRoute
            token={this.props.userInfo.token}
            userInfo={this.props.userInfo}
            path="/chat"
            component={ChatContainer}
          />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  userInfo: state.user,
});

const mapDispatchToProps = (dispatch) => ({});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
