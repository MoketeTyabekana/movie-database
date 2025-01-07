import React, { useState, useEffect } from "react";
import { Search } from "lucide-react";
import PropTypes from "prop-types";
import icon from "../assets/icon.png";
import MovieGrid from "../components/MovieGrid";

function Home({ setSelectedMovie }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

  // Search
  const searchMovies = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://www.omdbapi.com/?s=${encodeURIComponent(
          searchQuery
        )}&apikey=${API_KEY}`
      );
      const data = await response.json();

      if (data.Response === "True") {
        const detailedMovies = await Promise.all(
          data.Search.map(async (movie) => {
            const detailResponse = await fetch(
              `https://www.omdbapi.com/?i=${movie.imdbID}&apikey=${API_KEY}`
            );
            return await detailResponse.json();
          })
        );
        setMovies(detailedMovies);
      } else {
        const words = searchQuery.split(" ");
        const similarResponse = await fetch(
          `https://www.omdbapi.com/?s=${encodeURIComponent(
            words[0]
          )}&apikey=${API_KEY}`
        );
        const similarMovies = await similarResponse.json();

        if (similarMovies.Response === "True") {
          const MovieDetails = await Promise.all(
            similarMovies.Search.map(async (movie) => {
              const detailResponse = await fetch(
                `https://www.omdbapi.com/?i=${movie.imdbID}&apikey=${API_KEY}`
              );
              return await detailResponse.json();
            })
          );
          setMovies(MovieDetails);
        } else {
          setError("No movies found. Try a different search term.");
        }
      }
    } catch (e) {
      setError("An error occurred while fetching movies. Please try again.");
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="h-full flex flex-col  items-center justify-center px-4 pt-10  bg-custom-gradient">
        <div className="bg-white-400 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-2 border-gray-400 border-opacity-10 p-8 mt-20 pt-10 pb-10 w-2/5 ">
          <div className="flex justify-center mb-5 border-b-2 border-gray-100 p-10 space-x-3 items-center">
            <img src={icon} alt="Logo" className=" lg:w-10 sm:w-6" />
            <h1 className="text-white font-bold lg:text-5xl md:text-3xl">
              <span className="text-orange-400">EMT</span>Movies
            </h1>
          </div>
         
          <div className="w-full  flex flex-col">
            <form
              onSubmit={searchMovies}
              className="max-w-3xl mx-auto mb-12 space-y-4  w-full"
            >
              <div className="relative">
                <Search className="absolute left-4 top-3.5 h-5 w-5 border-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for movies"
                  className="w-full px-12 py-3 text-center rounded-full bg-white-500 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-orange-400 text-white font-bold rounded-full hover:bg-orange-600 transition-colors tracking-wider"
              >
                Search
              </button>
            </form>
          </div>
        </div>
        <div className="mt-12 text-white text-xl ">
          <h2 className="search-results text-center mb-10 tracking-wider ">
            Your Search Results Will Appear Below
          </h2>
        </div>

        {movies.length > 0 && (
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6 text-white md:m-20 uppercase">
              Search Results for :{" "}
              <span className="text-orange-400 ">{searchQuery}</span>
            </h3>
            {loading && (
              <div className="text-center text-white">Loading...</div>
            )}
            {error && <div className="text-center text-red-500">{error}</div>}
            <MovieGrid movies={movies} />
            onMovieClick={setSelectedMovie}
          </div>
        )}
      </div>
    </>
  );
}

Home.propTypes = {
  setSelectedMovie: PropTypes.func.isRequired,
};

export default Home;
