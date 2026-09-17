import React, { useState, useEffect } from "react";
import { Menu, X, FileText, ArrowUpRight } from "lucide-react";
import { navLinks } from "../../data/navigation";
import { Button } from "../common/Button";
import { MobileMenu } from "./MobileMenu";
import "./Header.css";

export const Header = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Active section detection
      const sections = navLinks.map((link) => link.href.replace("#", ""));
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={`header ${isScrolled ? "header-scrolled" : ""}`}>
        <div className="container header-container">
          <a href="/#hero" className="header-logo">
            <img
              src="/assets/images/logo/portfolio-logo.png"
              alt="Muhammed Afthal K logo"
              className="logo-image"
            />
          </a>

          {/* Desktop Nav */}
          <nav className="header-nav">
            <ul className="nav-list">
              {navLinks.map((link) => {
                const sectionId = link.href.replace("#", "");
                const isActive = activeSection === sectionId;
                return (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className={`nav-link ${isActive ? "nav-link-active" : ""}`}
                    >
                      {link.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Action CTAs */}
          <div className="header-actions">
            {/* <Button
              variant="outline"
              size="sm"
              icon={FileText}
              onClick={onOpenResume}
            >
              Resume
            </Button> */}
            <Button
              variant="primary"
              size="sm"
              icon={ArrowUpRight}
              iconPosition="right"
              href="#contact"
              className="header-cta-btn"
            >
              Get in touch
            </Button>
            <button
              className="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open mobile navigation menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onOpenResume={onOpenResume}
        activeSection={activeSection}
      />
    </>
  );
};
