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
    <footer className="bg-black text-white py-8 px-4  mx-auto p-5 border-t-2 border-gray-900">
     
        <div className=" pl-20 pr-20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0 flex gap-5 items-center ">
              <p>EMTMovies©2024</p>
              <p className="text-sm">
                Developed By :{" "}
                <span className="text-orange-500 font-bold">Mokete Elias Tyabekana</span>
              </p>
            </div>
            <div className="flex-row text-left">
              <p className="text-sm mb-4">Follow Me</p>
              <div className="flex space-x-6">
                <a
                  href="https://linkedin.com"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-400"
                >
                  <FaLinkedin className="text-lg" />
                </a>
                <a
                  href="https://twitter.com"
                  aria-label="Twitter"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-400"
                >
                  <FaTwitter className="text-lg" />
                </a>
                <a
                  href="https://github.com"
                  aria-label="GitHub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-400"
                >
                  <FaGithub className="text-lg" />
                </a>
                <a
                  href="https://facebook.com"
                  aria-label="Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-400"
                >
                  <FaFacebook className="text-lg" />
                </a>
                <a
                  href="https://instagram.com"
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
