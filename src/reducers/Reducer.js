const intialState = {
    movies: [],
    movie: []
}

const reducerFunc = (state = intialState,action) => {
    // debugger
    switch(action.type){
        case 'RESULT_API_CALL':    
        return {
            movies:action.movies
        };
        case 'MOVIE_API_CALL':
        return {
            movie:action.movie
        }
        default:
            return state    
        }
}

export default reducerFunc