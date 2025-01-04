import React, { useState, useEffect } from "react";
import { Search } from "lucide-react";
import PropTypes from "prop-types";
import MovieGrid from "../components/MovieGrid";

function Home({ favorites, setSelectedMovie }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [latestMovies, setLatestMovies] = useState([]);
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
        `https://www.omdbapi.com/?s=${encodeURIComponent(searchQuery)}&apikey=${API_KEY}`
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
          `https://www.omdbapi.com/?s=${encodeURIComponent(words[0])}&apikey=${API_KEY}`
        );
        const similarData = await similarResponse.json();

        if (similarData.Response === "True") {
          const detailedSimilarMovies = await Promise.all(
            similarData.Search.map(async (movie) => {
              const detailResponse = await fetch(
                `https://www.omdbapi.com/?i=${movie.imdbID}&apikey=${API_KEY}`
              );
              return await detailResponse.json();
            })
          );
          setMovies(detailedSimilarMovies);
        } else {
          setError("No movies found. Try a different search term.");
        }
      }
    } catch (err) {
      setError("An error occurred while fetching movies. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="h-screen flex flex-col  items-center justify-center px-4  bg-custom-gradient">
        <div className=" bg-black bg-opacity-50 p-7 pt-10 pb-10 rounded-2xl">
          <div className="text-center mb-8 space-y-4">
            <h1 className="lg:text-5xl md:text-3xl sm:text-1xl font-bold leading-relaxed">
              <span className="text-orange-400">
                What Would You Like To Watch
              </span>
              <span className="text-white">,</span>
              <br />
              <span className="text-white">Today?</span>
            </h1>
          </div>
          <div className="w-full max-w-2xl space-y-4">
             <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-500" />
            <div className="relative">
            <form onSubmit={searchMovies} className="max-w-3xl mx-auto mb-12"></form>
              <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-500" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for movies"
                className="w-full px-12 py-3 text-center rounded-full bg-white-500 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <button type="submit" className="w-full py-3 bg-orange-400 text-white font-bold rounded-full hover:bg-orange-600 transition-colors">
              SEARCH
            </button>
            <form/>
          </div>
        </div>
        <div className="mt-12 text-white text-xl ">
          <h2 className="search-results text-center mb-10">
            Your Search Results Will Appear Below:
          </h2>
          <div className="w-screen  bg-black text-white py-8 px-4 sm:flex-auto  mx-auto p-5 border-t-2 border-gray-900"></div>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6 text-white ">Latest Movies</h3>
          {loading && (
            <div className="text-center text-gray-400">Loading...</div>
          )}
          {error && <div className="text-center text-red-500">{error}</div>}
          {!loading && !error && (
            <MovieGrid
              movies={latestMovies}
              favorites={favorites}
              onMovieClick={setSelectedMovie}
            />
          )}
        </div>

        {movies.length > 0 && (
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6 text-white">
              Search Results
            </h3>
            <MovieGrid
              movies={movies}
              favorites={favorites}
              onMovieClick={setSelectedMovie}
            />
          </div>
        )}
      </div>
    </>
  );
}

export default Home;
