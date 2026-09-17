import React from 'react';
import './SectionHeading.css';

export const SectionHeading = ({
  tag,
  title,
  subtitle,
  align = 'center', // center | left
  className = ''
}) => {
  return (
    <div className={`section-heading section-heading-${align} ${className}`}>
      {tag && <span className="label-badge section-heading-tag">{tag}</span>}
      {title && <h2 className="section-heading-title">{title}</h2>}
      {subtitle && <p className="section-heading-subtitle">{subtitle}</p>}
    </div>
  );
};
