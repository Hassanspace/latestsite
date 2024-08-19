import React, { useState } from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("html-css-js");

  const projectsData = [
    {
      id: 1,
      image: "/images/oldportfolio.png",
      name: "OLD Portfolio",
      live: true,
      description:
        "This project was Build using Html , Css and javascript and it is a responsive site.",
      codeLink: "https://github.com/Hassanspace/site.git",
      liveDemoLink: "https://hassanspace.github.io/site/",
      category: "html-css-js",
      date: "July 2023 - July 2023",
      technologies: [
        { name: "HTML", image: "/icons/html.png" },
        { name: "CSS", image: "/icons/css.png" },
        { name: "Js", image: "/icons/javascript.png" },
        { name: "Bootstrap", image: "/icons/bootstrap.png" },
      ],
    },
    {
      id: 2,
      image: "/images/blogsite.png",
      name: "BLOG Website",
      live: true,
      description:
        "This project was Build using Html , Css and javascript and it is a responsive site.",
      codeLink: "https://github.com/Hassanspace/blogupdated.git",
      liveDemoLink: "https://hassanspace.github.io/blogupdated/",
      category: "html-css-js",
      date: "July 2024 - July 2024",
      technologies: [
        { name: "HTML", image: "/icons/html.png" },
        { name: "CSS", image: "/icons/css.png" },
        { name: "Js", image: "/icons/javascript.png" },
        { name: "Bootstrap", image: "/icons/bootstrap.png" },
      ],
    },
    {
      id: 3,
      image: "/images/spotify.png",
      name: "SPOTIFY Clone",
      live: false,
      description:
        "This project was Build using Html , Css and  javascript and it is a responsive site.",
      codeLink: "https://github.com/Hassanspace/spotify.git",
      liveDemoLink: "",
      category: "html-css-js",
      date: "July 2024 - July 2024",
      technologies: [
        { name: "HTML", image: "/icons/html.png" },
        { name: "CSS", image: "/icons/css.png" },
        { name: "Js", image: "/icons/javascript.png" },
        { name: "Bootstrap", image: "/icons/bootstrap.png" },
      ],
    },
    {
      id: 4,
      image: "/images/marketing.png",
      name: "MARKETING Website ",
      live: true,
      description:
        "This project was Build using Html , Css and  javascript(GSAP LIBRARY) and it is not  responsive.",
      codeLink: "https://github.com/Hassanspace/wizardz.git",
      liveDemoLink: "https://hassanspace.github.io/wizardz/",
      category: "html-css-js",
      date: "July 2024 - July 2024",
      technologies: [
        { name: "HTML", image: "/icons/html.png" },
        { name: "CSS", image: "/icons/css.png" },
        { name: "Js", image: "/icons/javascript.png" },
        { name: "Bootstrap", image: "/icons/bootstrap.png" },
      ],
    },
    {
      id: 5,
      image: "/images/fanta.png",
      name: "FANTA Reimagine ",
      live: true,
      description:
        "This project was Build using Html , Css and  javascript(GSAP LIBRARY) and it is not  responsive(use desktop).",
      codeLink: "https://github.com/Hassanspace/fanta.git",
      liveDemoLink: "https://hassanspace.github.io/fanta/",
      category: "html-css-js",
      date: "July 2024 - July 2024",
      technologies: [
        { name: "HTML", image: "/icons/html.png" },
        { name: "CSS", image: "/icons/css.png" },
        { name: "Js", image: "/icons/javascript.png" },
        { name: "Bootstrap", image: "/icons/bootstrap.png" },
      ],
    },
    {
      id: 6,
      image: "/images/tictactoe.png",
      name: "TICTACTOE ",
      live: true,
      description:
        "This project was Build using Html , Css and  javascript(Logic Building) and it is   responsive.",
      codeLink: "https://github.com/Hassanspace/tictactoegame.git",
      liveDemoLink: "https://hassanspace.github.io/tictactoegame/",
      category: "html-css-js",
      date: "July 2024 - July 2024",
      technologies: [
        { name: "HTML", image: "/icons/html.png" },
        { name: "CSS", image: "/icons/css.png" },
        { name: "Js", image: "/icons/javascript.png" },
        { name: "Bootstrap", image: "/icons/bootstrap.png" },
      ],
    },
    {
      id: 7,
      image: "/images/newportfolio.png",
      name: "LATEST Portfolio",
      live: true,
      description:
        "A project built with React and Tailwind CSS and react libraries.",
      codeLink: "",
      liveDemoLink: "",
      category: "react-tailwind",
      date: "Aug 2024 - Aug 2024",
      technologies: [
        { name: "React", image: "/icons/react.png" },
        { name: "Tailwind CSS", image: "/icons/tailwind.png" },
      ],
    },
    {
      id: 8,
      image: "/images/fictionalfantasia.png",
      name: "Fictional Fantasia (Static Ver)",
      live: true,
      description:
        "A project built with React and Tailwind CSS  , this is a static version of full stack site",
      codeLink: "https://github.com/Hassanspace/bookstore.git",
      liveDemoLink: "https://fictionalfantasia.netlify.app/",
      category: "react-tailwind",
      date: "Aug 2024 - Aug 2024",
      technologies: [
        { name: "React", image: "/icons/react.png" },
        { name: "Tailwind CSS", image: "/icons/tailwind.png" },
      ],
    },
    {
      id: 9,
      image: "/images/todolist.png",
      name: "Simple Todo List",
      live: true,
      description: "A Simple project built with React and Tailwind CSS  ",
      codeLink: "https://github.com/Hassanspace/todolistsite.git",
      liveDemoLink: "https://toodoo00.netlify.app/",
      category: "react-tailwind",
      date: "Aug 2024 - Aug 2024",
      technologies: [
        { name: "React", image: "/icons/react.png" },
        { name: "Tailwind CSS", image: "/icons/tailwind.png" },
      ],
    },
    {
      id: 10,
      image: "/images/fictionalfantasia.png",
      name: "Fictional Fantasia (Full stack)",
      live: false,
      description:
        "A project built with MERN STACK  , this is a full version of full stack site",
      codeLink: "https://github.com/Hassanspace/bookstore.git",
      liveDemoLink: "",
      category: "mern",
      date: "Aug 2024 - Aug 2024",
      technologies: [
        { name: "React", image: "/icons/react.png" },
        { name: "Tailwind CSS", image: "/icons/tailwind.png" },
        { name: "nodejs", image: "/icons/nodejs.png" },
        { name: "expressjs", image: "/icons/expressjs.png" },
        { name: "mongodb", image: "/icons/mongodb.png" },
      ],
    },
  ];

  // Filter projects based on the selected tab
  const filterProjects = (category) => {
    return projectsData.filter((project) => project.category === category);
  };

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="flex flex-col items-center justify-center p-6">
      <div className="flex mb-6 border border-blue-700 rounded-lg p-3">
        <button
          className={`py-2 px-4 text-xs md:text-sm font-medium transition-colors duration-300 ${
            activeTab === "html-css-js"
              ? "border-b-2 rounded-lg border-blue-500 text-white bg-blue-700"
              : "text-white hover:text-blue-500"
          }`}
          onClick={() => handleTabClick("html-css-js")}
        >
          HTML - CSS - JS
        </button>
        <button
          className={`py-2 px-4 text-xs md:text-sm font-medium transition-colors duration-300 ${
            activeTab === "react-tailwind"
              ? "border-b-2 rounded-lg border-blue-500 text-white bg-blue-700"
              : "text-white hover:text-blue-500"
          }`}
          onClick={() => handleTabClick("react-tailwind")}
        >
          React - Tailwind
        </button>
        <button
          className={`py-2 px-4 text-xs md:text-sm font-medium transition-colors duration-300 ${
            activeTab === "mern"
              ? "border-b-2 rounded-lg border-blue-500 text-white bg-blue-700"
              : "text-white hover:text-blue-500"
          }`}
          onClick={() => handleTabClick("mern")}
        >
          MERN Stack
        </button>
      </div>

      {/* Tab Content */}
      {activeTab && (
        <div className=" w-full flex flex-wrap justify-center  bg-transparent backdrop-blur-sm bg-opacity-30 shadow-md rounded-lg">
          {filterProjects(activeTab).map((project) => (
            <ProjectCard
              key={project.id}
              image={project.image}
              name={project.name}
              live={project.live}
              description={project.description}
              codeLink={project.codeLink}
              liveDemoLink={project.liveDemoLink}
              date={project.date}
              technologies={project.technologies}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Projects;
