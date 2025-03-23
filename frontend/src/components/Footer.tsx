import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className='extradiv'>
      <div className="footer-content">
        <div className="footer-section">
          <h3>PulseBridge</h3>
          <p>Empowering communities through innovative management solutions in Guinea.</p>
          <div className="social-links">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <span className="social-icon">𝕏</span>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <span className="social-icon">in</span>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <span className="social-icon">f</span>
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/community">Community</Link></li>
            <li><Link to="/benefits">Benefits</Link></li>
            <li><Link to="/calendar">Calendar</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Resources</h4>
          <ul>
            <li><Link to="/help">Help Center</Link></li>
            <li><Link to="/forms">Forms & Policies</Link></li>
            <li><Link to="/settings">Settings</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <ul className="contact-info">
            <li>📍 Conakry, Guinea</li>
            <li>📧 contact@pulsebridge.com</li>
            <li>📱 +224 XX XXX XXX</li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} PulseBridge. All rights reserved.</p>
        <div className="footer-bottom-links">
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms of Service</Link>
        </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 