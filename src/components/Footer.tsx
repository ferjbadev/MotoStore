import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>MotoStore</h3>
            <p>
              Your trusted store to find the motorcycle of your dreams.
              We offer the best brands and models on the market.
            </p>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/productos">Products</Link></li>
              <li><Link to="/sobre-nosotros">About Us</Link></li>
              <li><Link to="/contacto">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Categories</h4>
            <ul>
              <li><Link to="/productos?category=sport">Sport</Link></li>
              <li><Link to="/productos?category=cruiser">Cruiser</Link></li>
              <li><Link to="/productos?category=touring">Touring</Link></li>
              <li><Link to="/productos?category=adventure">Adventure</Link></li>
              <li><Link to="/productos?category=naked">Naked</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact</h4>
            <ul className="contact-info">
              <li>
                <MapPin size={16} />
                <span>123 Main Street, City</span>
              </li>
              <li>
                <Phone size={16} />
                <span>+1 234 567 890</span>
              </li>
              <li>
                <Mail size={16} />
                <span>info@motostore.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} MotoStore. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
