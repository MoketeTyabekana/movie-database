import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

const MovieGrid = ({ movies, onMovieClick }) => {
  if (!movies.length) {
    return null;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:m-20 ">
      {movies.map((movie) => (
        <MovieCard
          key={movie.imdbID}
          movie={movie}
          onClick={() => onMovieClick(movie)}
        />
      ))}
    </div>
  );
};

MovieGrid.propTypes = {
  movies: PropTypes.array.isRequired,
  onMovieClick: PropTypes.func.isRequired,
};

export default MovieGrid;

