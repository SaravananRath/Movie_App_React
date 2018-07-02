import axios from 'axios';
import {Movie_App_API} from '../const'


export function getResultData(search) {
    return(dispatch) => {
        axios.get('https://api.themoviedb.org/3/search/movie',
            {
            params: {
            api_key: Movie_App_API,
            query: search
            }
            })
            .then(response => {
                console.log(response.data.results);
                return (dispatch(resultSuccess(response.data.results)))
            })
            .catch(function (error) {
                console.log(error);
            })
    }
}

export function getMovieData(id) {
    return(dispatch) => {
        axios.get(`https://api.themoviedb.org/3/movie/${id}`,
            {
            params: {
            api_key:Movie_App_API
            }
            })
            .then(response => {
                console.log(response.data);
                return (dispatch(movieSuccess(response.data)))
            })
            .catch(function (error) {
                console.log(error);
            })
    }
}


export function resultSuccess(movies) {
    
    return { type: 'RESULT_API_CALL', movies }
}

export function movieSuccess(movie) {
    
    return { type: 'MOVIE_API_CALL', movie }
}

