import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Check } from 'lucide-react';
import { motorcycles } from '../data/motorcycles';
import { useCart } from '../hooks/useCart';

export const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const motorcycle = motorcycles.find((m) => m.id === Number(id));

  if (!motorcycle) {
    return (
      <div className="container">
        <div className="not-found">
          <h2>Producto no encontrado</h2>
          <Link to="/productos" className="btn-primary">
            Volver al catálogo
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(motorcycle);
    navigate('/carrito');
  };

  return (
    <div className="product-detail">
      <div className="container">
        <Link to="/productos" className="back-link">
          <ArrowLeft size={20} />
          Volver al catálogo
        </Link>

        <div className="detail-grid">
          <div className="detail-image">
            <img src={motorcycle.image} alt={motorcycle.name} />
          </div>

          <div className="detail-info">
            <span className="detail-category">{motorcycle.category}</span>
            <h1 className="detail-title">{motorcycle.name}</h1>
            <p className="detail-brand">
              {motorcycle.brand} • {motorcycle.year}
            </p>

            <div className="detail-price">
              <span className="price-label">Precio:</span>
              <span className="price-value">
                ${motorcycle.price.toLocaleString()}
              </span>
            </div>

            <p className="detail-description">{motorcycle.description}</p>

            <div className="detail-specs">
              <h3>Especificaciones Técnicas</h3>
              <div className="specs-grid">
                <div className="spec-item">
                  <span className="spec-label">Motor:</span>
                  <span className="spec-value">{motorcycle.engine}</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Potencia:</span>
                  <span className="spec-value">{motorcycle.power}</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Peso:</span>
                  <span className="spec-value">{motorcycle.weight}</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Año:</span>
                  <span className="spec-value">{motorcycle.year}</span>
                </div>
              </div>
            </div>

            <div className="detail-features">
              <h3>Características</h3>
              <ul>
                {motorcycle.features.map((feature, index) => (
                  <li key={index}>
                    <Check size={18} />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="detail-actions">
              {motorcycle.inStock ? (
                <>
                  <button className="btn-primary" onClick={handleAddToCart}>
                    <ShoppingCart size={20} />
                    Agregar al Carrito
                  </button>
                  <span className="stock-status in-stock">En Stock</span>
                </>
              ) : (
                <span className="stock-status out-of-stock">Agotado</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
