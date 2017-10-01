import React, {Component} from 'react';
import CircularProgress from 'material-ui/CircularProgress';

import '../css/SignUpPage.css';
import AddressAutoComplete from '../containers/AddressAutoComplete';

class SignUpPageComponent extends Component {

  captureInfo = (e) => {
    e.preventDefault();
    const info = {
      fname: this.firstname.value,
	    lname: this.lastname.value,
	    username: this.username.value,
	    password: this.password.value,
	    address: this.address.state.address,
	    flat: this.flat.value
    }
    this.props.signUp(info);
  }

  renderProgress = () => {
    return (
      <div className="Progress">
        <CircularProgress />
        <p>signing up ...</p>
      </div>
    );
  }

  render() {
    return (
      <div className="SignUpPageComponent">
        <p id="SignUpP">Sign up to Bubble</p>
        <form className="SignUpForm" onSubmit={this.captureInfo}>
          <input
            ref={input => this.firstname = input}
            type="text"
            placeholder="first name.."
            required
            />
          <input
            ref={input => this.lastname = input}
            type="text"
            placeholder="last name.."
            required
            />
          <input
            ref={input => this.username = input}
            type="text"
            placeholder="user name.."
            required
            />
          <input
            ref={input => this.password = input}
            type="password"
            placeholder="password.."
            required
            />
          <input
            ref={input => this.flat = input}
            type="text"
            placeholder="flat.."
            required
            />
          <AddressAutoComplete
            ref={input => this.address = input}
            />
          <button type="submit" id="SignUpButton">Sign Up</button>
        </form>
        <div className="alerts">
          <p id="duplicateAlert">{this.props.duplicateUserName ? 'this user name already exists, please use a different one' : ' '}</p>
          {this.props.renderProgress !== false ? this.renderProgress() : ' '}
        </div>
      </div>
    );
  }
}

export default SignUpPageComponent;
