import React from 'react';
import PropTypes from 'prop-types';
import { AiOutlineClose} from 'react-icons/ai';

const MovieDetails = ({ movie, isOpen, onClose}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
      <div className="bg-gray-800 rounded-lg max-w-3xl w-full relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <AiOutlineClose className="w-6 h-6"/>
        </button>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
          <div>
            <img
              src={movie.Poster !== "N/A" ? movie.Poster : ""}
              alt={movie.Title}
              className="w-full h-[300px] object-cover rounded-lg"
            />
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-2">{movie.Title}</h2>
            <p className="text-gray-400 mb-4">{movie.Year} | IMDb: {movie.imdbRating}</p>
            <p className="text-gray-300 mb-4">{movie.Plot}</p>
            
            <div className="mb-4">
              <p className="text-gray-400">Director : {movie.Director}</p>
              <p className="text-gray-400><span ">Cast : {movie.Actors}</p>
              <p className="text-gray-400">Genre: {movie.Genre}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

MovieDetails.propTypes = {
  movie: PropTypes.object.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default MovieDetails;

