import React, { Component } from 'react';


class MovieDetail extends Component {

 renderDetail() {
  if(this.props.detail === undefined){
    return(<div>No Details Found</div>)
  }
  let movieDetail;
  movieDetail = <div>
  <p> <b>ID:</b>{this.props.detail.id}</p>
  <p> <b>Budget:</b> {this.props.detail.budget}</p>
  <p> <b>Tagline:</b> {this.props.detail.tagline}</p>
  <p> <b>Description:</b> {this.props.detail.overview}</p>
  <p> <b>Popularity:</b> {this.props.detail.popularity}</p>
  <p> <b>Revenvue:</b> {this.props.detail.revenue}</p>
  <p> <b>Runtime:</b> {this.props.detail.runtime}</p>
  <p> <b>Status:</b> {this.props.detail.status}</p>
  <p> <b>Release Date:</b> {this.props.detail.release_date}</p>

    </div>
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

 componentDidMount() {
   this.props.getMovie()
 }
 renderTitle(){
   if(this.props.movie === undefined){
     return(<div>No Movies Found</div>)
   }
    let movieName;
    movieName = <h2>
        {this.props.movie.original_title}
      </h2>
    return(movieName)
 }
 rednerPoster(){
   let moviePoster;
   if(this.props.movie === undefined){
    return(<div>No Poster Found</div>)
  }
   moviePoster = 
   <img src={`https://image.tmdb.org/t/p/w500/${this.props.movie.poster_path}`} className="figure-img img-fluid rounded" alt="A generic square placeholder  with rounded corners in a figure." style={imageStyle}/> 
    return(moviePoster)

 }
 render() {
  return (
   <div style={divStyle} >

    {this.renderTitle()}
    {this.rednerPoster()} 
    <div style ={innerDiv}>
      <MovieDetail detail={this.props.movie} />
    </div>
    </div>

  )
 }
}

const divStyle = {
  // border:'2px solid red',
  margin:'20px 10px 5px 10px',
  paddingLeft:'20px'
}
const imageStyle = {
  float:'right',
  padding: '10px 10px 10px 10px'
  
}
const innerDiv = {
  paddingLeft:'10px'
}
export default Movie

