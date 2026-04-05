import React, { useState } from 'react';
import SectionHeader from './SectionHeader';
import './Skills.css';

const SKILL_CATEGORIES = [
  {
    id: 'languages',
    label: 'Languages',
    icon: '{ }',
    color: '#7c3aed',
    skills: [
      { name: 'C#', level: 90 },
      { name: 'JavaScript', level: 82 },
      { name: 'SQL', level: 88 },
    ],
  },
  {
    id: 'frontend',
    label: 'Frontend',
    icon: '< />',
    color: '#06b6d4',
    skills: [
      { name: 'React.js', level: 78 },
      { name: 'HTML & CSS', level: 90 },
      { name: 'Bootstrap', level: 88 },
      { name: 'jQuery', level: 82 },
      { name: 'AJAX', level: 80 },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    icon: '⚙',
    color: '#f59e0b',
    skills: [
      { name: 'ASP.NET MVC', level: 92 },
      { name: '.NET Core', level: 88 },
      { name: 'Web API', level: 87 },
      { name: 'SignalR', level: 72 },
      { name: 'JWT Auth', level: 80 },
    ],
  },
  {
    id: 'database',
    label: 'Database',
    icon: '🗄',
    color: '#10b981',
    skills: [
      { name: 'SQL Server', level: 90 },
      { name: 'MySQL', level: 78 },
      { name: 'Stored Proc.', level: 85 },
      { name: 'LINQ', level: 82 },
    ],
  },
  {
    id: 'tools',
    label: 'Tools & DevOps',
    icon: '🔧',
    color: '#ec4899',
    skills: [
      { name: 'Visual Studio', level: 92 },
      { name: 'Git & GitHub', level: 82 },
      { name: 'IIS Deployment', level: 85 },
      { name: 'REST API', level: 88 },
    ],
  },
];

const SkillBar = ({ name, level, color }) => (
  <div className="skill-bar">
    <div className="skill-bar__header">
      <span className="skill-bar__name">{name}</span>
      <span className="skill-bar__level">{level}%</span>
    </div>
    <div className="skill-bar__track">
      <div
        className="skill-bar__fill"
        style={{ '--fill-width': `${level}%`, '--fill-color': color }}
      />
    </div>
  </div>
);

const Skills = () => {
  const [active, setActive] = useState('backend');
  const current = SKILL_CATEGORIES.find(c => c.id === active);

  return (
    <section className="skills section-padding" id="skills">
      <div className="section-container">
        <SectionHeader
          tag="Tech Stack"
          title="Skills & Technologies"
          subtitle="Technologies I use to build scalable, production-ready applications"
        />

        <div className="skills__layout">
          {/* Category tabs */}
          <div className="skills__tabs">
            {SKILL_CATEGORIES.map(cat => (
              <button
                key={cat.id}
                className={`skills__tab ${active === cat.id ? 'active' : ''}`}
                onClick={() => setActive(cat.id)}
                style={{ '--tab-color': cat.color }}
              >
                <span className="skills__tab-icon">{cat.icon}</span>
                <span>{cat.label}</span>
              </button>
            ))}
          </div>

          {/* Skill bars panel */}
          <div className="skills__panel">
            <div className="skills__panel-header">
              <h3 className="skills__panel-title" style={{ color: current.color }}>
                {current.label}
              </h3>
              <span className="skills__panel-count">{current.skills.length} skills</span>
            </div>
            <div className="skills__bars">
              {current.skills.map(skill => (
                <SkillBar key={skill.name} {...skill} color={current.color} />
              ))}
            </div>
          </div>
        </div>

        {/* Tech pills */}
        <div className="skills__pills">
          {[
            'C#', '.NET Core', 'ASP.NET MVC', 'Web API', 'SQL Server',
            'React.js', 'JavaScript', 'Bootstrap', 'jQuery', 'LINQ',
            'JWT', 'SignalR', 'IIS', 'Git', 'REST API', 'AJAX',
          ].map(tech => (
            <span key={tech} className="skills__pill">{tech}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
