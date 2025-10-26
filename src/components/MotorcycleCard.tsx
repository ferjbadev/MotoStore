import { Link } from 'react-router-dom';
import { ShoppingCart, Eye } from 'lucide-react';
import type { Motorcycle } from '../types';
import { useCart } from '../hooks/useCart';

interface MotorcycleCardProps {
  motorcycle: Motorcycle;
}

export const MotorcycleCard = ({ motorcycle }: MotorcycleCardProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(motorcycle);
  };

  return (
    <div className="motorcycle-card">
      <div className="card-image">
        <img src={motorcycle.image} alt={motorcycle.name} />
        {!motorcycle.inStock && (
          <div className="out-of-stock-badge">Agotado</div>
        )}
        <div className="card-overlay">
          <Link to={`/producto/${motorcycle.id}`} className="btn-icon">
            <Eye size={20} />
          </Link>
        </div>
      </div>

      <div className="card-content">
        <span className="card-category">{motorcycle.category}</span>
        <h3 className="card-title">{motorcycle.name}</h3>
        <p className="card-specs">
          {motorcycle.engine} • {motorcycle.power}
        </p>
        <div className="card-footer">
          <span className="card-price">${motorcycle.price.toLocaleString()}</span>
          <button
            className="btn-add-cart"
            onClick={handleAddToCart}
            disabled={!motorcycle.inStock}
          >
            <ShoppingCart size={18} />
            Agregar
          </button>
        </div>
      </div>
    </div>
  );
};
