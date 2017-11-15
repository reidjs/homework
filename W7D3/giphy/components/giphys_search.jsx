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
    // console.log(this.props.giphys);
    let searchQuery = e.target.value;
    // console.log("query:", searchQuery);
    this.setState({searchQuery: e.target.value});
  }
  // handleChange(e) {
  // }
  handleClick(e) {
    // console.log(this.state.searchQuery);
    this.props.fetchSearchGiphys(this.state.searchQuery);
  }
  render() {
    return (
      <div className="search-bar" >
        <input onChange={this.handleChange} value={this.state.searchQuery}></input>
        <button onClick={this.handleClick}>Submit</button>
        <GiphysIndex giphys={this.props.giphys}/>
      </div>
    );
  }
}

export default GiphysSearch;
