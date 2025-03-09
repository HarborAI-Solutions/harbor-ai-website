import Link from 'next/link';
import { FaCheck, FaArrowRight } from 'react-icons/fa';
import { Metadata } from 'next';

// Define supported locations
const locations = ['new-york', 'miami', 'los-angeles'];

// Define translations
const translations = {
  en: {
    'new-york': {
      title: 'AI Solutions in New York',
      description: 'Professional AI services for businesses in New York City and surrounding areas.',
      hero: {
        title: 'AI Solutions in New York',
        subtitle: 'Cutting-edge artificial intelligence services for businesses in the New York metropolitan area.',
      },
      services: {
        title: 'Our Services in New York',
        subtitle: 'Tailored AI solutions for New York businesses',
        items: [
          {
            title: 'AI Consulting for NYC Startups',
            description: 'Strategic AI consulting services designed specifically for the fast-paced New York startup ecosystem.',
          },
          {
            title: 'Enterprise AI Solutions',
            description: 'Comprehensive AI implementation for large enterprises headquartered in New York City.',
          },
          {
            title: 'Financial AI Systems',
            description: 'Specialized AI solutions for the financial sector, tailored to Wall Street firms and financial institutions.',
          },
          {
            title: 'Retail AI Implementation',
            description: 'Smart retail solutions for New York\'s diverse retail landscape, from boutiques to department stores.',
          },
        ],
      },
      benefits: {
        title: 'Why Choose Harbor AI in New York',
        items: [
          'Local team with deep understanding of New York business environment',
          'Specialized expertise in finance, retail, and media AI applications',
          'Rapid response times with on-site support available',
          'Partnerships with leading New York tech institutions',
          'Compliance expertise with New York state regulations',
          'Customized solutions for the unique challenges of NYC businesses',
        ],
      },
      cta: {
        title: 'Ready to Transform Your New York Business?',
        subtitle: 'Schedule a consultation with our New York team today.',
        button: 'Contact Our NYC Office',
      },
    },
    'miami': {
      title: 'AI Solutions in Miami',
      description: 'Professional AI services for businesses in Miami and South Florida.',
      hero: {
        title: 'AI Solutions in Miami',
        subtitle: 'Innovative artificial intelligence services for businesses in Miami and throughout South Florida.',
      },
      services: {
        title: 'Our Services in Miami',
        subtitle: 'Tailored AI solutions for Miami businesses',
        items: [
          {
            title: 'Hospitality AI Solutions',
            description: 'AI-powered systems for Miami\'s thriving hospitality and tourism industry.',
          },
          {
            title: 'Real Estate AI Tools',
            description: 'Intelligent solutions for Miami\'s dynamic real estate market.',
          },
          {
            title: 'International Business AI',
            description: 'AI systems designed for international businesses with Latin American connections.',
          },
          {
            title: 'Healthcare AI Implementation',
            description: 'Advanced AI solutions for South Florida\'s growing healthcare sector.',
          },
        ],
      },
      benefits: {
        title: 'Why Choose Harbor AI in Miami',
        items: [
          'Bilingual team fluent in English and Spanish',
          'Specialized knowledge of South Florida business landscape',
          'Expertise in international business applications',
          'Focus on hospitality, real estate, and healthcare sectors',
          'Climate-resilient AI solutions for Florida businesses',
          'Local support with global capabilities',
        ],
      },
      cta: {
        title: 'Ready to Transform Your Miami Business?',
        subtitle: 'Schedule a consultation with our Miami team today.',
        button: 'Contact Our Miami Office',
      },
    },
    'los-angeles': {
      title: 'AI Solutions in Los Angeles',
      description: 'Professional AI services for businesses in Los Angeles and Southern California.',
      hero: {
        title: 'AI Solutions in Los Angeles',
        subtitle: 'Innovative artificial intelligence services for businesses in Los Angeles and throughout Southern California.',
      },
      services: {
        title: 'Our Services in Los Angeles',
        subtitle: 'Tailored AI solutions for LA businesses',
        items: [
          {
            title: 'Entertainment Industry AI',
            description: 'Specialized AI solutions for studios, production companies, and entertainment businesses.',
          },
          {
            title: 'Tech Startup AI Implementation',
            description: 'Cutting-edge AI for LA\'s vibrant tech startup ecosystem.',
          },
          {
            title: 'E-commerce AI Solutions',
            description: 'Intelligent systems for Southern California\'s thriving e-commerce sector.',
          },
          {
            title: 'Logistics & Supply Chain AI',
            description: 'AI-powered optimization for businesses connected to LA\'s ports and logistics networks.',
          },
        ],
      },
      benefits: {
        title: 'Why Choose Harbor AI in Los Angeles',
        items: [
          'Deep expertise in entertainment and media AI applications',
          'Connected to LA\'s tech innovation ecosystem',
          'Specialized knowledge of Southern California business environment',
          'Experience with logistics and supply chain optimization',
          'Local team with global capabilities',
          'Sustainable AI solutions for environmentally conscious businesses',
        ],
      },
      cta: {
        title: 'Ready to Transform Your Los Angeles Business?',
        subtitle: 'Schedule a consultation with our LA team today.',
        button: 'Contact Our LA Office',
      },
    },
  },
  es: {
    'new-york': {
      title: 'Soluciones de IA en Nueva York',
      description: 'Servicios profesionales de IA para empresas en la ciudad de Nueva York y áreas circundantes.',
      hero: {
        title: 'Soluciones de IA en Nueva York',
        subtitle: 'Servicios de inteligencia artificial de vanguardia para empresas en el área metropolitana de Nueva York.',
      },
      services: {
        title: 'Nuestros Servicios en Nueva York',
        subtitle: 'Soluciones de IA adaptadas para empresas de Nueva York',
        items: [
          {
            title: 'Consultoría de IA para Startups de NYC',
            description: 'Servicios de consultoría estratégica de IA diseñados específicamente para el acelerado ecosistema de startups de Nueva York.',
          },
          {
            title: 'Soluciones de IA Empresarial',
            description: 'Implementación integral de IA para grandes empresas con sede en la ciudad de Nueva York.',
          },
          {
            title: 'Sistemas Financieros de IA',
            description: 'Soluciones de IA especializadas para el sector financiero, adaptadas a las firmas de Wall Street e instituciones financieras.',
          },
          {
            title: 'Implementación de IA para Retail',
            description: 'Soluciones inteligentes para el diverso panorama minorista de Nueva York, desde boutiques hasta grandes almacenes.',
          },
        ],
      },
      benefits: {
        title: '¿Por qué elegir Harbor AI en Nueva York?',
        items: [
          'Equipo local con profundo conocimiento del entorno empresarial de Nueva York',
          'Experiencia especializada en aplicaciones de IA para finanzas, retail y medios',
          'Tiempos de respuesta rápidos con soporte in situ disponible',
          'Alianzas con instituciones tecnológicas líderes de Nueva York',
          'Experiencia en cumplimiento de regulaciones del estado de Nueva York',
          'Soluciones personalizadas para los desafíos únicos de las empresas de NYC',
        ],
      },
      cta: {
        title: '¿Listo para Transformar su Empresa en Nueva York?',
        subtitle: 'Programe una consulta con nuestro equipo de Nueva York hoy.',
        button: 'Contacte a Nuestra Oficina en NYC',
      },
    },
    'miami': {
      title: 'Soluciones de IA en Miami',
      description: 'Servicios profesionales de IA para empresas en Miami y el sur de Florida.',
      hero: {
        title: 'Soluciones de IA en Miami',
        subtitle: 'Servicios innovadores de inteligencia artificial para empresas en Miami y todo el sur de Florida.',
      },
      services: {
        title: 'Nuestros Servicios en Miami',
        subtitle: 'Soluciones de IA adaptadas para empresas de Miami',
        items: [
          {
            title: 'Soluciones de IA para Hostelería',
            description: 'Sistemas impulsados por IA para la próspera industria de hostelería y turismo de Miami.',
          },
          {
            title: 'Herramientas de IA para Bienes Raíces',
            description: 'Soluciones inteligentes para el dinámico mercado inmobiliario de Miami.',
          },
          {
            title: 'IA para Negocios Internacionales',
            description: 'Sistemas de IA diseñados para empresas internacionales con conexiones latinoamericanas.',
          },
          {
            title: 'Implementación de IA en Salud',
            description: 'Soluciones avanzadas de IA para el creciente sector de salud del sur de Florida.',
          },
        ],
      },
      benefits: {
        title: '¿Por qué elegir Harbor AI en Miami?',
        items: [
          'Equipo bilingüe con fluidez en inglés y español',
          'Conocimiento especializado del panorama empresarial del sur de Florida',
          'Experiencia en aplicaciones de negocios internacionales',
          'Enfoque en los sectores de hostelería, bienes raíces y salud',
          'Soluciones de IA resistentes al clima para empresas de Florida',
          'Soporte local con capacidades globales',
        ],
      },
      cta: {
        title: '¿Listo para Transformar su Empresa en Miami?',
        subtitle: 'Programe una consulta con nuestro equipo de Miami hoy.',
        button: 'Contacte a Nuestra Oficina en Miami',
      },
    },
    'los-angeles': {
      title: 'Soluciones de IA en Los Ángeles',
      description: 'Servicios profesionales de IA para empresas en Los Ángeles y el sur de California.',
      hero: {
        title: 'Soluciones de IA en Los Ángeles',
        subtitle: 'Servicios innovadores de inteligencia artificial para empresas en Los Ángeles y todo el sur de California.',
      },
      services: {
        title: 'Nuestros Servicios en Los Ángeles',
        subtitle: 'Soluciones de IA adaptadas para empresas de LA',
        items: [
          {
            title: 'IA para la Industria del Entretenimiento',
            description: 'Soluciones de IA especializadas para estudios, productoras y empresas de entretenimiento.',
          },
          {
            title: 'Implementación de IA para Startups Tecnológicas',
            description: 'IA de vanguardia para el vibrante ecosistema de startups tecnológicas de LA.',
          },
          {
            title: 'Soluciones de IA para E-commerce',
            description: 'Sistemas inteligentes para el próspero sector de comercio electrónico del sur de California.',
          },
          {
            title: 'IA para Logística y Cadena de Suministro',
            description: 'Optimización impulsada por IA para empresas conectadas a los puertos y redes logísticas de LA.',
          },
        ],
      },
      benefits: {
        title: '¿Por qué elegir Harbor AI en Los Ángeles?',
        items: [
          'Profunda experiencia en aplicaciones de IA para entretenimiento y medios',
          'Conectado al ecosistema de innovación tecnológica de LA',
          'Conocimiento especializado del entorno empresarial del sur de California',
          'Experiencia en optimización de logística y cadena de suministro',
          'Equipo local con capacidades globales',
          'Soluciones de IA sostenibles para empresas con conciencia ambiental',
        ],
      },
      cta: {
        title: '¿Listo para Transformar su Empresa en Los Ángeles?',
        subtitle: 'Programe una consulta con nuestro equipo de LA hoy.',
        button: 'Contacte a Nuestra Oficina en LA',
      },
    },
  },
};

export async function generateStaticParams() {
  const locales = ['en', 'es'];
  const params = [];

  for (const locale of locales) {
    for (const location of locations) {
      params.push({ locale, location });
    }
  }

  return params;
}

export function generateMetadata({
  params: { locale, location },
}: {
  params: { locale: string; location: string };
}): Metadata {
  const t = translations[locale as keyof typeof translations][location as keyof typeof translations['en']];

  return {
    title: t.title,
    description: t.description,
  };
}

export default function LocationPage({
  params: { locale, location },
}: {
  params: { locale: string; location: string };
}) {
  const t = translations[locale as keyof typeof translations][location as keyof typeof translations['en']];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-700 to-primary-900 text-white">
        <div className="container-custom section-padding">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t.hero.title}</h1>
          <p className="text-xl text-primary-100 max-w-3xl">{t.hero.subtitle}</p>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white dark:bg-secondary-900 section-padding">
        <div className="container-custom">
          <div className="mb-12">
            <h2 className="heading-2 mb-4">{t.services.title}</h2>
            <p className="paragraph max-w-3xl">{t.services.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.services.items.map((service, index) => (
              <div
                key={index}
                className="bg-secondary-50 dark:bg-secondary-800 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-xl font-bold mb-3 text-secondary-900 dark:text-white">
                  {service.title}
                </h3>
                <p className="text-secondary-600 dark:text-secondary-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-secondary-100 dark:bg-secondary-800 section-padding">
        <div className="container-custom">
          <h2 className="heading-2 mb-8">{t.benefits.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {t.benefits.items.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start space-x-3 p-4 bg-white dark:bg-secondary-900 rounded-lg shadow-sm"
              >
                <div className="text-primary-600 dark:text-primary-400 mt-1">
                  <FaCheck />
                </div>
                <p className="text-secondary-700 dark:text-secondary-300">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-700 text-white section-padding">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.cta.title}</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">{t.cta.subtitle}</p>
          <Link
            href={`/${locale}/contact`}
            className="inline-flex items-center space-x-2 bg-white text-primary-700 hover:bg-primary-50 font-semibold py-3 px-8 rounded-md transition-colors duration-300 text-lg"
          >
            <span>{t.cta.button}</span>
            <FaArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}