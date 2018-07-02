import { connect } from 'react-redux';
import { getResultData } from '../actions/Action';
import SearchResult from '../components/SearchResult';


const mapStateToProps = (state) => {
	return {
        movie: state.movie,
        movies: state.movies
	}
}
const mapDispatchToProps = (dispatch,props) => {
    return {
        getData : () => dispatch(getResultData(props.match.params.movieSearch))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SearchResult)
