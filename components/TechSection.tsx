
import React from 'react';
import { Section } from './Section';
import { MicroservicesIcon, SecurityIcon, ScalabilityIcon, ComplianceIcon } from './icons';

interface TechSectionProps {
  content: {
    title: string;
    subtitle: string;
    items: {
      icon: string;
      title: string;
      description: string;
    }[];
  };
}

const iconMap: { [key: string]: React.ReactNode } = {
  Microservices: <MicroservicesIcon className="h-8 w-8 text-yellow-400" />,
  Security: <SecurityIcon className="h-8 w-8 text-yellow-400" />,
  Scalability: <ScalabilityIcon className="h-8 w-8 text-yellow-400" />,
  Compliance: <ComplianceIcon className="h-8 w-8 text-yellow-400" />,
};

export const TechSection: React.FC<TechSectionProps> = ({ content }) => {
  return (
    <Section id="tech" title={content.title} subtitle={content.subtitle}>
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-x-8 gap-y-10">
        {content.items.map((item, index) => (
          <div key={index} className="flex gap-6 p-4 rounded-lg transition-all duration-300 hover:bg-gray-900/50 hover:-translate-y-1">
            <div className="flex-shrink-0 w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
              {iconMap[item.icon]}
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
