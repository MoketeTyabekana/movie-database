import React from 'react';
import PropTypes from 'prop-types';

// movie card compontent taking movie and onclick prop.
// An image,title,rating,release date inputs that handles the front view of the data from the API.
const MovieCard = ({ movie, onClick }) => {
  return (
    <div 
      className="bg-gray-950 rounded-lg overflow-hidden cursor-pointer border-b-2 border-gray-400 transform transition-transform hover:scale-105"
      onClick={onClick}
    >

      <div className="relative">
        <img
          src={movie.Poster !== "N/A" ? movie.Poster : ""}
          alt={movie.Title}
          className="w-full h-[250px] object-cover"
        />
        
      </div>
      <div className="p-4">
        <h3 className="text-sm font-bold truncate mb-1 text-orange-400">{movie.Title}</h3>
        <div className="flex justify-between text-xs text-white font-bold">
         <p> {movie.Year}</p>
        <p>IMDb:{movie.imdbRating}</p>
        </div>
      </div>
    </div>
  );
};

// Required fields
// Expected prop types, movie object and the on click funtion that handles the click events on the movie card.
// Four string fields that are required for accessing the data from the API.
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

