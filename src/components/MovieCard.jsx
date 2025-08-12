import React from 'react';
import PropTypes from 'prop-types';
import { BadgeCheck, Calendar, Star , Play} from 'lucide-react';

// movie card compontent taking movie and onclick prop.
// An image,title,rating,release date inputs that handles the front view of the data from the API.
const MovieCard = ({ movie, onClick }) => {
  return (
    <div 
      className="bg-gray-950 rounded-lg overflow-hidden cursor-pointer border-b-2 border-gray-400 transform transition-transform hover:scale-105 group"
      onClick={onClick}
    >

      <div className="relative">
        {/* Dark overlay on hover */}
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-70 transition-opacity duration-300 z-10"></div>
        
        {/* Play icon */}
        <Play className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white bg-orange-500 rounded-full p-2 w-12 h-12 cursor-pointer hover:bg-orange-600 transition-all duration-300 opacity-0 group-hover:opacity-100 z-20" />
        
        <img
          src={movie.Poster !== "N/A" ? movie.Poster : ""}
          alt={movie.Title}
          className="w-full h-auto object-cover transition-all duration-300"
        />
        
      </div>
      <div className="p-4 flex flex-col space-y-2">
        <h3 className="text-lg sm:text-sm font-bold truncate mb-1 text-orange-400 flex items-center"><BadgeCheck className="text-sm mr-1 w-4 h-4"/>

{movie.Title}</h3>
        <div className="flex justify-between text-xs text-white font-bold">
         <p className="text-lg sm:text-sm font-bold truncate mb-1 text-white flex items-center"><Calendar className="text-sm mr-1 w-4 h-4  text-orange-400 "/> {movie.Year}</p>
       <p className="text-lg sm:text-sm font-bold truncate mb-1 text-white flex items-center"><Star className="text-sm mr-1 w-4 h-4 text-orange-400"/>{movie.imdbRating}</p>
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

