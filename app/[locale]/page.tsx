import Link from 'next/link';
import { FaRobot, FaChartLine, FaCode, FaLaptopCode } from 'react-icons/fa';
import { Metadata } from 'next';

const translations = {
  en: {
    title: 'Professional AI Solutions for Your Business',
    subtitle: 'Leverage the power of artificial intelligence to transform your business operations and drive growth.',
    cta: 'Get Started',
    learnMore: 'Learn More',
    featuresTitle: 'Our Services',
    featuresSubtitle: 'Comprehensive AI solutions tailored to your business needs',
    feature1Title: 'AI Automation',
    feature1Desc: 'Automate repetitive tasks and workflows to increase efficiency and reduce operational costs.',
    feature2Title: 'Data Analytics',
    feature2Desc: 'Extract valuable insights from your data to make informed business decisions.',
    feature3Title: 'Custom AI Development',
    feature3Desc: 'Develop custom AI solutions tailored to your specific business requirements.',
    feature4Title: 'Website Development',
    feature4Desc: 'Create modern, responsive websites with integrated AI capabilities.',
    testimonialsTitle: 'What Our Clients Say',
    testimonialsSubtitle: 'Success stories from businesses that have partnered with Harbor AI',
    testimonial1: 'Harbor AI transformed our customer service operations with their AI chatbot solution. We\'ve seen a 40% reduction in response time and improved customer satisfaction.',
    testimonial1Author: 'Sarah Johnson',
    testimonial1Company: 'CEO, TechSolutions Inc.',
    testimonial2: 'The data analytics platform developed by Harbor AI has given us unprecedented insights into our business operations. It\'s been a game-changer for our decision-making process.',
    testimonial2Author: 'Michael Chen',
    testimonial2Company: 'COO, Global Enterprises',
    testimonial3: 'Working with Harbor AI on our website redesign was a fantastic experience. They delivered a beautiful, functional site that has significantly increased our conversion rates.',
    testimonial3Author: 'Emily Rodriguez',
    testimonial3Company: 'Marketing Director, Innovate Co.',
    ctaTitle: 'Ready to Transform Your Business?',
    ctaSubtitle: 'Get in touch with our team to discuss how Harbor AI can help you achieve your business goals.',
    ctaButton: 'Contact Us Today',
  },
  es: {
    title: 'Soluciones Profesionales de IA para su Empresa',
    subtitle: 'Aproveche el poder de la inteligencia artificial para transformar las operaciones de su empresa e impulsar el crecimiento.',
    cta: 'Comenzar',
    learnMore: 'Más Información',
    featuresTitle: 'Nuestros Servicios',
    featuresSubtitle: 'Soluciones integrales de IA adaptadas a las necesidades de su empresa',
    feature1Title: 'Automatización con IA',
    feature1Desc: 'Automatice tareas y flujos de trabajo repetitivos para aumentar la eficiencia y reducir los costos operativos.',
    feature2Title: 'Análisis de Datos',
    feature2Desc: 'Extraiga información valiosa de sus datos para tomar decisiones empresariales informadas.',
    feature3Title: 'Desarrollo de IA Personalizado',
    feature3Desc: 'Desarrolle soluciones de IA personalizadas adaptadas a los requisitos específicos de su empresa.',
    feature4Title: 'Desarrollo de Sitios Web',
    feature4Desc: 'Cree sitios web modernos y responsivos con capacidades de IA integradas.',
    testimonialsTitle: 'Lo que Dicen Nuestros Clientes',
    testimonialsSubtitle: 'Historias de éxito de empresas que se han asociado con Harbor AI',
    testimonial1: 'Harbor AI transformó nuestras operaciones de servicio al cliente con su solución de chatbot de IA. Hemos visto una reducción del 40% en el tiempo de respuesta y una mejora en la satisfacción del cliente.',
    testimonial1Author: 'Sarah Johnson',
    testimonial1Company: 'CEO, TechSolutions Inc.',
    testimonial2: 'La plataforma de análisis de datos desarrollada por Harbor AI nos ha brindado información sin precedentes sobre nuestras operaciones comerciales. Ha sido un cambio de juego para nuestro proceso de toma de decisiones.',
    testimonial2Author: 'Michael Chen',
    testimonial2Company: 'COO, Global Enterprises',
    testimonial3: 'Trabajar con Harbor AI en el rediseño de nuestro sitio web fue una experiencia fantástica. Entregaron un sitio hermoso y funcional que ha aumentado significativamente nuestras tasas de conversión.',
    testimonial3Author: 'Emily Rodriguez',
    testimonial3Company: 'Directora de Marketing, Innovate Co.',
    ctaTitle: '¿Listo para Transformar su Empresa?',
    ctaSubtitle: 'Póngase en contacto con nuestro equipo para discutir cómo Harbor AI puede ayudarlo a alcanzar sus objetivos empresariales.',
    ctaButton: 'Contáctenos Hoy',
  },
};

export const metadata: Metadata = {
  title: 'Professional AI Solutions',
  description: 'Harbor AI provides professional AI-driven solutions for businesses of all sizes.',
};

export default function Home({ params: { locale } }: { params: { locale: string } }) {
  const t = translations[locale as keyof typeof translations];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-700 to-primary-900 text-white">
        <div className="container-custom section-padding flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-4xl">{t.title}</h1>
          <p className="text-xl md:text-2xl text-primary-100 mb-8 max-w-3xl">{t.subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href={`/${locale}/contact`} className="btn-primary text-lg px-8 py-3">
              {t.cta}
            </Link>
            <Link
              href={`/${locale}/services`}
              className="bg-transparent border-2 border-white hover:bg-white hover:text-primary-700 text-white font-semibold py-3 px-8 rounded-md transition-colors duration-300 text-lg"
            >
              {t.learnMore}
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white dark:bg-secondary-900 section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">{t.featuresTitle}</h2>
            <p className="paragraph max-w-3xl mx-auto">{t.featuresSubtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="bg-secondary-50 dark:bg-secondary-800 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="text-primary-600 dark:text-primary-400 mb-4">
                <FaRobot size={48} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-secondary-900 dark:text-white">
                {t.feature1Title}
              </h3>
              <p className="text-secondary-600 dark:text-secondary-300">{t.feature1Desc}</p>
            </div>

            {/* Feature 2 */}
            <div className="bg-secondary-50 dark:bg-secondary-800 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="text-primary-600 dark:text-primary-400 mb-4">
                <FaChartLine size={48} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-secondary-900 dark:text-white">
                {t.feature2Title}
              </h3>
              <p className="text-secondary-600 dark:text-secondary-300">{t.feature2Desc}</p>
            </div>

            {/* Feature 3 */}
            <div className="bg-secondary-50 dark:bg-secondary-800 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="text-primary-600 dark:text-primary-400 mb-4">
                <FaCode size={48} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-secondary-900 dark:text-white">
                {t.feature3Title}
              </h3>
              <p className="text-secondary-600 dark:text-secondary-300">{t.feature3Desc}</p>
            </div>

            {/* Feature 4 */}
            <div className="bg-secondary-50 dark:bg-secondary-800 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="text-primary-600 dark:text-primary-400 mb-4">
                <FaLaptopCode size={48} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-secondary-900 dark:text-white">
                {t.feature4Title}
              </h3>
              <p className="text-secondary-600 dark:text-secondary-300">{t.feature4Desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-secondary-100 dark:bg-secondary-800 section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">{t.testimonialsTitle}</h2>
            <p className="paragraph max-w-3xl mx-auto">{t.testimonialsSubtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white dark:bg-secondary-900 p-8 rounded-lg shadow-md">
              <div className="mb-4 text-primary-500">
                <svg
                  className="w-10 h-10"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
              </div>
              <p className="text-secondary-700 dark:text-secondary-300 mb-6">{t.testimonial1}</p>
              <div>
                <p className="font-semibold text-secondary-900 dark:text-white">
                  {t.testimonial1Author}
                </p>
                <p className="text-secondary-600 dark:text-secondary-400">
                  {t.testimonial1Company}
                </p>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white dark:bg-secondary-900 p-8 rounded-lg shadow-md">
              <div className="mb-4 text-primary-500">
                <svg
                  className="w-10 h-10"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
              </div>
              <p className="text-secondary-700 dark:text-secondary-300 mb-6">{t.testimonial2}</p>
              <div>
                <p className="font-semibold text-secondary-900 dark:text-white">
                  {t.testimonial2Author}
                </p>
                <p className="text-secondary-600 dark:text-secondary-400">
                  {t.testimonial2Company}
                </p>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white dark:bg-secondary-900 p-8 rounded-lg shadow-md">
              <div className="mb-4 text-primary-500">
                <svg
                  className="w-10 h-10"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
              </div>
              <p className="text-secondary-700 dark:text-secondary-300 mb-6">{t.testimonial3}</p>
              <div>
                <p className="font-semibold text-secondary-900 dark:text-white">
                  {t.testimonial3Author}
                </p>
                <p className="text-secondary-600 dark:text-secondary-400">
                  {t.testimonial3Company}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-700 text-white section-padding">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.ctaTitle}</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">{t.ctaSubtitle}</p>
          <Link
            href={`/${locale}/contact`}
            className="inline-block bg-white text-primary-700 hover:bg-primary-50 font-semibold py-3 px-8 rounded-md transition-colors duration-300 text-lg"
          >
            {t.ctaButton}
          </Link>
        </div>
      </section>
    </div>
  );
}