import React from 'react';
import './PreLoader.css'; // Make sure this CSS file is created

// Import the GIF if you have it in the src directory
import loaderGif from '/images/loader.gif'; // Adjust the path as needed

const PreLoader = () => {
  return (
    <div className="preloader">
      <img src={loaderGif} alt="Loading..." className="loader-gif" />
    </div>
  );
};

export default PreLoader;
