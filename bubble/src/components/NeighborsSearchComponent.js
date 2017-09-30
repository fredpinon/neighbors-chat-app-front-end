import React, {Component} from 'react';
import NeighborsSearchContainer from '../containers/NeighborsSearchContainer';

class NeighborsSearchComponent extends Component {

  handleFormSubmit = (e) => {
    e.preventDefault();
    if (this.input.state.address === '') return;
    this.props.handleSearch(this.input.state.address);
  }

  render() {
    return (
      <div className="NeighborsSearchComponent">
        <p>Check who is active in your building:</p>
        <form onSubmit={this.handleFormSubmit}>
          <div id="SearchContainer">
            <div id="InputContainer">
              <NeighborsSearchContainer ref={(input) => this.input = input} height="30px"/>
            </div>
            <button type="submit" id="SearchButton">Search</button>
          </div>
        </form>
      </div>
    );
  }

}

export default NeighborsSearchComponent;
