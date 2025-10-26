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
              Tu tienda de confianza para encontrar la moto de tus sueños.
              Ofrecemos las mejores marcas y modelos del mercado.
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
            <h4>Enlaces Rápidos</h4>
            <ul>
              <li><Link to="/">Inicio</Link></li>
              <li><Link to="/productos">Productos</Link></li>
              <li><Link to="/sobre-nosotros">Sobre Nosotros</Link></li>
              <li><Link to="/contacto">Contacto</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Categorías</h4>
            <ul>
              <li><Link to="/productos?category=sport">Deportivas</Link></li>
              <li><Link to="/productos?category=cruiser">Cruiser</Link></li>
              <li><Link to="/productos?category=touring">Touring</Link></li>
              <li><Link to="/productos?category=adventure">Adventure</Link></li>
              <li><Link to="/productos?category=naked">Naked</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contacto</h4>
            <ul className="contact-info">
              <li>
                <MapPin size={16} />
                <span>Calle Principal 123, Ciudad</span>
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
          <p>&copy; 2024 MotoStore. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
