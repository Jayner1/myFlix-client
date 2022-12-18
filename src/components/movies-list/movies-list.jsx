import React from "react";
import Col from 'react-bootstrap/Col';
import { connect } from 'react-redux';

// import VisibilityFilterInput from '../visibility-filter-input/visibility-filter-input';
import SearchBar from "../search-bar/search-bar";
import { MovieCard } from '../movie-card/movie-card';

function MoviesList() {
	const movies = useSelector((state) => state.movies.value);
	const visibilityFilter = useSelector((state) => state.visibilityFilter.value);
	const dispatch = useDispatch();

	const filteredMovies = movies.filter((m) =>
		m.Title.toLowerCase().includes(visibilityFilter.toLowerCase())
		);

  if (visibilityFilter !== '') {
    filteredMovies = movies.filter(m => m.Title.toLowerCase().includes(visibilityFilter.toLowerCase()));
  }

  if (!movies) return <div className="main-view" />;

  return <>
    <Col md={12} style={{ margin: '1em' }}>
      <SearchBar visibilityFilter={visibilityFilter} />
    </Col>
    {filteredMovies.map(m => (
      <Col md={3} key={m._id}>
        <MovieCard movie={m} />
      </Col>
    ))}
  </>;
}

export default connect(mapStateToProps)(MoviesList);