import React, { useState } from 'react';
import SectionHeader from './SectionHeader';
import './Experience.css';

const EXPERIENCES = [
  {
    id: 'technosys',
    role: 'Junior Full Stack .NET Developer',
    company: 'Technosys Services Pvt. Ltd.',
    location: 'Lucknow, Uttar Pradesh',
    period: '2023 – Present',
    type: 'Full-time',
    current: true,
    description:
      'Working on enterprise and government web applications in a fast-paced agile environment. Responsible for full-cycle development from requirement analysis to production deployment.',
    highlights: [
      'Developed and maintained enterprise & government web applications using ASP.NET MVC, .NET Core, SQL Server, JavaScript, Bootstrap, and C#',
      'Built frontend modules and integrated backend APIs for smooth real-time data operations',
      'Designed and optimized SQL queries, stored procedures, and complex database operations',
      'Worked on RESTful API integration for real-time data exchange between services',
      'Deployed live applications on IIS with HTTPS configuration and SSL certificates',
      'Fixed production issues and implemented new feature enhancements under tight deadlines',
      'Participated in agile development process with sprint-based delivery and code reviews',
    ],
    tech: ['ASP.NET MVC', '.NET Core', 'Web API', 'SQL Server', 'React.js', 'JavaScript', 'Bootstrap', 'C#', 'IIS', 'Git'],
  },
  {
    id: 'softpro',
    role: 'Apprenticeship Trainee – .NET Development',
    company: 'Softpro India Computer Technologies Pvt. Ltd.',
    location: 'Lucknow, Uttar Pradesh',
    period: '2022',
    type: 'Apprenticeship',
    current: false,
    description:
      'Completed a structured apprenticeship focused on web development fundamentals, software development workflows, and project execution practices.',
    highlights: [
      'Worked on PHP web development and MySQL database operations',
      'Learned software development workflow, version control, and project execution',
      'Gained hands-on experience in full-stack web development practices',
      'Collaborated with senior developers on real-world web projects',
    ],
    tech: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
  },
];

const Experience = () => {
  const [active, setActive] = useState('technosys');
  const exp = EXPERIENCES.find(e => e.id === active);

  return (
    <section className="experience section-padding" id="experience">
      <div className="section-container">
        <SectionHeader
          tag="Career"
          title="Work Experience"
          subtitle="My professional journey and the impact I've delivered"
        />

        <div className="exp__layout">
          {/* Company tabs */}
          <div className="exp__sidebar">
            {EXPERIENCES.map(e => (
              <button
                key={e.id}
                className={`exp__tab ${active === e.id ? 'active' : ''}`}
                onClick={() => setActive(e.id)}
              >
                <div className="exp__tab-top">
                  <span className="exp__tab-company">{e.company}</span>
                  {e.current && <span className="exp__tab-badge">Current</span>}
                </div>
                <span className="exp__tab-period">{e.period}</span>
              </button>
            ))}
          </div>

          {/* Detail panel */}
          <div className="exp__detail" key={active}>
            <div className="exp__detail-header">
              <div>
                <h3 className="exp__role">{exp.role}</h3>
                <div className="exp__meta">
                  <span className="exp__company">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                    {exp.company}
                  </span>
                  <span className="exp__location">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                    {exp.location}
                  </span>
                  <span className="exp__type">{exp.type}</span>
                </div>
              </div>
              <div className="exp__period-badge">{exp.period}</div>
            </div>

            <p className="exp__description">{exp.description}</p>

            <h4 className="exp__highlights-title">Key Responsibilities</h4>
            <ul className="exp__highlights">
              {exp.highlights.map((h, i) => (
                <li key={i} className="exp__highlight">
                  <span className="exp__highlight-dot" />
                  {h}
                </li>
              ))}
            </ul>

            <div className="exp__tech">
              <span className="exp__tech-label">Technologies Used:</span>
              <div className="exp__tech-pills">
                {exp.tech.map(t => (
                  <span key={t} className="exp__tech-pill">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
