'use client';

import { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const translations = {
  en: {
    title: 'Contact Us',
    subtitle: 'Get in touch with our team to discuss your AI needs.',
    form: {
      name: 'Your Name',
      email: 'Your Email',
      phone: 'Phone Number (Optional)',
      subject: 'Subject',
      message: 'Your Message',
      submit: 'Send Message',
      success: 'Your message has been sent. We\'ll get back to you soon!',
      error: 'There was an error sending your message. Please try again.',
    },
    contact: {
      title: 'Contact Information',
      email: 'Email Us',
      call: 'Call Us',
      visit: 'Visit Us',
      emailAddress: 'info@harborai.com',
      phone: '+1 (555) 123-4567',
      address: '123 AI Boulevard, Suite 500, New York, NY 10001',
    },
    locations: {
      title: 'Our Locations',
      newyork: 'New York',
      miami: 'Miami',
      losangeles: 'Los Angeles',
    },
  },
  es: {
    title: 'Contáctenos',
    subtitle: 'Póngase en contacto con nuestro equipo para discutir sus necesidades de IA.',
    form: {
      name: 'Su Nombre',
      email: 'Su Correo Electrónico',
      phone: 'Número de Teléfono (Opcional)',
      subject: 'Asunto',
      message: 'Su Mensaje',
      submit: 'Enviar Mensaje',
      success: 'Su mensaje ha sido enviado. ¡Nos pondremos en contacto pronto!',
      error: 'Hubo un error al enviar su mensaje. Por favor, inténtelo de nuevo.',
    },
    contact: {
      title: 'Información de Contacto',
      email: 'Envíenos un Correo',
      call: 'Llámenos',
      visit: 'Visítenos',
      emailAddress: 'info@harborai.com',
      phone: '+1 (555) 123-4567',
      address: '123 AI Boulevard, Suite 500, Nueva York, NY 10001',
    },
    locations: {
      title: 'Nuestras Ubicaciones',
      newyork: 'Nueva York',
      miami: 'Miami',
      losangeles: 'Los Ángeles',
    },
  },
};

export default function ContactPage({ params: { locale } }: { params: { locale: string } }) {
  const t = translations[locale as keyof typeof translations];
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    // Simulate form submission
    setTimeout(() => {
      // In a real application, you would send the form data to your backend
      // For now, we'll just simulate a successful submission
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    }, 1500);
  };

  return (
    <div className="bg-white dark:bg-secondary-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-700 to-primary-900 text-white py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.title}</h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">{t.subtitle}</p>
        </div>
      </div>

      <div className="container-custom py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white dark:bg-secondary-800 rounded-lg shadow-md p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2">
                    {t.form.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-secondary-300 dark:border-secondary-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-secondary-900 dark:text-white"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2">
                    {t.form.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-secondary-300 dark:border-secondary-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-secondary-900 dark:text-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2">
                    {t.form.phone}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-secondary-300 dark:border-secondary-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-secondary-900 dark:text-white"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2">
                    {t.form.subject}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-secondary-300 dark:border-secondary-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-secondary-900 dark:text-white"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2">
                  {t.form.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-2 border border-secondary-300 dark:border-secondary-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-secondary-900 dark:text-white"
                ></textarea>
              </div>

              {status === 'success' && (
                <div className="mb-6 p-4 bg-green-100 text-green-800 rounded-md">
                  {t.form.success}
                </div>
              )}

              {status === 'error' && (
                <div className="mb-6 p-4 bg-red-100 text-red-800 rounded-md">
                  {t.form.error}
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="btn-primary w-full py-3 text-center"
              >
                {status === 'submitting' ? '...' : t.form.submit}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <div className="bg-white dark:bg-secondary-800 rounded-lg shadow-md p-8 mb-8">
              <h3 className="text-xl font-bold mb-6 text-secondary-900 dark:text-white">
                {t.contact.title}
              </h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="text-primary-600 dark:text-primary-400 mt-1">
                    <FaEnvelope size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-secondary-900 dark:text-white mb-1">
                      {t.contact.email}
                    </h4>
                    <a
                      href="mailto:info@harborai.com"
                      className="text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
                    >
                      {t.contact.emailAddress}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-primary-600 dark:text-primary-400 mt-1">
                    <FaPhone size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-secondary-900 dark:text-white mb-1">
                      {t.contact.call}
                    </h4>
                    <a
                      href="tel:+15551234567"
                      className="text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
                    >
                      {t.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-primary-600 dark:text-primary-400 mt-1">
                    <FaMapMarkerAlt size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-secondary-900 dark:text-white mb-1">
                      {t.contact.visit}
                    </h4>
                    <p className="text-secondary-600 dark:text-secondary-400">
                      {t.contact.address}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-secondary-800 rounded-lg shadow-md p-8">
              <h3 className="text-xl font-bold mb-6 text-secondary-900 dark:text-white">
                {t.locations.title}
              </h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href={`/${locale}/locations/new-york`}
                    className="block p-4 bg-secondary-50 dark:bg-secondary-700 rounded-md hover:bg-primary-50 dark:hover:bg-primary-900 transition-colors duration-300"
                  >
                    <span className="font-medium text-secondary-900 dark:text-white">
                      {t.locations.newyork}
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={`/${locale}/locations/miami`}
                    className="block p-4 bg-secondary-50 dark:bg-secondary-700 rounded-md hover:bg-primary-50 dark:hover:bg-primary-900 transition-colors duration-300"
                  >
                    <span className="font-medium text-secondary-900 dark:text-white">
                      {t.locations.miami}
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={`/${locale}/locations/los-angeles`}
                    className="block p-4 bg-secondary-50 dark:bg-secondary-700 rounded-md hover:bg-primary-50 dark:hover:bg-primary-900 transition-colors duration-300"
                  >
                    <span className="font-medium text-secondary-900 dark:text-white">
                      {t.locations.losangeles}
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}