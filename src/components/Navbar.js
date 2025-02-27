import React from "react";


export default function Navbar() {
  return (
    <header id="navbar" className="bg-gray-900 top-0 z-10">
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
          <a
            href="#about"
            className="mr-8 text-white text-lg after:content-[''] after:block after:w-0 after:h-1 after:bg-gray-200 after:transition-all after:duration-500 hover:after:w-full"
          >
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
      </div>
    </header>
  );
}
