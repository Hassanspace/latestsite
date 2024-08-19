import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black bg-opacity-30 backdrop-blur-lg text-white py-6 footer">
      <div className="container mx-auto text-center">
        {/* Name */}
        <div className="mb-4 text-2xl font-bold text-blue-700">Hassan Rasool</div>

        {/* Navigation Links */}
        <div className="mb-4">
          <a href="#Home" className="mx-4 hover:text-gray-400 transition">Back to Top</a>
          <a href="#skills" className="mx-4 hover:text-gray-400 transition">Skills</a>
          <a href="#project" className="mx-4 hover:text-gray-400 transition">Projects</a>
          <a href="#education" className="mx-4 hover:text-gray-400 transition">Education</a>
        </div>

        {/* Social Media Icons */}
        <div className="mb-4 flex justify-center items-center">
          <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="mx-2">
            <svg className="w-6 h-6 fill-current text-gray-400 hover:text-gray-300 transition" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.875 2.25H16.125C18.425 2.25 20.25 4.075 20.25 6.375V17.625C20.25 19.925 18.425 21.75 16.125 21.75H7.875C5.575 21.75 3.75 19.925 3.75 17.625V6.375C3.75 4.075 5.575 2.25 7.875 2.25ZM12 14.625C14.175 14.625 15.75 13.05 15.75 10.875C15.75 8.7 14.175 7.125 12 7.125C9.825 7.125 8.25 8.7 8.25 10.875C8.25 13.05 9.825 14.625 12 14.625ZM16.125 5.625C15.75 5.625 15.375 5.975 15.375 6.375C15.375 6.775 15.75 7.125 16.125 7.125C16.5 7.125 16.875 6.775 16.875 6.375C16.875 5.975 16.5 5.625 16.125 5.625Z"/>
            </svg>
          </a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="mx-2">
            <svg className="w-6 h-6 fill-current text-gray-400 hover:text-gray-300 transition" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.98 3.5C4.98 2.119 6.1.998 7.48.998S9.98 2.119 9.98 3.5 8.86 6 7.48 6 4.98 4.879 4.98 3.5ZM2 6.707v12.586H5.957V13.04c0-1.176.042-2.165.62-3.041.648-1.037 1.814-1.664 3.144-1.664 2.039 0 2.98 1.346 2.98 3.533v6.749H8.065v-6.379c0-1.491-.027-2.722-1.698-2.722-1.697 0-2.262 1.232-2.262 2.564v6.537H2v-6.787z"/>
            </svg>
          </a>
          <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" className="mx-2">
            <svg className="w-6 h-6 fill-current text-gray-400 hover:text-gray-300 transition" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.85 8.19 6.84 9.5.5.09.69-.22.69-.5v-1.79c-2.61.57-3.15-1.26-3.15-1.26-.42-1.08-1.03-1.37-1.03-1.37-.84-.58.06-.57.06-.57.93.07 1.41.96 1.41.96.83 1.43 2.19 1.02 2.72.78.09-.6.32-1.02.58-1.25-1.94-.22-3.97-.97-3.97-4.32 0-1.36.48-2.48 1.28-3.36-.13-.31-.56-1.55.12-3.24 0 0 1.05-.34 3.44 1.3a11.94 11.94 0 0 1 3.14-.42c1.06 0 2.12.14 3.12.42 2.37-1.67 3.41-1.3 3.41-1.3.68 1.69.26 2.93.12 3.24.8.88 1.27 2 1.27 3.36 0 3.35-2.04 4.1-3.99 4.32.33.28.63.83.63 1.68v2.5c0 .28.19.6.69.5C21.15 20.19 24 16.42 24 12c0-5.52-4.48-10-10-10z"/>
            </svg>
          </a>
        </div>

        {/* Copyright */}
        <div className="text-sm text-gray-500">
          © {new Date().getFullYear()} Hassan Rasool. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
