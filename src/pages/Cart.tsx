import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../hooks/useCart';

export const Cart = () => {
  const { cart, removeFromCart, updateQuantity, getCartTotal } = useCart();

  if (cart.length === 0) {
    return (
      <div className="cart-page">
        <div className="container">
          <div className="empty-cart">
            <ShoppingBag size={64} />
            <h2>Your cart is empty</h2>
            <p>Add some amazing motorcycles to your cart</p>
            <Link to="/productos" className="btn-primary">
              Explore Catalog
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="container">
        <h1 className="page-title">Shopping Cart</h1>

        <div className="cart-layout">
          <div className="cart-items">
            {cart.map((item) => (
              <div key={item.motorcycle.id} className="cart-item">
                <img
                  src={item.motorcycle.image}
                  alt={item.motorcycle.name}
                  className="cart-item-image"
                />

                <div className="cart-item-info">
                  <Link
                    to={`/producto/${item.motorcycle.id}`}
                    className="cart-item-name"
                  >
                    {item.motorcycle.name}
                  </Link>
                  <p className="cart-item-specs">
                    {item.motorcycle.brand} • {item.motorcycle.year}
                  </p>
                  <p className="cart-item-price">
                    ${item.motorcycle.price.toLocaleString()}
                  </p>
                </div>

                <div className="cart-item-actions">
                  <div className="quantity-controls">
                    <button
                      onClick={() =>
                        updateQuantity(item.motorcycle.id, item.quantity - 1)
                      }
                      aria-label="Decrease quantity"
                    >
                      <Minus size={16} />
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() =>
                        updateQuantity(item.motorcycle.id, item.quantity + 1)
                      }
                      aria-label="Increase quantity"
                    >
                      <Plus size={16} />
                    </button>
                  </div>

                  <button
                    className="remove-button"
                    onClick={() => removeFromCart(item.motorcycle.id)}
                    aria-label="Remove from cart"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>

                <div className="cart-item-total">
                  ${(item.motorcycle.price * item.quantity).toLocaleString()}
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h2>Order Summary</h2>

            <div className="summary-row">
              <span>Subtotal:</span>
              <span>${getCartTotal().toLocaleString()}</span>
            </div>

            <div className="summary-row">
              <span>Shipping:</span>
              <span className="free-shipping">Free</span>
            </div>

            <div className="summary-divider"></div>

            <div className="summary-row total">
              <span>Total:</span>
              <span>${getCartTotal().toLocaleString()}</span>
            </div>

            <Link to="/checkout" className="btn-primary btn-full">
              Proceed to Checkout
              <ArrowRight size={20} />
            </Link>

            <Link to="/productos" className="continue-shopping">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
