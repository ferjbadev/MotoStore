import { Award, Users, Target, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

export const About = () => {
  return (
    <div className="about-page">
      <div className="container">
        <motion.div 
          className="page-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1>About Us</h1>
          <p>Learn more about MotoStore and our passion for motorcycles</p>
        </motion.div>

        <div className="about-content">
          <motion.section 
            className="about-section"
            {...fadeInUp}
          >
            <h2>Our Story</h2>
            <p>
              MotoStore was born in 2024 with a clear mission: to make the world's best
              motorcycles accessible to all enthusiasts.
              We started as a small local dealership and have grown to become
              one of the most trusted motorcycle stores
              in the country.
            </p>
            <p>
              Our passion for two wheels drives us to offer only the
              best brands and models, along with exceptional customer service
              that sets us apart from the competition.
            </p>
          </motion.section>

          <motion.div 
            className="values-grid"
            variants={staggerContainer}
            initial={{ opacity: 0 }}
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div 
              className="value-card"
              variants={fadeInUp}
            >
              <Award size={40} />
              <h3>Guaranteed Quality</h3>
              <p>
                All our motorcycles are new and come with
                full factory warranty.
              </p>
            </motion.div>

            <motion.div 
              className="value-card"
              variants={fadeInUp}
            >
              <Users size={40} />
              <h3>Expert Team</h3>
              <p>
                Our team consists of enthusiasts and professionals with
                years of experience.
              </p>
            </motion.div>

            <motion.div 
              className="value-card"
              variants={fadeInUp}
            >
              <Target size={40} />
              <h3>Customer Focus</h3>
              <p>
                Your satisfaction is our priority. We are here to help you
                every step of the way.
              </p>
            </motion.div>

            <motion.div 
              className="value-card"
              variants={fadeInUp}
            >
              <Heart size={40} />
              <h3>Passion for Motorcycles</h3>
              <p>
                We don't just sell motorcycles, we live and breathe
                motorcycle culture.
              </p>
            </motion.div>
          </motion.div>

          <motion.section 
            className="about-section"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Why Choose Us?</h2>
            <ul className="benefits-list">
              <li>
                <strong>Wide Selection:</strong> We have the best
                brands on the market: Yamaha, Harley-Davidson, BMW, Ducati, and more.
              </li>
              <li>
                <strong>Flexible Financing:</strong> We offer payment plans
                tailored to your budget.
              </li>
              <li>
                <strong>After-Sales Service:</strong> Maintenance and repair
                with certified technicians.
              </li>
              <li>
                <strong>Personalized Advice:</strong> We help you
                find the perfect motorcycle for you.
              </li>
              <li>
                <strong>Home Delivery:</strong> We bring your new motorcycle
                directly to your door.
              </li>
            </ul>
          </motion.section>

          <motion.section 
            className="cta-section"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Ready to Join the MotoStore Family?</h2>
            <p>
              Visit us at our store or explore our online catalog.
              We're here to help you find your ideal motorcycle!
            </p>
          </motion.section>
        </div>
      </div>
    </div>
  );
};
