import React from 'react';
import './GlassCard.css';

export const GlassCard = ({
  children,
  className = '',
  hoverEffect = true,
  padding = 'normal', // normal | compact | relaxed
  onClick,
  ...props
}) => {
  const hoverClass = hoverEffect ? 'glass-card-hover' : '';
  const paddingClass = `glass-card-padding-${padding}`;

  return (
    <div
      className={`glass-card ${hoverClass} ${paddingClass} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </div>
  );
};
