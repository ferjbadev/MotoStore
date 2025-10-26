import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, X, Bike } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { useCart } from '../hooks/useCart';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getCartCount } = useCart();
  const cartCount = getCartCount();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header className="header">
      <div className="container">
        <div className="header-content" ref={menuRef}>
          <Link to="/" className="logo">
            <Bike size={32} />
            <span>MotoStore</span>
          </Link>

          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <Link to="/" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link to="/productos" onClick={() => setIsMenuOpen(false)}>
              Products
            </Link>
            <Link to="/sobre-nosotros" onClick={() => setIsMenuOpen(false)}>
              About Us
            </Link>
            <Link to="/contacto" onClick={() => setIsMenuOpen(false)}>
              Contact
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
