import axios from 'axios';

export const addValue = (text) => {
    return {
        type: 'INCREMENT',
        text
    }
}

export function getResultData(search) {
    return(dispatch) => {
        axios.get('https://api.themoviedb.org/3/search/movie',
            {
            params: {
            api_key: '4b6b3b4b55597a6d97748a53f91b1d20',
            query: `${search}`
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
            api_key: '4b6b3b4b55597a6d97748a53f91b1d20'
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

