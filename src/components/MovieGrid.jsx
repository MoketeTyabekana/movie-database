import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

function MovieGrid({ movies, favorites, onMovieClick }) {

    if (!movies.length) {
        return null;
      }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {movies.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              movie={movie}
              isFavorite={favorites.includes(movie.imdbID)}
              onClick={() => onMovieClick(movie)}
            />
          ))}
        </div>
      );
    };

    MovieGrid.propTypes = {
        movies: PropTypes.array.isRequired,
        favorites: PropTypes.arrayOf(PropTypes.string).isRequired,
        onMovieClick: PropTypes.func.isRequired,
      };
      

export default MovieGrid;