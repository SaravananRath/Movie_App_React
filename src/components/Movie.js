import React, { Component } from 'react';
import {Movie_App_API} from '../const';
import axios from 'axios';

class MovieDetail extends Component {
    
   renderDetail() {
    let movieDetail;
    movieDetail = <div>
                        {this.props.detail.original_title}
                        {this.props.detail.id}

        </div>       
    return (movieDetail)
   }
    
    render(){
        return (<div>{this.renderDetail()}</div>)
    }
}

class Movie extends Component{
    constructor(props){
        super(props)
        this.state ={
            movie: {}
        }
    }
     componentDidMount(){
        const {id}  = this.props.match.params

            axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
                params: {
                  api_key: Movie_App_API,
                }
              })
                .then(response => {
                  this.setState({movie: response.data})
                })
                .catch(function (error) {
                  console.log(error);
                });   
        }
    render(){        
        return(
            <div>
                <MovieDetail detail = {this.state.movie}/>
            </div>
        )
    }
}

export default Movie
