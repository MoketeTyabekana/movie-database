import React from 'react';
import PropTypes from 'prop-types';

const MovieCard = ({ movie,onClick }) => {
  return (
    <div 
      className="bg-gray-800 rounded-lg overflow-hidden cursor-pointer border-b-2 border-gray-400 transform transition-transform hover:scale-105"
      onClick={onClick}
    >

      <div className="relative">
        <img
          src={movie.Poster !== "N/A" ? movie.Poster : ""}
          alt={movie.Title}
          className="w-full h-[300px] object-cover"
        />
        
      </div>
      <div className="p-4">
        <h3 className="text-sm font-bold truncate mb-1 text-orange-400">{movie.Title}</h3>
        <div className="flex justify-between text-xs text-white font-bold">
          <span>{movie.Year}</span>
          <span>IMDb: {movie.imdbRating}</span>
        </div>
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    Poster: PropTypes.string.isRequired,
    Title: PropTypes.string.isRequired,
    Year: PropTypes.string.isRequired,
    imdbRating: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default MovieCard;

