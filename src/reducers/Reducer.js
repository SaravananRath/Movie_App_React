const intialState = {
    movies: [],
    movie: []
}

const reducerFunc = (state = intialState,action) => {
    // debugger
    switch(action.type){
        case 'RESULT_API_CALL':    
        return {
            ...state,
            movies:action.movies
        };
        case 'MOVIE_API_CALL':
        return {
            ...state,
            movie:action.movie
        }
        default:
            return state    
        }
}

export default reducerFunc