import React, { useState } from 'react';
import './Skills.css'; // Import the CSS file

const Skills = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  const tabs = {
    tab1: [
      { name: 'HTML', percentage: '90%', color: 'blue-500', image: 'html.png' },
      { name: 'CSS', percentage: '95%', color: 'blue-700', image: 'css.png' },
      { name: 'JavaScript', percentage: '80%', color: 'blue-700', image: 'javascript.png' },
      { name: 'Bootstrap', percentage: '85%', color: 'blue-700', image: 'bootstrap.png' },
      { name: 'React', percentage: '85%', color: 'blue-900', image: 'react.png' },
      { name: 'Tailwind CSS', percentage: '90%', color: 'blue-900', image: 'tailwind.png' },
    ],
    tab2: [
      { name: 'Node.js', percentage: '80%', color: 'green-600', image: 'nodejs.png' },
      { name: 'Express.js', percentage: '75%', color: 'green-600', image: 'expressjs.png' },
      { name: 'MongoDB', percentage: '70%', color: 'green-600', image: 'mongodb.png' },
      { name: 'Firebase', percentage: '65%', color: 'green-600', image: 'firebase.png' },
    ],
    tab3: [
      { name: 'Git', percentage: '85%', color: 'blue-700', image: 'git.png' },
      { name: 'GitHub', percentage: '85%', color: 'blue-500', image: 'github.png' },
      { name: 'VS Code', percentage: '90%', color: 'blue-900', image: 'vscode.png' },
      { name: 'Postman', percentage: '80%', color: 'blue-700', image: 'postman.png' },
    ],
  };

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="skills-container">
      <div className="tab-buttons">
        <button
          className={`tab-button ${activeTab === 'tab1' ? 'active' : ''}`}
          onClick={() => handleTabClick('tab1')}
        >
          Frontend
        </button>
        <button
          className={`tab-button ${activeTab === 'tab2' ? 'active' : ''}`}
          onClick={() => handleTabClick('tab2')}
        >
          Backend
        </button>
        <button
          className={`tab-button ${activeTab === 'tab3' ? 'active' : ''}`}
          onClick={() => handleTabClick('tab3')}
        >
          Others
        </button>
      </div>

      <div className="skills-list">
        {tabs[activeTab].map((skill, index) => (
          <div key={index} className="skill-item">
            <img src={`/icons/${skill.image}`} alt={skill.name} className="skill-image" />
            <div className="skill-name">{skill.name}</div>
            <div className="skill-bar-container">
              <div
                className={`skill-bar bg-${skill.color}`}
                style={{ width: skill.percentage }}
              >
                <span className="skill-percentage">{skill.percentage}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
