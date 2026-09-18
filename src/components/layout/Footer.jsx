import React from "react";
import { Mail, Phone, FileText, ArrowUp } from "lucide-react";
import { IconGithub, IconLinkedin, IconInstagram } from "../common/Icons";
import { navLinks } from "../../data/navigation";
import { socialLinks } from "../../data/socialLinks";
import { Button } from "../common/Button";
import "./Footer.css";

export const Footer = ({ onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <a href="/#hero" className="header-logo">
                <img
                  src="/assets/images/logo/portfolio-logo.png"
                  alt="Muhammed Afthal K logo"
                  className="logo-image"
                />
              </a>
            </div>
            <p className="footer-tagline">
              Software Developer focused on practical, scalable full-stack web
              applications, backend APIs, and business-oriented software
              solutions.
            </p>
            <div className="footer-socials">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <IconGithub size={20} />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <IconLinkedin size={20} />
              </a>
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <IconInstagram size={20} />
              </a>
              <a href={`mailto:${socialLinks.email}`} aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div className="footer-links-group">
            <div className="footer-column">
              <h4 className="footer-column-title">Navigation</h4>
              <ul>
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a href={link.href}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="footer-column-title">Contact Information</h4>
              <ul className="footer-contact-info">
                <li>
                  <Mail size={16} className="text-accent" />
                  <a href={`mailto:${socialLinks.email}`}>
                    {socialLinks.email}
                  </a>
                </li>
                <li>
                  <Phone size={16} className="text-accent" />
                  <a href={`tel:${socialLinks.phone}`}>{socialLinks.phone}</a>
                </li>
                <li>
                  <span className="footer-dot"></span>
                  <span>{socialLinks.location}</span>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="footer-column-title">Professional Resume</h4>
              <p className="footer-resume-desc">
                Download a clean PDF copy of my technical experience and project
                summary.
              </p>
              <Button
                variant="outline"
                size="sm"
                icon={FileText}
                onClick={onOpenResume}
              >
                View Resume PDF
              </Button>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Muhammed Afthal. All rights reserved.
          </p>
          <button
            className="scroll-top-btn"
            onClick={scrollToTop}
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};
