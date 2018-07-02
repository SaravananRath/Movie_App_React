import React, { Component } from 'react';
import { Link } from "react-router-dom";

class RenderMovieList extends Component{



    render(){
        let list;
            list = this.props.movieList.map((x,i) => 
            <Link to={{pathname:`/movie/${x.id}` }} key={i}>
                <li className="media" style={{'padding':'10px 5px 10px 5px'}}>
                <img className="mr-3" src= {`https://image.tmdb.org/t/p/w500/${x.poster_path}`} alt="Generic placeholder" width="150px"/>
                <div className="media-body">
                    <h5 className="mt-0 mb-1">{x.title}</h5>
                </div>
          </li></Link>
        )
         if (list.length === 0) {
            return(<div>No results found</div>)
        }
        return(
            <span>{list}</span>
        )}
    }

export default class SearchResult extends Component{

    componentDidMount(){   
        this.props.getData()
    }
        
        render(){    
            return(
                <ul className="list-unstyled" style={divStyle}>
                
                   <RenderMovieList movieList = {this.props.movies}/>
                 </ul>
            )
        }
    }

    const divStyle = {
        margin:' 0 auto',
        width:' 500px'
      };