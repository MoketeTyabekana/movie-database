import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';


// Movie grid component that tales takes tow props, this is a grid responsible for how the movies will be displayed.
const MovieGrid = ({ movies, onMovieClick }) => {
  if (!movies.length) {
    return null;
  }

  return (
    <div className="container mx-auto px-4 sm:px-2 lg:px-8">
      <div className="grid grid-cols-2  md:grid-cols-4 lg:grid-cols-5  gap-4 sm:gap-6 lg:gap-8">
        {movies.map((movie) => (
          <MovieCard
            key={movie.imdbID}
            movie={movie}
            onClick={() => onMovieClick(movie)}
          />
        ))}
      </div>
    </div>
  );
};

// Required fileds
// Expected prop types, an array of movie objects that are a requirement and a function that handles the lick events on the cards.
MovieGrid.propTypes = {
  movies: PropTypes.array.isRequired,
  onMovieClick: PropTypes.func.isRequired,
};

export default MovieGrid;

