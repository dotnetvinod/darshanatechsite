import { useState } from 'react';
import AnimatedIllustration from '../components/AnimatedIllustration';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production, connect to backend/API
    alert('Thank you! We will get back to you soon.');
    setFormData({ name: '', email: '', company: '', subject: '', message: '' });
  };

  const contactInfo = [
    { icon: '📧', label: 'Email', value: 'hello@darshanatech.io' },
    { icon: '📞', label: 'Phone', value: '+1 (555) 123-4567' },
    { icon: '📍', label: 'Office', value: '123 Innovation Drive, Tech Park' },
  ];

  return (
    <div className="contact">
      <section className="contact-hero">
        <div className="container">
          <span className="page-badge">Contact Us</span>
          <h1 className="page-title">
            Let's Build Something
            <span className="gradient-text"> Together</span>
          </h1>
          <p className="page-desc">
            Have a project in mind? We'd love to hear from you. Reach out and our team will
            get back within 24 hours.
          </p>
        </div>
      </section>

      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <div className="contact-illustration">
                <AnimatedIllustration type="contact" className="contact-illus" />
              </div>
              <h2>Get in Touch</h2>
              <p>
                Whether you need a custom SaaS solution or want to explore our services,
                we're here to help:
              </p>
              <ul className="contact-bullets">
                <li><span className="bullet">•</span> Free consultation & quote</li>
                <li><span className="bullet">•</span> 24-hour response time</li>
                <li><span className="bullet">•</span> Dedicated project support</li>
              </ul>
              <div className="info-list">
                {contactInfo.map((item, i) => (
                  <div key={i} className="info-item">
                    <span className="info-icon">{item.icon}</span>
                    <div>
                      <span className="info-label">{item.label}</span>
                      <span className="info-value">{item.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="you@company.com"
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="company">Company</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your company"
                />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a topic</option>
                  <option value="general">General Inquiry</option>
                  <option value="services">Services & Solutions</option>
                  <option value="partnership">Partnership</option>
                  <option value="support">Technical Support</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Tell us about your project..."
                />
              </div>
              <button type="submit" className="btn btn-primary btn-lg btn-full">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
