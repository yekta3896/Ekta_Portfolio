import React from 'react';
import './SectionHeader.css';

const SectionHeader = ({ tag, title, subtitle }) => (
  <div className="section-header">
    <span className="section-header__tag">{tag}</span>
    <h2 className="section-header__title">{title}</h2>
    {subtitle && <p className="section-header__subtitle">{subtitle}</p>}
  </div>
);

export default SectionHeader;
