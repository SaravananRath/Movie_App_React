import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

axios.get('https://api.themoviedb.org/3/movie/76341?api_key=4b6b3b4b55597a6d97748a53f91b1d20')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

class App extends Component {
  render() {
    return (
      <div className="App">
        
      </div>
    );
  }
}

export default App;
