
import React from 'react';
import type { Language } from '../types';
import { LogoIcon } from './icons';

interface HeaderProps {
  content: {
    title: string;
    nav: {
        why: string;
        services: string;
        team: string;
        tech: string;
        roadmap: string;
        contact: string;
    }
  };
  onLanguageChange: (lang: Language) => void;
  currentLanguage: Language;
}

export const Header: React.FC<HeaderProps> = ({ content, onLanguageChange, currentLanguage }) => {
  const navLinks = [
    { href: '#why', text: content.nav.why },
    { href: '#services', text: content.nav.services },
    { href: '#team', text: content.nav.team },
    { href: '#tech', text: content.nav.tech },
    { href: '#roadmap', text: content.nav.roadmap },
    { href: '#contact', text: content.nav.contact },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-black/50 backdrop-blur-lg">
      <div className="container mx-auto px-6 md:px-12 py-4 flex justify-between items-center">
        <a href="#hero" onClick={(e) => handleNavClick(e, '#hero')} className="flex items-center gap-2 text-xl font-bold text-white cursor-pointer">
          <LogoIcon className="h-8 w-8 text-yellow-400" />
          <span>{content.title}</span>
        </a>
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a 
              key={link.href} 
              href={link.href} 
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm text-gray-300 hover:text-white transition-colors cursor-pointer"
            >
              {link.text}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button
            onClick={() => onLanguageChange('en')}
            className={`px-3 py-1 text-sm rounded-md transition-colors ${currentLanguage === 'en' ? 'bg-yellow-500 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}
          >
            EN
          </button>
          <button
            onClick={() => onLanguageChange('ko')}
            className={`px-3 py-1 text-sm rounded-md transition-colors ${currentLanguage === 'ko' ? 'bg-yellow-500 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}
          >
            KO
          </button>
        </div>
      </div>
    </header>
  );
};
