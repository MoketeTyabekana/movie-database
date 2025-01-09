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
    <footer className="bg-black text-white py-8 px-4 flex-auto  mx-auto p-5 border-t-2 border-gray-900">
     
        <div className=" lg:px-20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0 flex flex-col justify-start gap-5  sm:flex-auto">
              <p>EMTMovies©2025</p>
              <p className="text-sm">
                Developed By :{" "}
                <span className="text-orange-500 font-bold">Elias Mokete Tyabekana</span>
              </p>
            </div>
            <div className="flex-row text-right sm:justify-center">
              <p className="text-sm mb-4">Follow Me</p>
              <div className="flex space-x-6 sm:justify-center">
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
