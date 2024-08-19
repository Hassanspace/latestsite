


import React from 'react';
import './Background.css';

function Background() {
  return (
    
    <div className='background'>
      <div className="stars">
        {/* Shooting Stars */}
        {Array.from({ length: 50 }).map((_, index) => (
          <div key={index} className="star"></div>
        ))}
      </div>
      <div className="still-stars">
        {/* Still Stars */}
        {Array.from({ length: 20 }).map((_, index) => (
          <div key={index} className="still-star"></div>
        ))}
      </div>
    </div>
  );
}

export default Background;
