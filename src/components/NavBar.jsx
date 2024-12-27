import React from 'react';
import icon from '../assets/icon.png';

function NavBar() {
  return (
    
<nav className="bg-white border-gray-200 dark:bg-black ">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-5">
    <a  className="flex items-center space-x-3 rtl:space-x-reverse">
    <img src={icon} alt="Logo" className='lg:w-8 sm:w-4'/>
        <h1 className='text-white font-bold lg:text-3xl'><span className='text-orange-400'>EMT</span>Movies</h1>
    </a>
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 text-orange-400  dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinejoin="round"  strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white  dark:bg-black md:dark:bg-black dark:border-gray-700">
        <li>
          <a href="#" className="block py-2 px-3 text-white bg-blue-700 rounded hover:text-orange-400 md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page ">Home</a>
        </li>
        <li>
   <a href="#" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent hover:text-orange-400 md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Favourites</a>
 </li>
 <li>
   <a href="#" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent hover:text-orange-400 md:text-blue-700 md:p-0 dark:text-white" aria-current="page">About Me</a>
 </li>
      </ul>
    </div>
  </div>
</nav>

  )
}

export default NavBar