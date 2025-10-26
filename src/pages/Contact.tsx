import { useState } from 'react';
import type { FormEvent } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="contact-page">
      <div className="container">
        <div className="page-header">
          <h1>Contáctanos</h1>
          <p>Estamos aquí para ayudarte. Envíanos un mensaje</p>
        </div>

        <div className="contact-layout">
          <div className="contact-info">
            <h2>Información de Contacto</h2>

            <div className="contact-item">
              <MapPin size={24} />
              <div>
                <h3>Dirección</h3>
                <p>Calle Principal 123</p>
                <p>Ciudad, Estado 12345</p>
              </div>
            </div>

            <div className="contact-item">
              <Phone size={24} />
              <div>
                <h3>Teléfono</h3>
                <p>+1 234 567 890</p>
                <p>+1 234 567 891</p>
              </div>
            </div>

            <div className="contact-item">
              <Mail size={24} />
              <div>
                <h3>Email</h3>
                <p>info@motostore.com</p>
                <p>ventas@motostore.com</p>
              </div>
            </div>

            <div className="contact-item">
              <Clock size={24} />
              <div>
                <h3>Horario</h3>
                <p>Lunes - Viernes: 9:00 - 18:00</p>
                <p>Sábado: 10:00 - 16:00</p>
                <p>Domingo: Cerrado</p>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <h2>Envíanos un Mensaje</h2>

            {submitted && (
              <div className="success-message">
                ¡Mensaje enviado con éxito! Te responderemos pronto.
              </div>
            )}

            <div className="form-group">
              <label htmlFor="name">Nombre *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

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
              <label htmlFor="subject">Asunto *</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Mensaje *</label>
              <textarea
                id="message"
                name="message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="btn-primary">
              <Send size={20} />
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
