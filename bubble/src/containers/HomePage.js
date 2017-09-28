import React, {Component} from 'react';
// import CircularProgress from 'material-ui/CircularProgress';
// import NeighborsSearchComponent from '../components/NeighborsSearchComponent';
// import { searchNeighbors } from '../serverApi';
// import { connect } from 'react-redux';

class HomePage extends Component {

  // state = {
  //   renderProgress: null,
  //   activeNeighbors: null,
  //   showResults: false,
  // }

  // componentWillMount () {
  //   if (this.props.userInfo.token) this.props.history.push('chat');
  // }
  //
  // handleSearch = (address) => {
  //   this.setState({showResults:false});
  //   searchNeighbors(address)
  //   .then(data => data.json())
  //   .then(data => {
  //     this.setState({activeNeighbors:data});
  //     this.setState({renderProgress:true});
  //   });
  // }

  // renderProgress = () => {
  //   setTimeout(() => {
  //     this.setState({renderProgress:null});
  //     this.setState({showResults:true});
  //   }, 3000);
  //   return (
  //     <div id="progress">
  //       <CircularProgress />
  //       <p>searching ...</p>
  //     </div>
  //   );
  // }

  // renderResults = () => {
  //   const { activeNeighbors } = this.state;
  //   const s = activeNeighbors > 1 ? 's' : '';
  //   const answer = activeNeighbors === 0 ?
  //     `You don't have any active neighbors ... :(` :
  //     `You have ${this.state.activeNeighbors} active neighbor${s}!`;
  //   return (
  //     <div id="results">
  //       <p>{answer}</p>
  //     </div>
  //   );
  // }

  render() {
    return (
      <div className="HomePage">
        
      </div>

    );
  }
}

// <p>Welcome to Bubble! Sign up and start meeting your neighbors</p>
// <NeighborsSearchComponent handleSearch={this.handleSearch}/>
// {this.state.renderProgress !== null ? this.renderProgress() : ' '}
// {this.state.showResults === true ? this.renderResults() : ' '}
export default HomePage;
