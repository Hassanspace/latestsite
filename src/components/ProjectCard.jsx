import React from 'react';


const ProjectCard = ({ image, name, live, description, codeLink, liveDemoLink, date , technologies }) => {
  return (
    <div className="max-w-sm w-full h-[500px] rounded-lg overflow-hidden shadow-lg bg-black bg-opacity-40 backdrop-blur-lg m-4 flex flex-col">
      <div className="relative w-full h-2/3 p-4 rounded">
        <img className="w-full h-full object-cover rounded-xl" src={image} alt={`${name} Project`} />
      </div>
      <div className="px-6 py-4 flex-1 flex flex-col">
        <div className="flex items-center justify-between mb-2">
          <h2 className="font-bold text-xl text-gray-300">{name}</h2>
          <span className={`${
            live ? 'bg-green-600' : 'bg-red-600'
          } text-white text-xs font-semibold px-2 py-1 rounded-lg`}>
            {live ? 'Live' : 'Not Live'}
          </span>
        </div>
        <p className="text-gray-400 text-sm mb-4 text-start">{date}</p> {/* Display project date */}
        <p className="text-gray-300 text-base flex-1 mb-2 text-start">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <img
              key={index}
              src={tech.image}
              alt={tech.name}
              className="w-8 h-8 object-contain rounded-[50%] "
              title={tech.name}
            />
          ))}
        </div>
       
        
        <div className="pt-4 flex justify-between">
          <a href={codeLink} target="_blank" rel="noopener noreferrer"
             className="inline-block bg-gradient-to-r from-blue-800 via-blue-700 to-blue-600 text-white text-sm px-4 py-2 rounded-lg hover:from-blue-900 hover:via-blue-800 hover:to-blue-700 transition">
            View Code
          </a>
          {liveDemoLink && (
            <a href={liveDemoLink} target="_blank" rel="noopener noreferrer"
               className="inline-block bg-gradient-to-r from-blue-800 via-blue-700 to-blue-600 text-white text-sm px-4 py-2 rounded-lg hover:from-blue-900 hover:via-blue-800 hover:to-blue-700 transition">
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
