import React, { Component } from 'react';
import './App.css';
import SearchResult from './components/SearchResult';
import SearchBar from './components/SearchBar'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



class Routing extends Component{

    render(){
      return(
        <Router>
        <div>
          <ul>
       
              <Link to="/">Search</Link>
           
          </ul>
          <hr />
    
      <Route exact path="/" component={SearchBar} />
      <Route path="/result/:movie" component={SearchResult}/> 
        </div>
      </Router>
      )
    }
}


export default Routing;
