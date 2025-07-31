import React from 'react';
import { BlockchainIcon, GlobeIcon, ShieldIcon } from './icons';

interface HeroProps {
  content: {
    supertitle: string;
    title: string;
    subtitle: string;
    cta: string;
  };
}

export const Hero: React.FC<HeroProps> = ({ content }) => {
  const handleCTAClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
        {/* Floating Icons */}
        <div className="absolute inset-0 z-0 opacity-20">
            <BlockchainIcon className="absolute top-[10%] left-[15%] h-24 w-24 text-yellow-400 animate-float" style={{ animationDelay: '0s' }} />
            <ShieldIcon className="absolute top-[20%] right-[10%] h-20 w-20 text-yellow-500 animate-float" style={{ animationDelay: '2s' }} />
            <GlobeIcon className="absolute bottom-[15%] left-[25%] h-16 w-16 text-yellow-600 animate-float" style={{ animationDelay: '4s' }} />
            <BlockchainIcon className="absolute bottom-[20%] right-[20%] h-12 w-12 text-yellow-400 animate-float" style={{ animationDelay: '1s', animationDuration: '8s' }} />
        </div>

        <div className="relative z-10 max-w-4xl">
            <p className="text-yellow-400 font-semibold mb-2" >
              {content.supertitle}
            </p>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tighter mb-6">
              {content.title}
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              {content.subtitle}
            </p>
            <a 
              href="#why"
              onClick={(e) => handleCTAClick(e, '#why')}
              className="inline-block bg-yellow-600 text-black font-semibold px-8 py-4 rounded-lg hover:bg-yellow-500 transition-transform transform hover:scale-105 cursor-pointer"
            >
              {content.cta}
            </a>
        </div>
    </section>
  );
};