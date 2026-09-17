import React from 'react';
import { X, Download, FileText, CheckCircle2, Briefcase, GraduationCap, Code } from 'lucide-react';
import { Button } from './Button';
import { socialLinks } from '../../data/socialLinks';
import './ResumeModal.css';

export const ResumeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content glass-card" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-title-group">
            <div className="modal-icon-badge">
              <FileText size={24} className="text-accent" />
            </div>
            <div>
              <h3>Muhammed Afthal — Professional Resume</h3>
              <p className="modal-subtitle">Software Developer • Full-Stack & Node.js Developer</p>
            </div>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
            <X size={20} />
          </button>
        </div>

        <div className="modal-body">
          <div className="resume-preview-summary">
            <div className="resume-section">
              <h4><Code size={18} className="text-accent" /> Technical Expertise</h4>
              <p>Specialized in building end-to-end full-stack web applications, REST APIs, and multi-tenant systems.</p>
              <div className="resume-tags">
                <span>JavaScript (ES6+)</span>
                <span>TypeScript</span>
                <span>Node.js</span>
                <span>Express.js</span>
                <span>React.js</span>
                <span>MongoDB</span>
                <span>MySQL</span>
                <span>PHP</span>
                <span className="tag-exploring">Python (Exploring)</span>
              </div>
            </div>

            <div className="resume-section">
              <h4><Briefcase size={18} className="text-accent" /> Experience Summary</h4>
              <ul className="resume-bullets">
                <li><strong>Current Full-Stack Developer Intern:</strong> Developing Node.js/Express APIs, MongoDB models, and React UI components.</li>
                <li><strong>9-Month Software Developer Internship:</strong> Built commercial web portals, implemented RBAC middleware, and optimized MySQL queries.</li>
              </ul>
            </div>

            <div className="resume-section">
              <h4><GraduationCap size={18} className="text-accent" /> Education</h4>
              <p><strong>Bachelor of Computer Applications (BCA):</strong> Comprehensive training in Data Structures, Database Systems, and Web Application Architecture.</p>
            </div>
          </div>
        </div>

        <div className="modal-footer">
          <Button variant="secondary" onClick={onClose}>
            Close Preview
          </Button>
          <Button
            variant="primary"
            icon={Download}
            href={socialLinks.resumePdf}
            download="Muhammed_Afthal_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download PDF Resume
          </Button>
        </div>
      </div>
    </div>
  );
};
