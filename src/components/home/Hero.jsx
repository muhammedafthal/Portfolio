import React from "react";
import { Download, ArrowDown, ArrowUpRight } from "lucide-react";
import { Button } from "../common/Button";
import { ScrollReveal } from "../common/ScrollReveal";
import "./Hero.css";

export const Hero = ({ onOpenResume }) => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-inner container">
        {/* Left Vertical Indicator Bar */}
        <div className="hero-vertical-bar">
          <span className="vertical-label">2026</span>
          <span className="vertical-line"></span>
          <span className="vertical-year">Software Developer</span>
        </div>

        {/* Main Content Area */}
        <div className="hero-main-content">
          {/* Top Stats Callouts */}
          {/* <ScrollReveal className="hero-stats-row">
            <div className="stat-item">
              <span className="stat-number">+20</span>
              <span className="stat-label">
                Projects
                <br />
                completed
              </span>
            </div>
            <div className="stat-item">
              <span className="stat-number">+3</span>
              <span className="stat-label">
                Years of
                <br />
                experience
              </span>
            </div>
          </ScrollReveal> */}
          {/* Headline Greeting */}
          <ScrollReveal delay={100} className="hero-headline-block">
            <h1 className="hero-greeting">Hello'</h1>
            <p className="hero-identity-line">
              <span className="dash-indicator">—</span> It's{" "}
              <strong>MUHAMMED AFTHAL K</strong>, A Software developer
            </p>
          </ScrollReveal>
          {/* Quick Description & Action CTAs */}
          <ScrollReveal delay={200} className="hero-bio-block">
            <p className="hero-lead-text">
              I specialize in building practical, scalable web applications,
              robust backend APIs, and modern digital software experiences.
            </p>
            <div className="hero-actions-row">
              <Button
                variant="primary"
                size="lg"
                icon={Download}
                onClick={onOpenResume}
              >
                View Resume
              </Button>
              <Button
                variant="secondary"
                size="lg"
                icon={ArrowUpRight}
                iconPosition="right"
                href="#projects"
              >
                View Projects
              </Button>
            </div>
          </ScrollReveal>
          {/* Scroll Down Indicator */}
          <ScrollReveal delay={300} className="hero-scroll-indicator">
            <a href="#about" className="scroll-down-link">
              <span>Scroll down</span>
              <ArrowDown size={14} className="scroll-icon-anim" />
            </a>
          </ScrollReveal>
        </div>

        {/* Right Editorial Portrait Container */}
        <ScrollReveal delay={150} className="hero-portrait-column">
          <div className="hero-portrait-wrapper">
            <img
              src="/assets/images/profile/portfolio-profile-1.png"
              alt="Muhammed Afthal k - Software Developer"
              className="hero-portrait-img"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
