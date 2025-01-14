import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
import React from "react";


export default function FooterContainer() {
  return (
    <footer className="bg-black text-white py-8 px-4 sm:flex-auto  mx-auto p-5 border-t-2 border-gray-900">
     
        <div className=" lg:pl-20 lg:pr-20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className=" mb-4  lg:block  gap-5 items-center sm:block ">
              <p className="md:text-left  sm:text-center">EMTMovies©2024</p>
              <p className="text-sm">
                Developed By :{" "}
                <span className="text-orange-500 font-bold">Elias Mokete Tyabekana</span>
              </p>
            </div>
            <div className="flex-row lg:text-left  sm:block">
              <p className="text-sm mb-4 md:text-right sm:text-center">Follow Me</p>
              <div className="flex space-x-6 ">
                <a
                  href="https://www.linkedin.com/in/mokete-elias-tyabekana-88a22a143/"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-400"
                >
                  <FaLinkedin className="text-lg" />
                </a>
                <a
                  href="https://x.com/ghost_emt"
                  aria-label="Twitter"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-400"
                >
                  <FaTwitter className="text-lg" />
                </a>
                <a
                  href="https://github.com/MoketeTyabekana"
                  aria-label="GitHub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-400"
                >
                  <FaGithub className="text-lg" />
                </a>
                <a
                  href="https://web.facebook.com/kayno.Eli.mokete"
                  aria-label="Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-400"
                >
                  <FaFacebook className="text-lg" />
                </a>
                <a
                  href="https://www.instagram.com/eli.mokete/"
                  aria-label="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-400"
                >
                  <FaInstagram className="text-lg" />
                </a>
              </div>
            </div>
          </div>
        </div>
    </footer>
  );
}
