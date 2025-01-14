import React, { useState } from 'react';
import { Outlet, Link } from "react-router-dom";
import icon from "../assets/icon.png";
import FooterContainer from "./FooterContainer";

function NavBar() {

  // Defined the state of the menu.
const [menuOpen, setMenuOpen] = useState(false);

const toggleMenu = () => {
setMenuOpen(!menuOpen);
};

  return (


    <>
      <nav className="bg-white-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border-b-2 border-gray-400 border-opacity-10 w-screen fixed top-0 left-0 shadow-md z-50">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-5">
          {/* Compony logo with icon and h1 element for the company name */}
          <Link to="/" className="flex items-center space-x-3">
            <img src={icon} alt="Logo" className="w-8" />
            <h1 className="text-white font-bold lg:text-3xl">
              <span className="text-orange-400">EMT</span>Movies
            </h1>
          </Link>

          {/* hambuger Menu for small screen */}
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 text-orange-400 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            
            aria-label="Toggle navigation menu"
            // An on click method that handles the click event of the
            onClick={toggleMenu}
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>

          {/* Naviagtion bar link */}
          <div  className="sm:hidden w-full md:block md:w-auto" id="navbar-default ">
            <ul className="font-medium flex flex-col  md:p-0 mt-4 md:flex-row md:space-x-8 ">
              <li>
                <Link
                  to="/"
                  className="block py-2 px-3 text-white  hover:text-orange-400 md:bg-transparent md:p-0 dark:text-white"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="block py-2 px-3 text-white   md:bg-transparent hover:text-orange-400 md:p-0 dark:text-white"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* main seaction that uses outlet to display the page that is responsible for the nav bar link that has been clicked by the user. */}
      <main>
        <Outlet />
      </main>
      <FooterContainer />
    </>
  );
}

export default NavBar;
