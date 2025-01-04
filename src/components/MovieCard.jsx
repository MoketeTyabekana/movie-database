import React from 'react';
import PropTypes from 'prop-types';
import { AiFillStar } from 'react-icons/ai';

function MovieCard({ movie}) {
  return (
    <div 
   className="bg-gray-800 rounded-lg overflow-hidden shadow-lg cursor-pointer transform transition-transform hover:scale-105"
  
 > 
  <div className="relative">
    <img
      src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300x450"}
      alt={movie.Title}
      className="w-full h-[300px] object-cover"
    />
    
   
   
   
   
   
  </div>
  <div className="p-4">
    <h3 className="text-sm font-bold truncate mb-1 text-white">{movie.Title}</h3>
    <div className="flex justify-between text-xs text-gray-400">
      <span>{movie.Year}</span>
      <span>IMDb: {movie.imdbRating}</span>
    </div>
  </div>
    </div>
  )
}

MovieCard.propTypes = {
    movie: PropTypes.shape({
      Poster: PropTypes.string.isRequired,
      Title: PropTypes.string.isRequired,
      Year: PropTypes.string.isRequired,
      imdbRating: PropTypes.string.isRequired,
    }).isRequired,
    isFavorite: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
  };

export default MovieCard
