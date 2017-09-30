import React, {Component} from 'react';
import AddressAutoComplete from '../containers/AddressAutoComplete';

class NeighborsSearch extends Component {

  handleFormSubmit = (e) => {
    e.preventDefault();
    if (this.input.state.address === '') return;
    this.props.handleSearch(this.input.state.address);
  }

  render() {
    return (
      <div className="NeighborsSearch">
        <p>Check who is active in your building:</p>
        <form onSubmit={this.handleFormSubmit}>
          <div id="SearchContainer">
            <div id="InputContainer">
              <AddressAutoComplete ref={(input) => this.input = input} height="30px"/>
            </div>
            <button type="submit" id="SearchButton">Search</button>
          </div>
        </form>
      </div>
    );
  }

}

export default NeighborsSearch;
