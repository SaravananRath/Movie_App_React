import React, { Component } from 'react';
import { Movie_App_API } from '../const';
import axios from 'axios';

class MovieDetail extends Component {

 renderDetail() {
  let movieDetail;
  movieDetail = <div>
   ID:{this.props.detail.id}
  <p> {this.props.detail.overview}</p>
    </div>
  console.log(this.props.detail.id)
  if(this.props.detail.id === undefined){
      return(<div>No Movie Found</div>)
  }

  return (movieDetail)
 }

 render() {
  return (<div>{this.renderDetail()}</div>)
 }
}

class Movie extends Component {
 constructor(props) {
  super(props)
  this.state = {
   movie: {}
  }
 }
 componentDidMount() {
  const { id } = this.props.match.params

  axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
   params: {
    api_key: Movie_App_API,
   }
  })
   .then(response => {
    this.setState({ movie: response.data },)
   })
   .catch(function (error) {
    console.log(error);
   });
 }
 renderTitle(){
    let movieName;
    movieName = <h2>
        {this.state.movie.original_title}
      </h2>
    return(movieName)
 }
 render() {
  return (
   <div class="app sidebar-show aside-menu-show">
    <header class="app-header navbar">
    {this.renderTitle()}
    </header>
   <div class="app-body">
    <div class="sidebar">
    
    </div>
   <main class="main">
   <MovieDetail detail={this.state.movie} />
   </main>

   </div>
   <footer class="app-footer">
   Footer Here
   </footer>
   </div>
  )
 }
}

export default Movie

