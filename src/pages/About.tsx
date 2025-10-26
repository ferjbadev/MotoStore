import { Award, Users, Target, Heart } from 'lucide-react';

export const About = () => {
  return (
    <div className="about-page">
      <div className="container">
        <div className="page-header">
          <h1>About Us</h1>
          <p>Learn more about MotoStore and our passion for motorcycles</p>
        </div>

        <div className="about-content">
          <section className="about-section">
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
          </section>

          <div className="values-grid">
            <div className="value-card">
              <Award size={40} />
              <h3>Guaranteed Quality</h3>
              <p>
                All our motorcycles are new and come with
                full factory warranty.
              </p>
            </div>

            <div className="value-card">
              <Users size={40} />
              <h3>Expert Team</h3>
              <p>
                Our team consists of enthusiasts and professionals with
                years of experience.
              </p>
            </div>

            <div className="value-card">
              <Target size={40} />
              <h3>Customer Focus</h3>
              <p>
                Your satisfaction is our priority. We are here to help you
                every step of the way.
              </p>
            </div>

            <div className="value-card">
              <Heart size={40} />
              <h3>Passion for Motorcycles</h3>
              <p>
                We don't just sell motorcycles, we live and breathe
                motorcycle culture.
              </p>
            </div>
          </div>

          <section className="about-section">
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
          </section>

          <section className="cta-section">
            <h2>Ready to Join the MotoStore Family?</h2>
            <p>
              Visit us at our store or explore our online catalog.
              We're here to help you find your ideal motorcycle!
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
