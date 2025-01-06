import React from "react";
import Profile from "../assets/profile.jpg";

function About() {
  return (
    <div className="min-h-screen it w-full bg-custom-gradient pt-40 p-6">
      <div className="container bg-white-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-2 border-gray-400 border-opacity-10
  p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center ">
          <div className="flex justify-center ">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-orange-400">
              <img
                src={Profile}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className=" text-black space-y-3  bg-orange-400 p-10 rounded">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">About Me</h1>
            <h2 className="text-xl md:text-2xl text-orange-400 mb-6">
              Frontend Developer
            </h2>
            <div>
              <p className="text-black mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="text-black mb-4">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
              <p className="text-black">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
