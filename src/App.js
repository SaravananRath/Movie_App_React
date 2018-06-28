import React, { Component } from 'react';
import './App.css';
import SearchResult from './components/SearchResult';
import SearchBar from './components/SearchBar'
import Movie from './components/Movie' 
// import DefaultHeader from './components/Header' 
import '@coreui/coreui/dist/css/coreui.min.css';
import 'popper.js/dist/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import '@coreui/coreui/dist/js/coreui.min.js'

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class Routing extends Component{

    render(){
      return(


 
          <Router>
            <div className = "content">
                <Route exact path="/" component={SearchBar} />
                <Route path="/result/:movieSearch" component={SearchResult}/>
                <Route path="/movie/:id" component={Movie}/>
            </div>
          </Router>




      )
    }
}


export default Routing;
