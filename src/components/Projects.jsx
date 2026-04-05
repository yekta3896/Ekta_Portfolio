import React, { useState } from 'react';
import SectionHeader from './SectionHeader';
import './Projects.css';

const PROJECTS = [
  {
    id: 'sgfi',
    title: 'School Games Federation of India',
    short: 'SGFI Portal',
    url: 'https://sgfi.org.in/',
    type: 'Government Portal',
    color: '#7c3aed',
    icon: '🏅',
    description:
      'A national-level sports registration and reporting portal for the School Games Federation of India. Manages athlete registrations, event tracking, and reporting for school-level sports across the country.',
    highlights: [
      'Developed registration modules for athletes and events',
      'Built dynamic reporting features with data export',
      'Managed backend integration and server-side validation',
      'Implemented role-based access control for admins',
    ],
    tech: ['ASP.NET MVC', 'SQL Server', 'JavaScript', 'Bootstrap', 'C#'],
    live: true,
  },
  {
    id: 'sird',
    title: 'State Institute of Rural Development',
    short: 'SIRD Portal',
    url: 'https://sirduptraining.in/',
    type: 'Government Training System',
    color: '#06b6d4',
    icon: '🌾',
    description:
      'A comprehensive training management system for the State Institute of Rural Development, Uttar Pradesh. Handles training programs, participant records, and report generation workflows.',
    highlights: [
      'Developed training data modules and participant management',
      'Managed automated report generation workflows',
      'Integrated Web API for data exchange with external systems',
      'Optimized SQL queries for large training datasets',
    ],
    tech: ['ASP.NET MVC', 'SQL Server', 'Web API', 'C#', 'Bootstrap'],
    live: true,
  },
  {
    id: 'mbhumi',
    title: 'Matribhumi Yojna Portal',
    short: 'Matribhumi',
    url: 'https://mbhumi.upprd.in/',
    type: 'Government Village Portal',
    color: '#10b981',
    icon: '🏘️',
    description:
      'A government portal for village development schemes under the UP Panchayati Raj Department. Facilitates citizens and officials to track village development programs and government yojanas.',
    highlights: [
      'Worked on backend functionality and module enhancement',
      'Improved performance of existing database operations',
      'Added new feature modules for tracking development activities',
      'Maintained and debugged live production issues',
    ],
    tech: ['ASP.NET MVC', 'SQL Server', 'JavaScript', 'Bootstrap', 'C#'],
    live: true,
  },
  {
    id: 'veerangna',
    title: 'Veerangna UP Portal',
    short: 'Veerangna UP',
    url: 'https://veerangnaup.in/',
    type: "Women's Safety Program",
    color: '#ec4899',
    icon: '💜',
    description:
      "A government portal supporting women's safety programs in Uttar Pradesh. Manages portal data, training records, and monitoring modules for women safety initiatives across the state.",
    highlights: [
      'Managed portal data and training records for field workers',
      'Supported monitoring modules for women safety programs',
      'Built data management workflows for reporting',
      'Maintained live production environment with zero downtime',
    ],
    tech: ['ASP.NET MVC', 'SQL Server', 'Web API', 'JavaScript', 'Bootstrap'],
    live: true,
  },
];

const ProjectCard = ({ project, isActive, onClick }) => (
  <div
    className={`project-card ${isActive ? 'active' : ''}`}
    onClick={onClick}
    style={{ '--card-color': project.color }}
    data-hover
  >
    <div className="project-card__top">
      <span className="project-card__icon">{project.icon}</span>
      <div className="project-card__badges">
        <span className="project-card__type">{project.type}</span>
        {project.live && <span className="project-card__live">● Live</span>}
      </div>
    </div>
    <h3 className="project-card__title">{project.short}</h3>
    <p className="project-card__desc">{project.description.slice(0, 100)}...</p>
    <div className="project-card__techs">
      {project.tech.slice(0, 3).map(t => (
        <span key={t} className="project-card__tech">{t}</span>
      ))}
      {project.tech.length > 3 && (
        <span className="project-card__tech">+{project.tech.length - 3}</span>
      )}
    </div>
    <div className="project-card__arrow">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
    </div>
  </div>
);

const Projects = () => {
  const [active, setActive] = useState(PROJECTS[0].id);
  const project = PROJECTS.find(p => p.id === active);

  return (
    <section className="projects section-padding" id="projects">
      <div className="section-container">
        <SectionHeader
          tag="Portfolio"
          title="Featured Projects"
          subtitle="Live government and enterprise web applications I've built and maintained"
        />

        <div className="projects__layout">
          {/* Cards grid */}
          <div className="projects__grid">
            {PROJECTS.map(p => (
              <ProjectCard
                key={p.id}
                project={p}
                isActive={active === p.id}
                onClick={() => setActive(p.id)}
              />
            ))}
          </div>

          {/* Detail panel */}
          <div className="projects__detail" key={active} style={{ '--detail-color': project.color }}>
            <div className="projects__detail-header">
              <div className="projects__detail-icon">{project.icon}</div>
              <div>
                <h3 className="projects__detail-title">{project.title}</h3>
                <div className="projects__detail-meta">
                  <span className="projects__detail-type">{project.type}</span>
                  {project.live && (
                    <span className="projects__detail-live">
                      <span className="projects__live-dot" />
                      Live Production
                    </span>
                  )}
                </div>
              </div>
            </div>

            <p className="projects__detail-desc">{project.description}</p>

            <div className="projects__detail-section">
              <h4 className="projects__detail-subtitle">What I Built</h4>
              <ul className="projects__detail-list">
                {project.highlights.map((h, i) => (
                  <li key={i} className="projects__detail-item">
                    <span className="projects__item-dot" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            <div className="projects__detail-section">
              <h4 className="projects__detail-subtitle">Tech Stack</h4>
              <div className="projects__detail-tech">
                {project.tech.map(t => (
                  <span key={t} className="projects__detail-pill">{t}</span>
                ))}
              </div>
            </div>

            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="projects__detail-link"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              View Live Site
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
