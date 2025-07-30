import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import './Contact.css';

const Contact: React.FC = () => {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }, 1000);
  };

  return (
    <div className={`contact-page contact-${theme}`}>
      <div className="contact-hero">
        <h1 className="contact-title">Get in Touch</h1>
        <p className="contact-subtitle">
          Have questions about our theme switcher? We'd love to hear from you!
        </p>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <h2>Contact Information</h2>
          <div className="info-grid">
            <div className="info-item">
              <h3>Email</h3>
              <p>patidarutkarsh9@gmail.com</p>
            </div>
            <div className="info-item">
              <h3>Phone</h3>
              <p>+91 7000025951</p>
            </div>
            <div className="info-item">
              <h3>Address</h3>
              <p>B 101 Wakad<br />Pune, Maharashtra, India</p>
            </div>
            <div className="info-item">
              <h3>Hours</h3>
              <p>Monday - Friday<br />9:00 AM - 6:00 PM</p>
            </div>
          </div>
        </div>

        <div className="contact-form-container">
          <h2>Send us a Message</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={5}
                className="form-textarea"
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="submit-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>

            {submitStatus === 'success' && (
              <div className="success-message">
                Thank you! Your message has been sent successfully.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="error-message">
                Sorry, there was an error sending your message. Please try again.
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact; 