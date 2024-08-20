import { useEffect, useState } from 'react';
import image from "/images/header.jpg";
import './Hero.css'; // Import the CSS file for animations

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const titles = ['web developer', 'frontend expert', 'backend developer'];
  const [color, setColor] = useState('bg-blue-500');
  const [isLoaded, setIsLoaded] = useState(false); // New state to handle animation delay

  useEffect(() => {
    // Wait for 3 seconds (preloader duration) before starting animations
    const loadTimeout = setTimeout(() => {
      setIsLoaded(true); // Trigger animations
    }, 3000);

    // Typewriter effect logic
    const typewriterInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 2000);

    // Background color change effect logic
    const colors = ['bg-blue-700', 'bg-purple-800', 'bg-blue-900', 'bg-purple-900'];
    let i = 0;
    const colorChangeInterval = setInterval(() => {
      setColor(colors[i]);
      i = (i + 1) % colors.length;
    }, 1000);

    // Cleanup intervals on component unmount
    return () => {
      clearTimeout(loadTimeout);
      clearInterval(typewriterInterval);
      clearInterval(colorChangeInterval);
    };
  }, []);

  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between p-8 bg-transparent">
      {/* Left Side: Text Content */}
      <div className={`text-white md:w-1/2 mt-3 ${isLoaded ? 'slide-in-left' : ''}`}>
        <h1 className="md:text-4xl text-3xl font-bold">Hi, Greetings from Hassan</h1>
        <h2 className="md:text-3xl text-2xl mt-2 font-bold">
          I am{' '}
          <span className="text-blue-700">
            {titles[currentIndex]}
          </span>
        </h2>
        <p className="mt-4 text-lg text-gray-300">
          I am a passionate developer with expertise in creating modern web applications.
          With a strong foundation in both frontend and backend technologies, I bring your ideas
          to life with clean and efficient code.
        </p>
        <button
          className={`mt-6 px-4 py-2 ${color} md:text-2xl text-lg rounded-2xl transition-colors duration-1000 font-bold text-gray-300`}
        >
          <a target="_blank" href="https://drive.google.com/file/d/1W839PZWcdUd5v7vhlI3EzqhRbaK99RV4/view?usp=sharing">
            Review Resume
          </a>
        </button>
      </div>

      {/* Right Side: Image */}
      <div className={`md:w-1/2 w-full md:mt-16 mt-14 flex justify-center items-center ${isLoaded ? 'slide-in-right' : ''}`}>
        <img
          src={image}
          alt="Hassan"
          className="md:w-3/4 w-3/4 hero-image object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;
