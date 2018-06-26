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
       
        <div className="App">
        
  
            <h1>Hollywood Movie:</h1>
            <input type="text" name="name" onChange={this.handleChange} />
            <Link to={`result/${this.state.search}`}>My route</Link>

        </div>
      );
    }
  }