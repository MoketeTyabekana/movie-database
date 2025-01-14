import React from "react";
import banner from '../assets/banner.jpg'

// The about page using components to display inofromation abaout the site and resources that were used during the development.
// Image Banner
// About heading
// About textx content
function About() {
  return (
    <div className="min-h-screen w-full bg-custom-gradient md:p-10 md:pt-40 sm:p-10 lg:pt-40 lg:pb-20 lg:px-20  sm:pt-20 sm:pb-10 sm:px-10">
      <div className="  p-2 lg:p-10 pt-10">
       
        <div className="  ">
          <img
            src={banner}
            alt="Profile"
            className="w-full h-64 object-cover overflow-hidden "
          />
         
          <div className=" text-black space-y-3  bg-gray-950 lg:p-10 sm:p-7">
            <h1 className="lg:text-3xl md:text-4xl font-bold mb-2 uppercase text-orange-400  ">
              About EMT Movies
            </h1>

           
            <hr />
            <div className="">
              <p className="text-gray-50 mb-4 text-justify text-sm  md:text-base lg:text-lg xl:text-xl">
                Greetings from <span className="font-semibold">EMT Movies</span>
                , your one-stop shop for learning about the film industry!
                Regardless of your preference for exciting blockbusters,
                timeless masterpieces, or undiscovered gems, EMT Movies makes it
                simple to find and explore films you&apos;ll enjoy. With
                comprehensive movie synopses, trailers, and tailored
                suggestions, our site is made to make your cinematic experience
                both thrilling and simple.
              </p>
              <p className="text-gray-50 mb-4 text-justify text-sm md:text-base lg:text-lg xl:text-xl">
                Modern technologies like React, Tailwind CSS, and the OMDB API
                enable <span className="font-semibold">EMT Movies</span>. React
                guarantees a responsive and dynamic user interface that offers a
                simple and engaging experience. While the OMDB API offers a
                plethora of precise and current movie information to support
                your exploration, Tailwind CSS offers contemporary, responsive
                styles that look fantastic on all devices.
              </p>
              <p className="text-gray-50 text-justify text-sm md:text-base lg:text-lg xl:text-xl">
                Our goal at <span className="font-semibold">EMT Movies</span> is
                straightforward: to introduce you to films that enthral,
                inspire, and amuse you. Our goal is to become your go-to
                resource for everything related to movies, complete with
                sophisticated search features, well selected lists, and an
                elegant, user-friendly layout. Explore EMT Films and allow us to
                assist you in producing unforgettable cinematic moments!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
