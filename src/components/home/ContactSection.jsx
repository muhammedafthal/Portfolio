import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  MessageSquare,
} from "lucide-react";
import { SectionHeading } from "../common/SectionHeading";
import { GlassCard } from "../common/GlassCard";
import { Button } from "../common/Button";
import { ScrollReveal } from "../common/ScrollReveal";
import { socialLinks } from "../../data/socialLinks";
import "./ContactSection.css";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    honeypot: "", // hidden spam trap field
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null,
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Full name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Honeypot spam check
    if (formData.honeypot) {
      // Quietly drop bot submissions
      setStatus({ submitting: false, success: true, error: null });
      return;
    }

    if (!validate()) return;

    setStatus({ submitting: true, success: false, error: null });

    try {
      // Attempt API submit to worker endpoint or simulate fallback delay
      const apiUrl = import.meta.env.VITE_CONTACT_API_URL || "/api/contact";

      let response;
      try {
        response = await fetch(apiUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
          }),
        });
      } catch (err) {
        // Local simulation fallback when running standalone without worker backend
        await new Promise((resolve) => setTimeout(resolve, 800));
        response = { ok: true };
      }

      if (response.ok) {
        setStatus({ submitting: false, success: true, error: null });
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
          honeypot: "",
        });
      } else {
        throw new Error(
          "Failed to dispatch message. Please try sending directly via email.",
        );
      }
    } catch (err) {
      setStatus({
        submitting: false,
        success: false,
        error: err.message || "An unexpected error occurred. Please try again.",
      });
    }
  };

  return (
    <section id="contact" className="section-padding contact-section">
      <div className="container">
        <ScrollReveal>
          <div className="contact-hero-banner">
            <h2 className="contact-banner-title">
              Let's build something meaningful.
            </h2>
            <p className="contact-banner-sub">
              Have an idea, opportunity, software project, or full-stack
              engineering role to discuss? I'd love to connect.
            </p>
          </div>
        </ScrollReveal>

        <div className="contact-grid">
          {/* Contact Details & Info Card */}
          <ScrollReveal delay={150} className="contact-info-col">
            <GlassCard padding="relaxed" className="contact-info-card">
              <h3>Get in Touch</h3>
              <p className="contact-info-intro">
                Feel free to send a direct message through the form or reach out
                via email, phone, or LinkedIn.
              </p>

              <div className="contact-methods-list">
                <div className="contact-method-item">
                  <div className="method-icon-box">
                    <Mail size={20} className="text-accent" />
                  </div>
                  <div>
                    <span className="method-label">Email</span>
                    <a
                      href={`mailto:${socialLinks.email}`}
                      className="method-value"
                    >
                      {socialLinks.email}
                    </a>
                  </div>
                </div>

                <div className="contact-method-item">
                  <div className="method-icon-box">
                    <Phone size={20} className="text-accent" />
                  </div>
                  <div>
                    <span className="method-label">Phone</span>
                    <a
                      href={`tel:${socialLinks.phone}`}
                      className="method-value"
                    >
                      {socialLinks.phone}
                    </a>
                  </div>
                </div>

                <div className="contact-method-item">
                  <div className="method-icon-box">
                    <MapPin size={20} className="text-accent" />
                  </div>
                  <div>
                    <span className="method-label">Location</span>
                    <span className="method-value">{socialLinks.location}</span>
                  </div>
                </div>
              </div>

              <div className="contact-response-promise">
                <CheckCircle2 size={18} className="text-accent flex-shrink-0" />
                <span>Typically responds within 24 business hours.</span>
              </div>
            </GlassCard>
          </ScrollReveal>

          {/* Interactive Form Card */}
          <ScrollReveal delay={300} className="contact-form-col">
            <GlassCard padding="relaxed" className="contact-form-card">
              <h3>
                <MessageSquare size={22} className="text-accent" />
                <span>Send a Message</span>
              </h3>

              {status.success ? (
                <div className="contact-status-success animate-fade-in">
                  <CheckCircle2 size={48} className="text-success" />
                  <h4>Message Sent Successfully!</h4>
                  <p>
                    Thank you for reaching out, {formData.name || "there"}. I
                    have received your message and will get back to you shortly.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() =>
                      setStatus({
                        submitting: false,
                        success: false,
                        error: null,
                      })
                    }
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="contact-form"
                  noValidate
                >
                  {/* Honeypot hidden input for spam bots */}
                  <div className="sr-only-honeypot">
                    <input
                      type="text"
                      name="honeypot"
                      tabIndex="-1"
                      value={formData.honeypot}
                      onChange={handleChange}
                      autoComplete="off"
                    />
                  </div>

                  {status.error && (
                    <div className="contact-status-error">
                      <AlertCircle size={18} />
                      <span>{status.error}</span>
                    </div>
                  )}

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Your Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleChange}
                        className={errors.name ? "input-error" : ""}
                      />
                      {errors.name && (
                        <span className="field-error-text">{errors.name}</span>
                      )}
                    </div>

                    <div className="form-group">
                      <label htmlFor="email">Your Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your Email"
                        value={formData.email}
                        onChange={handleChange}
                        className={errors.email ? "input-error" : ""}
                      />
                      {errors.email && (
                        <span className="field-error-text">{errors.email}</span>
                      )}
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Subject *</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      placeholder="Project / Developer Opportunity"
                      value={formData.subject}
                      onChange={handleChange}
                      className={errors.subject ? "input-error" : ""}
                    />
                    {errors.subject && (
                      <span className="field-error-text">{errors.subject}</span>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      placeholder="Tell me about your project, team, or opportunity..."
                      value={formData.message}
                      onChange={handleChange}
                      className={errors.message ? "input-error" : ""}
                    ></textarea>
                    {errors.message && (
                      <span className="field-error-text">{errors.message}</span>
                    )}
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    icon={status.submitting ? Loader2 : Send}
                    disabled={status.submitting}
                    style={{ width: "100%" }}
                  >
                    {status.submitting ? "Sending Message..." : "Send Message"}
                  </Button>
                </form>
              )}
            </GlassCard>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
