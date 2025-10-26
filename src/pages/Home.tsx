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
              Find Your Dream Motorcycle
            </h1>
            <p className="hero-subtitle">
              The best brands and models on the market. Guaranteed quality and
              financing available.
            </p>
            <Link to="/productos" className="btn-primary">
              View Catalog
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
              <h3>Extended Warranty</h3>
              <p>All our motorcycles include factory warranty</p>
            </div>
            <div className="feature-card">
              <Truck size={40} />
              <h3>Free Shipping</h3>
              <p>Home delivery at no additional cost</p>
            </div>
            <div className="feature-card">
              <CreditCard size={40} />
              <h3>Financing</h3>
              <p>Flexible payment plans up to 36 months</p>
            </div>
            <div className="feature-card">
              <Award size={40} />
              <h3>Best Price</h3>
              <p>We guarantee the best price on the market</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-products">
        <div className="container">
          <div className="section-header">
            <h2>Featured Motorcycles</h2>
            <Link to="/productos" className="view-all">
              View All <ArrowRight size={18} />
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
            <h2>Ready for Your Next Adventure?</h2>
            <p>
              Visit our store or contact us for more information about
              our available models.
            </p>
            <div className="cta-buttons">
              <Link to="/productos" className="btn-primary">
                View Catalog
              </Link>
              <Link to="/contacto" className="btn-secondary">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
