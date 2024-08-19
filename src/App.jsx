import { useState, useEffect } from "react";

import "./App.css";
import scroll from "/images/scroll down.gif";
import Background from "./components/Background";
import ScrollIndicator from "./components/ScrollIndicator";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Preloader from "./components/PreLoader";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust time as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <Preloader />}
      <Background />
      <ScrollIndicator />
      <Navbar />
      <div id="Home">
        <Hero />
      </div>
      <div id="skills" className="text-center mt-2 ">
        <img
          className="m-auto h-[100px] w-[100px] "
          src={scroll}
          alt="Scroll down"
        />
        <h1 className="text-4xl font-bold text-center mb-6 text-white">
          Skills
        </h1>
        <p className="text-gray-400 font-bold text-xl mb-3">
          Delve into the skills that have shaped my professional career.
        </p>
        <Skills />
      </div>
      <div id="education" className="text-center mt-3 ">
        <h1 className="text-4xl font-bold text-center mb-6 text-white">
          Education
        </h1>
        <p className="text-gray-400 font-bold text-xl mb-3">
          Discover My Education Journey
        </p>
        <Education />
      </div>
      <div id="project" className="text-center mt-3 ">
        <h1 className="text-4xl font-bold text-center mb-6 text-white">
          Projects
        </h1>
        <p className="text-gray-400 font-bold text-xl mb-3">
          Delve into the projects that exemplify the expertise and skills that
          have shaped my professional career.
        </p>
        <Projects />
      </div>
      <div id="contact" className="text-center mt-3 ">
        <h1 className="text-4xl font-bold text-center mb-6 text-white">
          Contact Me
        </h1>
        <p className="text-gray-400 font-bold text-xl mb-3">
          Lets Connect , Feel free to reach out to me for any queries or
          collaborations.
        </p>
        <Contact />
      </div>
      <Footer/>
    </>
  );
}

export default App;
