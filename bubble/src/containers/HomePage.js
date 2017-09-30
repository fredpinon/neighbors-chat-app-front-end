import React, {Component} from 'react';
import CircularProgress from 'material-ui/CircularProgress';

import '../css/HomePage.css';
import NeighborsSearch from '../components/NeighborsSearch';
import { searchNeighbors } from '../serverApi';

class HomePage extends Component {

  state = {
    renderProgress: null,
    activeNeighbors: null,
    showResults: false,
  }

  handleSearch = (searchString) => {
    this.setState({
      activeNeighbors: null,
      showResults: false
    });
    this.setState({renderProgress: true});
    searchNeighbors(searchString)
    .then(data => new Promise((resolve, reject) => {
      setTimeout(() => resolve(data), 3000);
    }))
    .then(data => data.json())
    .then(data => {
      this.setState({
        renderProgress: null,
        activeNeighbors: data,
        showResults: true
      });
    });
  }

  renderProgress = () => {
    return (
      <div className="Progress">
        <CircularProgress />
        <p>searching ...</p>
      </div>
    );
  }

  renderResults = () => {
    const { activeNeighbors } = this.state;
    const s = activeNeighbors > 1 ? 's' : '';
    const answer = activeNeighbors === 0 ?
      `You don't have any active neighbors ... :(` :
      `You have ${this.state.activeNeighbors} active neighbor${s}!`;
    return (
      <div id="results">
        <p>{answer}</p>
      </div>
    );
  }

  render() {
    return (
      <div className="HomePage">
        <p id="Welcome">Welcome to Bubble! Sign up and start meeting your neighbors</p>
        <NeighborsSearch handleSearch={this.handleSearch}/>
        {this.state.renderProgress !== null ? this.renderProgress() : ' '}
        {this.state.showResults === true ? this.renderResults() : ' '}
      </div>
    );
  }
}

export default HomePage;
