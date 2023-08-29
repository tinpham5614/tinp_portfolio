import { ArrowUpCircleIcon } from "@heroicons/react/24/solid";
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-gray-900 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a
          className="title-font font-medium text-white mb-4 md:mb-0"
          href="#about"
        >
          <a href="/" className="ml-3 text-xl text-white">
            Tin
          </a>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a href="#about" className="mr-8 text-white text-lg after:content-[''] after:block after:w-0 after:h-1 after:bg-gray-200 after:transition-all after:duration-500 hover:after:w-full">
            About
          </a>
          <a
            href="#projects"
            className="mr-8 text-white text-lg after:content-[''] after:block after:w-0 after:h-1 after:bg-gray-200 after:transition-all after:duration-500 hover:after:w-full"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="mr-8 text-white text-lg after:content-[''] after:block after:w-0 after:h-1 after:bg-gray-200 after:transition-all after:duration-500 hover:after:w-full scroll-smooth"
          >
            Contact
          </a>
        </nav>
        <a
          href="#about"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-900 rounded text-lg fixed bottom-0 right-0 mb-4 mr-4"
        >
          <ArrowUpCircleIcon className="w-5 h-5 text-white" />
          <span className="ml-1 text-white">Back to top</span>
        </a>
      </div>
    </header>
  );
}
