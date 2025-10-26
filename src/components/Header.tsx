import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, X, Bike } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '../hooks/useCart';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getCartCount } = useCart();
  const cartCount = getCartCount();

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <Bike size={32} />
            <span>MotoStore</span>
          </Link>

          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <Link to="/" onClick={() => setIsMenuOpen(false)}>
              Inicio
            </Link>
            <Link to="/productos" onClick={() => setIsMenuOpen(false)}>
              Productos
            </Link>
            <Link to="/sobre-nosotros" onClick={() => setIsMenuOpen(false)}>
              Sobre Nosotros
            </Link>
            <Link to="/contacto" onClick={() => setIsMenuOpen(false)}>
              Contacto
            </Link>
          </nav>

          <div className="header-actions">
            <Link to="/carrito" className="cart-button">
              <ShoppingCart size={24} />
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </Link>

            <button
              className="menu-toggle"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
