import React from "react";
import { Search } from "lucide-react";

function Home() {
  return (
    <div className="h-screen flex flex-col items-center justify-center px-4  bg-custom-gradient">
      <div className=" bg-black p-7 rounded-2xl ">
        <div className="text-center mb-8 space-y-4">
          <h1 className="lg:text-5xl md:text-3xl sm:text-1xl font-bold">
            <span className="text-orange-400">
              What Would You Like To Watch
            </span>
            <span className="text-white">,</span>
            <br />
            <span className="text-white">Today?</span>
          </h1>
        </div>
        <div className="w-full max-w-2xl space-y-4">
          <div className="relative">
            <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search for movies"
              className="w-full px-12 py-3 rounded-full bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <button className="w-full py-3 bg-orange-400 text-white rounded-full hover:bg-orange-600 transition-colors">
            SEARCH
          </button>
        </div>
      </div>
      <div className="mt-12 text-white text-xl">
        <h2>Your Search Results Will Appear Below:</h2>
        <div className="w-screen h-0.5 bg-orange-400 mt-4"></div>
      </div>
    </div>
  );
}

export default Home;
