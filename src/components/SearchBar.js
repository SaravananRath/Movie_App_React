import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    }
  }

  handleChange = (e) => {
    this.setState({ search: e.target.value })
  }



 

  render() {

    return (
      
    <div style={divStyle}>
      <h2>HOLLYWOOD MOVIE </h2>
      <p>
      <input type="text" name="name" onChange={this.handleChange}/></p>
     <p> <Link to={`result/${this.state.search}`}>SEARCH</Link></p>
    </div>
      )
  }
}


const divStyle = {
  marginTop:'5%',
  padding: '70px 0',
  // border:' 3px solid green',
  textAlign:' center',


};