import React from 'react';
import SectionHeader from './SectionHeader';
import './Education.css';

const EDUCATION = [
  {
    degree: 'B.Tech in Information Technology',
    institution: 'Dr. A.P.J. Abdul Kalam Technical University',
    location: 'Lucknow, Uttar Pradesh',
    period: '2023 – 2025',
    icon: '🎓',
    color: '#7c3aed',
    highlights: [
      'Focused on software engineering, database management, and web technologies',
      'Applied academic knowledge in real-world enterprise projects at Technosys',
      'Studied algorithms, data structures, and object-oriented programming',
    ],
  },
  {
    degree: 'Diploma in Information Technology',
    institution: 'Government Polytechnic Ambedkar Nagar',
    location: 'Ambedkar Nagar, Uttar Pradesh',
    period: '2022',
    icon: '📋',
    color: '#06b6d4',
    highlights: [
      'Strong foundation in core computer science and IT concepts',
      'Gained practical skills in programming and web development',
      'Completed projects in PHP, HTML, CSS, and JavaScript',
    ],
  },
];

const Education = () => {
  return (
    <section className="education section-padding" id="education">
      <div className="section-container">
        <SectionHeader
          tag="Education"
          title="Academic Background"
          subtitle="The foundation that drives my technical expertise"
        />

        <div className="edu__timeline">
          {EDUCATION.map((edu, i) => (
            <div className="edu__item" key={i} style={{ '--edu-color': edu.color }}>
              {/* Timeline line */}
              <div className="edu__line">
                <div className="edu__dot">
                  <span>{edu.icon}</span>
                </div>
                {i < EDUCATION.length - 1 && <div className="edu__connector" />}
              </div>

              {/* Content card */}
              <div className="edu__card">
                <div className="edu__card-header">
                  <div>
                    <h3 className="edu__degree">{edu.degree}</h3>
                    <div className="edu__institution">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
                      {edu.institution}
                    </div>
                    <div className="edu__location">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                      {edu.location}
                    </div>
                  </div>
                  <div className="edu__period">{edu.period}</div>
                </div>

                <ul className="edu__highlights">
                  {edu.highlights.map((h, j) => (
                    <li key={j} className="edu__highlight">
                      <span className="edu__highlight-dot" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Strengths */}
        <div className="edu__strengths">
          <h3 className="edu__strengths-title">Additional Strengths</h3>
          <div className="edu__strengths-grid">
            {[
              { icon: '🚀', title: 'Production Experience', desc: 'Hands-on experience with live production systems serving real users' },
              { icon: '🐛', title: 'Debugging Expert', desc: 'Strong debugging and issue resolution skills for complex systems' },
              { icon: '⏱️', title: 'Deadline Oriented', desc: 'Proven ability to manage multiple tasks and deliver within deadlines' },
              { icon: '🔄', title: 'Agile Workflow', desc: 'Experienced in sprint-based delivery with regular code reviews' },
            ].map((s, i) => (
              <div className="edu__strength-card" key={i}>
                <span className="edu__strength-icon">{s.icon}</span>
                <h4 className="edu__strength-title">{s.title}</h4>
                <p className="edu__strength-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
