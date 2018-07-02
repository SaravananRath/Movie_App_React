import React, { Component } from 'react';
import './App.css';
import Search_Result_Container from './containers/Search_Result_Container'
import Movie_Container from './containers/Movie_Container'
import SearchBar from './components/SearchBar'
import './App.css';
import '@coreui/coreui/dist/css/coreui.min.css';
import 'popper.js/dist/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import '@coreui/coreui/dist/js/coreui.min.js'
import { BrowserRouter as Router, Route} from "react-router-dom";



class Routing extends Component{
    render(){
      return(
        <Router>
          <div className="app sidebar-show aside-menu-show">
            <header style={headerStyle} className="app-header navbar"  >
          <h1 style={divStyle}>The Movie Database</h1>
               
            </header>
            <div className="app-body">

            <main className="main">
            
                <div className = "content">
                    <Route exact path="/" component={SearchBar} />
                    <Route path="/result/:movieSearch" component={Search_Result_Container}/>
                    <Route path="/movie/:id" component={Movie_Container}/>
                </div>
            
            </main>
            </div>
            <footer className="app-footer">
            Saravanan Copyrights Limited &copy;2018
            </footer>   
            </div>
            </Router>
        )
    }
}
const headerStyle = {
    marginTop : '10px',
    background: 'black',
    color: 'white', 
    paddingLeft: '20px'  
}
const divStyle = {
    marginTop:'20px'
  };

export default Routing;
