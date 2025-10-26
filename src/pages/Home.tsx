import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Truck, CreditCard, Award } from 'lucide-react';
import { MotorcycleCard } from '../components/MotorcycleCard';
import { motorcycles } from '../data/motorcycles';

export const Home = () => {
  const featuredMotorcycles = motorcycles.slice(0, 6);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Encuentra la Moto de tus Sueños
            </h1>
            <p className="hero-subtitle">
              Las mejores marcas y modelos del mercado. Calidad garantizada y
              financiamiento disponible.
            </p>
            <Link to="/productos" className="btn-primary">
              Ver Catálogo
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <div className="features-grid">
            <div className="feature-card">
              <Shield size={40} />
              <h3>Garantía Extendida</h3>
              <p>Todas nuestras motos incluyen garantía de fábrica</p>
            </div>
            <div className="feature-card">
              <Truck size={40} />
              <h3>Envío Gratis</h3>
              <p>Entrega a domicilio sin costo adicional</p>
            </div>
            <div className="feature-card">
              <CreditCard size={40} />
              <h3>Financiamiento</h3>
              <p>Planes de pago flexibles hasta 36 meses</p>
            </div>
            <div className="feature-card">
              <Award size={40} />
              <h3>Mejor Precio</h3>
              <p>Garantizamos el mejor precio del mercado</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-products">
        <div className="container">
          <div className="section-header">
            <h2>Motos Destacadas</h2>
            <Link to="/productos" className="view-all">
              Ver todas <ArrowRight size={18} />
            </Link>
          </div>
          <div className="products-grid">
            {featuredMotorcycles.map((motorcycle) => (
              <MotorcycleCard key={motorcycle.id} motorcycle={motorcycle} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>¿Listo para tu próxima aventura?</h2>
            <p>
              Visita nuestra tienda o contáctanos para más información sobre
              nuestros modelos disponibles.
            </p>
            <div className="cta-buttons">
              <Link to="/productos" className="btn-primary">
                Ver Catálogo
              </Link>
              <Link to="/contacto" className="btn-secondary">
                Contactar
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
