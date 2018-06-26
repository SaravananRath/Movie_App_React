import React, { Component } from 'react';
import {Movie_App_API} from '../const';
import axios from 'axios';
import { Link } from "react-router-dom";
class RenderMovieList extends Component{

    render(){
        let list;
            list = this.props.movieList.map((x,i) => 
            <Link to={{pathname:`/movie/${x.id}` }} key={i}> <li >{x.title}</li></Link>
        )
         if (list.length === 0) {
            return(<div>No results found</div>)
        }
        return(
            <span>{list}</span>
        )}
    }

export default class SearchResult extends Component{
    constructor(props){
        super(props)
        this.state={
            movies: []
        }
        
    }
    componentDidMount(){   
        this.getMoviesList();
    }
        
    getMoviesList(){
        let { movieSearch } = this.props.match.params

        axios.get('https://api.themoviedb.org/3/search/movie', {
            params: {
            api_key: Movie_App_API,
            query: movieSearch
            }
        })
            .then(response => {
                this.setState({movies: response.data.results})
            })
            .catch(function (error) {
                console.log(error);
            });   
    }
        render(){    
            // let {movies = []} = this.state;
            return(
                <ul>
                <RenderMovieList movieList = {this.state.movies}/>
                </ul>
                )
        }
    }

