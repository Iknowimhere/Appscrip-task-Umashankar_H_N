'use client';

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'; // New icons for accordion toggles
import './Footer.css';

export default function Footer() {
  const [email, setEmail] = React.useState('');
  const [openSections, setOpenSections] = React.useState({
    mettaMuse: false,
    quickLinks: false,
    followUs: false,
  });

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log('Subscribing with:', email);
    setEmail('');
  };

  const toggleSection = (section) => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-section newsletter-section">
          <h3 className="footer-heading">BE THE FIRST TO KNOW</h3>
          <p className="footer-subtext">Lorem ipsum is simply dummy text of the printing and typesetting industry. This is simply dummy text.</p>
          <form onSubmit={handleSubscribe} className="newsletter-form">
            <input
              type="email"
              placeholder="Enter your e-mail..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="newsletter-input"
            />
            <button type="submit" className="subscribe-button">SUBSCRIBE</button>
          </form>
        </div>

        <div className="footer-section contact-currency-section">
          <div className="footer-section contact-section">
            <h3 className="footer-heading">CALL US</h3> {/* Changed from CONTACT US as per mobile design */}
            <p className="contact-info-item">+44 221 133 5360</p>
            <p className="contact-info-item">customercare@mettamuse.com</p>
          </div>

          <div className="footer-section currency-section">
            <h3 className="footer-heading">CURRENCY</h3>
            <div className="currency-selector">
              <span className="flag-icon">🇺🇸</span> USD
            </div>
            {/* The note is only visible on desktop/larger screens */}
            <p className="currency-note desktop-only">
              Transactions will be completed in Euros and a currency reference is available on hover.
            </p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        {/* Accordion sections for mobile, regular columns for desktop */}
        <div className="footer-links-group">
          {/* Metta Muse Section */}
          <div className="footer-links-column company-links">
            <div className="footer-heading-toggle" onClick={() => toggleSection('mettaMuse')}>
              <h3 className="footer-heading footer-logo-text">mettâ muse</h3>
              <FontAwesomeIcon icon={openSections.mettaMuse ? faChevronUp : faChevronDown} className="mobile-toggle-icon" />
            </div>
            <ul className={`links-list ${openSections.mettaMuse ? 'active' : ''}`}>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Stories</a></li>
              <li><a href="#">Artisans</a></li>
              <li><a href="#">Boutiques</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">EU Compliances Docs</a></li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div className="footer-links-column quick-links">
            <div className="footer-heading-toggle" onClick={() => toggleSection('quickLinks')}>
              <h3 className="footer-heading">QUICK LINKS</h3>
              <FontAwesomeIcon icon={openSections.quickLinks ? faChevronUp : faChevronDown} className="mobile-toggle-icon" />
            </div>
            <ul className={`links-list ${openSections.quickLinks ? 'active' : ''}`}>
              <li><a href="#">Orders & Shipping</a></li>
              <li><a href="#">Join/Login as a Seller</a></li>
              <li><a href="#">Payment & Pricing</a></li>
              <li><a href="#">Return & Refunds</a></li>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
            </ul>
          </div>

          <div className="footer-social-payment">
            {/* Follow Us Section */}
            <div className="footer-section follow-us-section">
              <div className="footer-heading-toggle" onClick={() => toggleSection('followUs')}>
                <h3 className="footer-heading">FOLLOW US</h3>
                <FontAwesomeIcon icon={openSections.followUs ? faChevronUp : faChevronDown} className="mobile-toggle-icon" />
              </div>
              <div className={`social-icons ${openSections.followUs ? 'active' : ''}`}>
                <a href="#" aria-label="Instagram"><FontAwesomeIcon icon={faInstagram} /></a>
                <a href="#" aria-label="LinkedIn"><FontAwesomeIcon icon={faLinkedinIn} /></a>
              </div>
            </div>

            {/* Accepts Section - not collapsible in mobile design, remains static */}
            <div className="footer-section accepts-section">
              <h3 className="footer-heading">mettâ muse ACCEPTS</h3>
              <div className="payment-icons">
                <img src="/payment-icons/google-pay.png" alt="Google Pay" />
                <img src="/payment-icons/visa.png" alt="Visa" />
                <img src="/payment-icons/mastercard.png" alt="Mastercard" />
                <img src="/payment-icons/amex.png" alt="American Express" />
                <img src="/payment-icons/apple-pay.png" alt="Apple Pay" />
                <img src="/payment-icons/shop-pay.png" alt="Shop Pay" />
              </div>
            </div>
          </div>
        </div>

        <div className="copyright">
          <p>Copyright © 2023 mettamuse. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}