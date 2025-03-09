'use client';

import Link from 'next/link';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const translations = {
  en: {
    company: 'Company',
    about: 'About Us',
    services: 'Services',
    pricing: 'Pricing',
    contact: 'Contact',
    locations: 'Locations',
    newyork: 'New York',
    miami: 'Miami',
    losangeles: 'Los Angeles',
    legal: 'Legal',
    privacy: 'Privacy Policy',
    terms: 'Terms of Service',
    cookies: 'Cookie Policy',
    newsletter: 'Subscribe to our newsletter',
    newsletterDesc: 'Get the latest news and updates from Harbor AI',
    subscribe: 'Subscribe',
    emailPlaceholder: 'Your email address',
    copyright: '© 2025 Harbor AI. All rights reserved.',
  },
  es: {
    company: 'Empresa',
    about: 'Nosotros',
    services: 'Servicios',
    pricing: 'Precios',
    contact: 'Contacto',
    locations: 'Ubicaciones',
    newyork: 'Nueva York',
    miami: 'Miami',
    losangeles: 'Los Ángeles',
    legal: 'Legal',
    privacy: 'Política de Privacidad',
    terms: 'Términos de Servicio',
    cookies: 'Política de Cookies',
    newsletter: 'Suscríbete a nuestro boletín',
    newsletterDesc: 'Recibe las últimas noticias y actualizaciones de Harbor AI',
    subscribe: 'Suscribirse',
    emailPlaceholder: 'Tu dirección de correo',
    copyright: '© 2025 Harbor AI. Todos los derechos reservados.',
  },
};

export default function Footer({ locale }: { locale: string }) {
  const t = translations[locale as keyof typeof translations];

  return (
    <footer className="bg-secondary-900 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Harbor AI</h3>
            <p className="text-secondary-300 mb-4">
              {locale === 'en'
                ? 'Professional AI solutions for businesses of all sizes.'
                : 'Soluciones profesionales de IA para empresas de todos los tamaños.'}
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-secondary-300 hover:text-primary-400 transition-colors duration-300"
                aria-label="Facebook"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="#"
                className="text-secondary-300 hover:text-primary-400 transition-colors duration-300"
                aria-label="Twitter"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="#"
                className="text-secondary-300 hover:text-primary-400 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="#"
                className="text-secondary-300 hover:text-primary-400 transition-colors duration-300"
                aria-label="Instagram"
              >
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t.company}</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href={`/${locale}/about`}
                  className="text-secondary-300 hover:text-primary-400 transition-colors duration-300"
                >
                  {t.about}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/services`}
                  className="text-secondary-300 hover:text-primary-400 transition-colors duration-300"
                >
                  {t.services}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/pricing`}
                  className="text-secondary-300 hover:text-primary-400 transition-colors duration-300"
                >
                  {t.pricing}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/contact`}
                  className="text-secondary-300 hover:text-primary-400 transition-colors duration-300"
                >
                  {t.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t.locations}</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href={`/${locale}/locations/new-york`}
                  className="text-secondary-300 hover:text-primary-400 transition-colors duration-300"
                >
                  {t.newyork}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/locations/miami`}
                  className="text-secondary-300 hover:text-primary-400 transition-colors duration-300"
                >
                  {t.miami}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/locations/los-angeles`}
                  className="text-secondary-300 hover:text-primary-400 transition-colors duration-300"
                >
                  {t.losangeles}
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t.newsletter}</h3>
            <p className="text-secondary-300 mb-4">{t.newsletterDesc}</p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder={t.emailPlaceholder}
                className="px-4 py-2 bg-secondary-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                required
              />
              <button
                type="submit"
                className="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-md transition-colors duration-300"
              >
                {t.subscribe}
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-secondary-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-secondary-400 text-sm mb-4 md:mb-0">{t.copyright}</p>
          <div className="flex flex-wrap justify-center space-x-4 text-sm">
            <Link
              href={`/${locale}/privacy`}
              className="text-secondary-400 hover:text-primary-400 transition-colors duration-300"
            >
              {t.privacy}
            </Link>
            <Link
              href={`/${locale}/terms`}
              className="text-secondary-400 hover:text-primary-400 transition-colors duration-300"
            >
              {t.terms}
            </Link>
            <Link
              href={`/${locale}/cookies`}
              className="text-secondary-400 hover:text-primary-400 transition-colors duration-300"
            >
              {t.cookies}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}