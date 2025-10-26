import { Award, Users, Target, Heart } from 'lucide-react';

export const About = () => {
  return (
    <div className="about-page">
      <div className="container">
        <div className="page-header">
          <h1>Sobre Nosotros</h1>
          <p>Conoce más sobre MotoStore y nuestra pasión por las motocicletas</p>
        </div>

        <div className="about-content">
          <section className="about-section">
            <h2>Nuestra Historia</h2>
            <p>
              MotoStore nació en 2024 con una misión clara: hacer que las mejores
              motocicletas del mundo sean accesibles para todos los entusiastas.
              Comenzamos como un pequeño concesionario local y hemos crecido hasta
              convertirnos en una de las tiendas de motocicletas más confiables
              del país.
            </p>
            <p>
              Nuestra pasión por las dos ruedas nos impulsa a ofrecer solo las
              mejores marcas y modelos, junto con un servicio al cliente
              excepcional que nos distingue de la competencia.
            </p>
          </section>

          <div className="values-grid">
            <div className="value-card">
              <Award size={40} />
              <h3>Calidad Garantizada</h3>
              <p>
                Todas nuestras motocicletas son nuevas y vienen con garantía de
                fábrica completa.
              </p>
            </div>

            <div className="value-card">
              <Users size={40} />
              <h3>Equipo Experto</h3>
              <p>
                Nuestro equipo está formado por entusiastas y profesionales con
                años de experiencia.
              </p>
            </div>

            <div className="value-card">
              <Target size={40} />
              <h3>Enfoque al Cliente</h3>
              <p>
                Tu satisfacción es nuestra prioridad. Estamos aquí para ayudarte
                en cada paso.
              </p>
            </div>

            <div className="value-card">
              <Heart size={40} />
              <h3>Pasión por las Motos</h3>
              <p>
                No solo vendemos motos, vivimos y respiramos la cultura
                motociclista.
              </p>
            </div>
          </div>

          <section className="about-section">
            <h2>¿Por Qué Elegirnos?</h2>
            <ul className="benefits-list">
              <li>
                <strong>Amplia Selección:</strong> Contamos con las mejores
                marcas del mercado: Yamaha, Harley-Davidson, BMW, Ducati, y más.
              </li>
              <li>
                <strong>Financiamiento Flexible:</strong> Ofrecemos planes de
                pago adaptados a tu presupuesto.
              </li>
              <li>
                <strong>Servicio Post-Venta:</strong> Mantenimiento y reparación
                con técnicos certificados.
              </li>
              <li>
                <strong>Asesoramiento Personalizado:</strong> Te ayudamos a
                encontrar la moto perfecta para ti.
              </li>
              <li>
                <strong>Entrega a Domicilio:</strong> Llevamos tu nueva moto
                directamente a tu puerta.
              </li>
            </ul>
          </section>

          <section className="cta-section">
            <h2>¿Listo para Unirte a la Familia MotoStore?</h2>
            <p>
              Visítanos en nuestra tienda o explora nuestro catálogo en línea.
              ¡Estamos aquí para ayudarte a encontrar tu moto ideal!
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
