const intialState = {
    movies: [],
    movie: []
}

const reducerFunc = (state = intialState,action) => {
    switch(action.type){
        case 'RESULT_API_CALL':    
        return {
            movies:action.movies,
            movie:''
            };
        case 'MOVIE_API_CALL':
        return {
            movie:action.movie,
            movies:''
            
        }
        default:
            return state;
    }
}

export default reducerFunc