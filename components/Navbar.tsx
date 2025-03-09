'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaBars, FaTimes } from 'react-icons/fa';
import { usePathname } from 'next/navigation';

const translations = {
  en: {
    home: 'Home',
    about: 'About',
    services: 'Services',
    pricing: 'Pricing',
    contact: 'Contact',
  },
  es: {
    home: 'Inicio',
    about: 'Nosotros',
    services: 'Servicios',
    pricing: 'Precios',
    contact: 'Contacto',
  },
};

export default function Navbar({ locale }: { locale: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const t = translations[locale as keyof typeof translations];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { name: t.home, href: `/${locale}` },
    { name: t.about, href: `/${locale}/about` },
    { name: t.services, href: `/${locale}/services` },
    { name: t.pricing, href: `/${locale}/pricing` },
    { name: t.contact, href: `/${locale}/contact` },
  ];

  const isActive = (path: string) => {
    return pathname === path;
  };

  const otherLocale = locale === 'en' ? 'es' : 'en';
  const currentPath = pathname.replace(`/${locale}`, `/${otherLocale}`);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white dark:bg-secondary-900 shadow-md z-50">
      <div className="container-custom flex justify-between items-center h-16">
        <Link href={`/${locale}`} className="flex items-center">
          <div className="relative h-10 w-10 mr-2">
            {/* Replace with your actual logo */}
            <div className="h-10 w-10 bg-primary-600 rounded-md flex items-center justify-center text-white font-bold">
              HA
            </div>
          </div>
          <span className="text-xl font-bold text-primary-600">Harbor AI</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-medium transition-colors duration-300 ${
                isActive(item.href)
                  ? 'text-primary-600 dark:text-primary-400'
                  : 'text-secondary-600 hover:text-primary-600 dark:text-secondary-300 dark:hover:text-primary-400'
              }`}
            >
              {item.name}
            </Link>
          ))}
          <Link
            href={currentPath}
            className="ml-4 px-3 py-1 text-sm bg-secondary-100 hover:bg-secondary-200 dark:bg-secondary-800 dark:hover:bg-secondary-700 rounded-md transition-colors duration-300"
          >
            {otherLocale.toUpperCase()}
          </Link>
        </div>

        {/* Mobile Navigation Toggle */}
        <button
          className="md:hidden text-secondary-800 dark:text-white"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-secondary-900 shadow-lg">
          <div className="container-custom py-4 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block py-2 px-4 text-sm font-medium rounded-md transition-colors duration-300 ${
                  isActive(item.href)
                    ? 'bg-primary-50 text-primary-600 dark:bg-secondary-800 dark:text-primary-400'
                    : 'text-secondary-600 hover:bg-secondary-50 hover:text-primary-600 dark:text-secondary-300 dark:hover:bg-secondary-800 dark:hover:text-primary-400'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href={currentPath}
              className="block py-2 px-4 text-sm font-medium rounded-md bg-secondary-100 hover:bg-secondary-200 dark:bg-secondary-800 dark:hover:bg-secondary-700 transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              {locale === 'en' ? 'Español' : 'English'}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}