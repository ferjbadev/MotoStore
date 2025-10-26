import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Truck, CreditCard, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { MotorcycleCard } from '../components/MotorcycleCard';
import { motorcycles } from '../data/motorcycles';

export const Home = () => {
  const featuredMotorcycles = motorcycles.slice(0, 6);

  return (
    <div className="home">
      {/* Hero Section */}
      <motion.section 
        className="hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
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
      </motion.section>

      {/* Features Section */}
      <motion.section 
        className="features"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
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
      </motion.section>

      {/* Featured Products */}
      <motion.section 
        className="featured-products"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
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
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="cta-section"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
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
      </motion.section>
    </div>
  );
};
