import React from 'react';

import GiphysIndex from './giphys_index';

class GiphysSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {searchQuery: ""};
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);

  }
  handleChange(e) {
    let searchQuery = e.target.value;
    // console.log("query:", searchQuery);
    this.setState({searchQuery: e.target.value});
  }
  // handleChange(e) {
  // }
  handleClick(e) {
    this.props.fetchSearchGiphys(e.target.value);
  }
  render() {
    return (
      <div className="search-bar" >
        <input onChange={this.handleChange} value={this.state.searchQuery}></input>
        <button onClick={this.handleClick}>Submit</button>
        <GiphysIndex />
      </div>
    );
  }
}

export default GiphysSearch;
