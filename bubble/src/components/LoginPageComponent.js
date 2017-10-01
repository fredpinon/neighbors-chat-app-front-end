import React, {Component} from 'react';
import CircularProgress from 'material-ui/CircularProgress';

import '../css/LoginPage.css';

class LoginPageComponent extends Component {

  captureInfo = (e) => {
    e.preventDefault();
    const info = {
      username: this.username.value,
      password: this.password.value,
    }
    this.props.logIn(info);
  }

  renderProgress = () => {
    return (
      <div className="Progress">
        <CircularProgress />
        <p>logging in ...</p>
      </div>
    );
  }

  render() {
    return (
      <div className="LogInPageComponent">
          <p id="LoginP">Log In to Bubble</p>
          <form className="LoginForm" onSubmit={this.captureInfo}>
            <input
              ref={input => this.username = input}
              type="text"
              placeholder="user name…"
              required
              />
            <input
              ref={input => this.password = input}
              type="password"
              placeholder="password…"
              required
              />
            <button type="submit" id="LoginButton">Log In</button>
          </form>
          <div className="alerts">
            <p id="errorAlert">{this.props.wrongCredentials === true ? 'email or password do not match, please try again' : ' '}</p>
            {this.props.renderProgress !== false ? this.renderProgress() : ' '}
          </div>
      </div>
    );
  }
}

export default LoginPageComponent;
