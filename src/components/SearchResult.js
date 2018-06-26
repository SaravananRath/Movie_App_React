import React, { Component } from 'react';
import {Movie_App_API} from '../const';
import axios from 'axios';


class RenderMovieList extends Component{
    // constructor(props){
    //     super(props)
    //     this.state.movieList = props['movieList']
    // }
    render(){
        let list;
        if (Object.keys(this.props.movieList).length!=0){
            list = this.props.movieList.data.results.map((data,i) => <li key={i}>{data.title}</li>)
        
        if (list.length == 0) {
            return(<div>No results found</div>)
        }
    }
        return(
            <li>{list}</li>
        )}
    }


 export default class SearchResult extends Component{
     constructor(props){
        super(props)
        // var movies = this.state.movies ? this.state.movies : {}
        this.state={
            movies: {}
        }
        
        }
    componentDidMount(){
        const { movie } = this.props.match.params

            axios.get('https://api.themoviedb.org/3/search/movie', {
                params: {
                  api_key: Movie_App_API,
                  query: movie
                }
              })
                .then(response => {
                  this.setState({movies: response})
                })
                .catch(function (error) {
                  console.log(error);
                });   
        }
    
        render(){    
            return(
                <ul>
                  < RenderMovieList movieList = {this.state.movies}/>
                </ul>
                )
        }
     }

 