import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
// https://api.themoviedb.org/3/search/movie?api_key={api_key}&query=The+Mummy
// https://api.themoviedb.org/3/movie/76341?api_key=4b6b3b4b55597a6d97748a53f91b1d20
// axios.get('https://api.themoviedb.org/3/search/movie?api_key=4b6b3b4b55597a6d97748a53f91b1d20&query=The+Mummy')
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

class App extends Component {
  constructor(props){
    super(props)
    this.state ={
      search:''
    }
  }
  handleChange = (e) =>{
    this.setState({search:e.target.value})
  }
  handleSubmit = (e) =>{
    e.preventDefault();
    axios.get('https://api.themoviedb.org/3/search/movie', {
      params: {
        api_key:'4b6b3b4b55597a6d97748a53f91b1d20',
        query:this.state.search
      }
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <label>
            Hollywood Movie:
            <input type="text" name="name" onChange={this.handleChange} />
          </label>
          <button type="submit">Search</button>
        </form>
      </div>
    );
  }
}

export default App;
