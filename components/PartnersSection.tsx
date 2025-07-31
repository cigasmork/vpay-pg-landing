import React from 'react';
import { UpbitIcon, BithumbIcon, CoinoneIcon, KorbitIcon, KakaobankIcon, KbankIcon } from './icons';

interface PartnersSectionProps {
  content: {
    title: string;
    subtitle: string;
    logos: { name: string, icon: string }[];
  };
}

const iconMap: { [key: string]: React.ReactNode } = {
    UpbitIcon: <UpbitIcon className="h-8 w-auto text-gray-400" />,
    BithumbIcon: <BithumbIcon className="h-8 w-auto text-gray-400" />,
    CoinoneIcon: <CoinoneIcon className="h-8 w-auto text-gray-400" />,
    KorbitIcon: <KorbitIcon className="h-8 w-auto text-gray-400" />,
    KakaobankIcon: <KakaobankIcon className="h-8 w-auto text-gray-400" />,
    KbankIcon: <KbankIcon className="h-8 w-auto text-gray-400" />,
};

export const PartnersSection: React.FC<PartnersSectionProps> = ({ content }) => {
  const logos = [...content.logos, ...content.logos]; // Duplicate logos for seamless scroll

  return (
    <section className="py-20 md:py-28 bg-black/30 overflow-hidden">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">{content.title}</h2>
        <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">{content.subtitle}</p>
      </div>
      <div className="relative w-full">
        <div className="flex w-max animate-scroll-x">
          {logos.map((logo, index) => (
            <div key={index} className="flex items-center justify-center w-64 h-16">
              {iconMap[logo.icon]}
            </div>
          ))}
        </div>
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-black via-black/80 to-transparent" />
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-black via-black/80 to-transparent" />
      </div>
    </section>
  );
};