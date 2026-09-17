import React from "react";
import { X, FileText, ChevronRight } from "lucide-react";
import { navLinks } from "../../data/navigation";
import { Button } from "../common/Button";
import "./MobileMenu.css";

export const MobileMenu = ({
  isOpen,
  onClose,
  onOpenResume,
  activeSection,
}) => {
  if (!isOpen) return null;

  const handleNavClick = (href) => {
    onClose();
    if (href.startsWith("#")) {
      const element = document.getElementById(href.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className="mobile-drawer-backdrop" onClick={onClose}>
      <div
        className="mobile-drawer glass-card"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mobile-drawer-header">
          <div className="logo-badge">MA</div>
          <span className="mobile-drawer-title">Navigation</span>
          <button
            className="drawer-close-btn"
            onClick={onClose}
            aria-label="Close navigation drawer"
          >
            <X size={22} />
          </button>
        </div>

        <nav className="mobile-drawer-nav">
          <ul>
            {navLinks.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`mobile-nav-link ${isActive ? "mobile-nav-link-active" : ""}`}
                    onClick={() => handleNavClick(link.href)}
                  >
                    <span>{link.name}</span>
                    <ChevronRight size={18} className="mobile-nav-chevron" />
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="mobile-drawer-footer">
          <Button
            variant="primary"
            size="lg"
            icon={FileText}
            onClick={() => {
              onClose();
              onOpenResume();
            }}
            style={{ width: "100%" }}
          >
            View / Download Resume
          </Button>
        </div>
      </div>
    </div>
  );
};
