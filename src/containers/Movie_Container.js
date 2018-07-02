import { connect } from 'react-redux';
import { getMovieData } from '../actions/Action';
import Movie from '../components/Movie';

const mapStateToProps = (state) => {
	return {
        movie: state.movie,
        movies: state.movies
	}
}

const mapDispatchToProps = (dispatch,props) => {
    return {
        getMovie : () => dispatch(getMovieData(props.match.params.id))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Movie)
