import React from 'react';
import SectionHeader from './SectionHeader';
import './About.css';

const About = () => {
  return (
    <section className="about section-padding" id="about">
      <div className="section-container">
        <SectionHeader
          tag="About Me"
          title="Who I Am"
          subtitle="A passionate developer building meaningful digital experiences"
        />

        <div className="about__grid">
          {/* Avatar / Visual */}
          <div className="about__visual">
            <div className="about__avatar-wrap">
              <div className="about__avatar">
                <span>EY</span>
              </div>
              <div className="about__avatar-ring about__avatar-ring--1" />
              <div className="about__avatar-ring about__avatar-ring--2" />

              {/* Floating badges */}
              <div className="about__float about__float--1">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
                <span>.NET Core</span>
              </div>
              <div className="about__float about__float--2">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>
                <span>SQL Server</span>
              </div>
              <div className="about__float about__float--3">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                <span>React.js</span>
              </div>
            </div>

            <div className="about__location">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              Lucknow, Uttar Pradesh
            </div>
          </div>

          {/* Content */}
          <div className="about__content">
            <p className="about__intro">
              I'm a <span className="about__highlight">Full Stack .NET Developer</span> with over
              3 years of hands-on experience in building enterprise-grade and government web
              applications. I specialize in transforming complex requirements into clean,
              scalable software solutions.
            </p>
            <p className="about__text">
              Currently working at <span className="about__highlight">Technosys Services Pvt. Ltd.</span>,
              Lucknow, where I develop and maintain live production systems used by thousands of users.
              My work spans from backend API development to frontend UI integration and database optimization.
            </p>
            <p className="about__text">
              I'm driven by the impact of building systems that matter — from sports management
              portals to government rural development platforms. I thrive in agile environments
              and take pride in clean code and reliable delivery.
            </p>

            <div className="about__highlights">
              {[
                { icon: '🏢', label: 'Enterprise & Govt Projects' },
                { icon: '⚡', label: 'Agile Sprint Delivery' },
                { icon: '🔧', label: 'Live Production Debugging' },
                { icon: '🚀', label: 'IIS Deployment & HTTPS Config' },
              ].map((item, i) => (
                <div className="about__highlight-chip" key={i}>
                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>

            <div className="about__actions">
              <a
                href="mailto:yekta3896@gmail.com"
                className="about__btn"
              >
                Let's Connect
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </a>
              <a
                href="https://www.linkedin.com/in/ekta-yadav-1a8027256"
                target="_blank"
                rel="noreferrer"
                className="about__btn about__btn--outline"
              >
                LinkedIn Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
