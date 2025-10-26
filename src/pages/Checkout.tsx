import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreditCard, CheckCircle } from 'lucide-react';
import { useCart } from '../hooks/useCart';
import type { Customer } from '../types';

export const Checkout = () => {
  const navigate = useNavigate();
  const { cart, getCartTotal, clearCart } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  const [formData, setFormData] = useState<Customer>({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
  });

  if (cart.length === 0 && !orderComplete) {
    navigate('/productos');
    return null;
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsProcessing(false);
    setOrderComplete(true);
    clearCart();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (orderComplete) {
    return (
      <div className="checkout-page">
        <div className="container">
          <div className="order-success">
            <CheckCircle size={64} />
            <h1>¡Pedido Completado!</h1>
            <p>
              Gracias por tu compra. Recibirás un correo de confirmación con los
              detalles de tu pedido.
            </p>
            <button
              className="btn-primary"
              onClick={() => navigate('/productos')}
            >
              Continuar Comprando
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <div className="container">
        <h1 className="page-title">Finalizar Compra</h1>

        <div className="checkout-layout">
          <form className="checkout-form" onSubmit={handleSubmit}>
            <div className="form-section">
              <h2>Información de Contacto</h2>

              <div className="form-group">
                <label htmlFor="name">Nombre Completo *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Teléfono *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="form-section">
              <h2>Dirección de Envío</h2>

              <div className="form-group">
                <label htmlFor="address">Dirección *</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="city">Ciudad *</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="zipCode">Código Postal *</label>
                  <input
                    type="text"
                    id="zipCode"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="form-section">
              <h2>Método de Pago</h2>
              <div className="payment-method">
                <CreditCard size={24} />
                <span>Tarjeta de Crédito/Débito</span>
              </div>
              <p className="payment-note">
                El pago se procesará de forma segura. Esta es una demostración,
                no se realizará ningún cargo real.
              </p>
            </div>

            <button
              type="submit"
              className="btn-primary btn-full"
              disabled={isProcessing}
            >
              {isProcessing ? 'Procesando...' : 'Confirmar Pedido'}
            </button>
          </form>

          <div className="order-summary">
            <h2>Resumen del Pedido</h2>

            <div className="summary-items">
              {cart.map((item) => (
                <div key={item.motorcycle.id} className="summary-item">
                  <img
                    src={item.motorcycle.image}
                    alt={item.motorcycle.name}
                  />
                  <div className="summary-item-info">
                    <p className="summary-item-name">{item.motorcycle.name}</p>
                    <p className="summary-item-quantity">
                      Cantidad: {item.quantity}
                    </p>
                  </div>
                  <p className="summary-item-price">
                    ${(item.motorcycle.price * item.quantity).toLocaleString()}
                  </p>
                </div>
              ))}
            </div>

            <div className="summary-divider"></div>

            <div className="summary-row">
              <span>Subtotal:</span>
              <span>${getCartTotal().toLocaleString()}</span>
            </div>

            <div className="summary-row">
              <span>Envío:</span>
              <span className="free-shipping">Gratis</span>
            </div>

            <div className="summary-divider"></div>

            <div className="summary-row total">
              <span>Total:</span>
              <span>${getCartTotal().toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
