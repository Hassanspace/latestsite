import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 p-4 flex items-center justify-between transition-all duration-300 z-50 ${
        isScrolled ? 'bg-gray-900 text-white shadow-lg bg-opacity-30 backdrop-blur-sm' : 'bg-transparent text-white'
      }`}
    >
      {/* Left side: Logo */}
      <div className="flex items-center">
        <span className="font-bold text-lg md:text-xl">Hassan's Den</span>
      </div>

      {/* Center: Links for larger screens */}
      <div className="hidden md:flex md:items-center md:space-x-4 text-base md:text-lg">
        <a href="#skills" className="hover:text-blue-500">Skills</a>
        <a href="#project" className="hover:text-blue-500">Projects</a>
        <a href="#education" className="hover:text-blue-500">Education</a>
        <a href="#contact" className="hover:text-blue-500">Contact</a>
      </div>

      {/* Right side: GitHub Button */}
      <div className="flex items-center space-x-4 md:text-base text-sm">
        <a
          href="https://github.com/Hassanspace"
          className="flex items-center px-4 py-2 border border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white rounded-lg transition"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.867 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.34-3.369-1.34-.454-1.153-1.11-1.461-1.11-1.461-.909-.62.069-.607.069-.607 1.004.07 1.532 1.032 1.532 1.032.892 1.529 2.341 1.088 2.91.832.091-.647.35-1.089.636-1.34-2.22-.252-4.555-1.11-4.555-4.943 0-1.091.39-1.983 1.03-2.682-.103-.253-.446-1.27.098-2.646 0 0 .84-.269 2.75 1.025A9.573 9.573 0 0112 7.806a9.59 9.59 0 012.507.337c1.91-1.294 2.748-1.025 2.748-1.025.546 1.376.202 2.393.1 2.646.64.699 1.028 1.591 1.028 2.682 0 3.842-2.339 4.687-4.567 4.932.36.31.68.923.68 1.86 0 1.343-.012 2.425-.012 2.756 0 .268.18.579.688.481C19.135 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z"
              clipRule="evenodd"
            ></path>
          </svg>
          GitHub Profile
        </a>

        {/* Hamburger Menu for smaller screens */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden ml-4 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      {/* Dropdown Menu for smaller screens */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-gray-900 bg-opacity-40 backdrop-blur-lg text-white text-base py-2 flex flex-col items-center">
          <a href="#skills" className="py-2 w-full text-center hover:bg-gray-700">Skills</a>
          <a href="#project" className="py-2 w-full text-center hover:bg-gray-700">Projects</a>
          <a href="#education" className="py-2 w-full text-center hover:bg-gray-700">Education</a>
          <a href="#contact" className="py-2 w-full text-center hover:bg-gray-700">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
