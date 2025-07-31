
import React from 'react';
import { Section } from './Section';
import { ShineCard } from './ShineCard';
import { ApiIcon, SettlementIcon, PosIcon, LowFeeIcon, WalletIcon, ClickIcon, SecurityShieldIcon, AssetIcon } from './icons';

interface ServiceSectionProps {
  content: {
    title: string;
    subtitle:string;
    merchants: {
      title: string;
      description: string;
      features: { text: string, icon: string }[];
    };
    consumers: {
      title: string;
      description: string;
      features: { text: string, icon: string }[];
    };
  };
}

const iconMap: { [key: string]: React.ReactNode } = {
    ApiIcon: <ApiIcon className="h-8 w-8 text-yellow-400" />,
    SettlementIcon: <SettlementIcon className="h-8 w-8 text-yellow-400" />,
    PosIcon: <PosIcon className="h-8 w-8 text-yellow-400" />,
    LowFeeIcon: <LowFeeIcon className="h-8 w-8 text-yellow-400" />,
    WalletIcon: <WalletIcon className="h-8 w-8 text-yellow-400" />,
    ClickIcon: <ClickIcon className="h-8 w-8 text-yellow-400" />,
    SecurityShieldIcon: <SecurityShieldIcon className="h-8 w-8 text-yellow-400" />,
    AssetIcon: <AssetIcon className="h-8 w-8 text-yellow-400" />,
};


export const ServiceSection: React.FC<ServiceSectionProps> = ({ content }) => {
  return (
    <Section id="services" title={content.title} subtitle={content.subtitle}>
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        <ShineCard className="rounded-lg bg-gray-900/50 border border-gray-800 transition-all duration-300 hover:border-gray-700">
          <div className="p-8">
            <h3 className="text-2xl font-bold text-white mb-2">{content.merchants.title}</h3>
            <p className="text-gray-400 mb-6">{content.merchants.description}</p>
            <ul className="space-y-4">
              {content.merchants.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gray-800/50 rounded-lg flex items-center justify-center mt-1">
                    {iconMap[feature.icon]}
                  </div>
                  <span className="text-gray-300 pt-3">{feature.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </ShineCard>
        <ShineCard className="rounded-lg bg-gray-900/50 border border-gray-800 transition-all duration-300 hover:border-gray-700">
          <div className="p-8">
            <h3 className="text-2xl font-bold text-white mb-2">{content.consumers.title}</h3>
            <p className="text-gray-400 mb-6">{content.consumers.description}</p>
            <ul className="space-y-4">
              {content.consumers.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gray-800/50 rounded-lg flex items-center justify-center mt-1">
                    {iconMap[feature.icon]}
                  </div>
                  <span className="text-gray-300 pt-3">{feature.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </ShineCard>
      </div>
    </Section>
  );
};
