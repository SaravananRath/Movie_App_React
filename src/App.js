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

        <div class="app sidebar-show aside-menu-show">
          <header class="app-header navbar">
          Movie Search
          </header>
          <div class="app-body">
          <div class="sidebar">
          </div>
          <main class="main">
          <Router>
            <div>
                <ul>
            <Link to="/">Search</Link>        
                </ul>
              <hr/>
              
                <Route exact path="/" component={SearchBar} />
                <Route path="/result/:movieSearch" component={SearchResult}/>
                <Route path="/movie/:id" component={Movie}/>
            </div>
          </Router>
          </main>
          <aside class="aside-menu">
          Aside Menu
          </aside>
          </div>
          <footer class="app-footer">
         Footer Here
          </footer>
        </div>

      )
    }
}


export default Routing;
