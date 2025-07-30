import React from 'react';
import { useTheme } from '../context/ThemeContext';
import './About.css';

const About: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className={`about-page about-${theme}`}>
      <div className="about-hero">
        <h1 className="about-title">About Our Theme Switcher</h1>
        <p className="about-subtitle">
          A modern React application showcasing the power of dynamic theming
        </p>
      </div>

      <div className="about-content">
        <section className="about-section">
          <h2>Our Mission</h2>
          <p>
            We believe that user experience should be personalized and adaptable. 
            Our multi-theme switcher demonstrates how modern web applications can 
            provide different visual experiences while maintaining functionality and 
            accessibility across all themes.
          </p>
        </section>

        <section className="about-section">
          <h2>Technology Stack</h2>
          <div className="tech-grid">
            <div className="tech-item">
              <h3>React 18</h3>
              <p>Modern React with hooks and functional components</p>
            </div>
            <div className="tech-item">
              <h3>TypeScript</h3>
              <p>Type-safe development for better code quality</p>
            </div>
            <div className="tech-item">
              <h3>React Router</h3>
              <p>Client-side routing for seamless navigation</p>
            </div>
            <div className="tech-item">
              <h3>Context API</h3>
              <p>Global state management for theme switching</p>
            </div>
            <div className="tech-item">
              <h3>CSS Custom Properties</h3>
              <p>Dynamic theming with CSS variables</p>
            </div>
            <div className="tech-item">
              <h3>Responsive Design</h3>
              <p>Mobile-first approach for all devices</p>
            </div>
          </div>
        </section>

        <section className="about-section">
          <h2>Theme Features</h2>
          <div className="features-list">
            <div className="feature-item">
              <h3>Theme 1 - Minimalist</h3>
              <p>Clean, simple design with light colors and sans-serif typography. Perfect for professional applications.</p>
            </div>
            <div className="feature-item">
              <h3>Theme 2 - Dark Sidebar</h3>
              <p>Dark mode with sidebar layout and serif fonts. Ideal for content-heavy applications.</p>
            </div>
            <div className="feature-item">
              <h3>Theme 3 - Colorful Cards</h3>
              <p>Playful design with gradients, rounded corners, and Google Fonts. Great for creative applications.</p>
            </div>
          </div>
        </section>

        <section className="about-section">
          <h2>Key Features</h2>
          <ul className="features-ul">
            <li>Persistent theme selection using localStorage</li>
            <li>Smooth transitions between themes</li>
            <li>Responsive design for all screen sizes</li>
            <li>Accessible design with proper contrast ratios</li>
            <li>External API integration for product data</li>
            <li>Loading states and error handling</li>
            <li>Modern CSS with custom properties</li>
            <li>TypeScript for type safety</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default About; 