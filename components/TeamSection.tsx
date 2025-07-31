
import React from 'react';
import { Section } from './Section';
import { TechDevIcon, RiskIcon, SupportIcon, BusinessIcon } from './icons';

interface TeamSectionProps {
  content: {
    title: string;
    subtitle: string;
    departments: {
      name: string;
      description: string;
      icon: string;
    }[];
  };
}

const iconMap: { [key: string]: React.ReactNode } = {
    TechDevIcon: <TechDevIcon className="h-10 w-10 text-yellow-400 mb-4" />,
    RiskIcon: <RiskIcon className="h-10 w-10 text-yellow-400 mb-4" />,
    SupportIcon: <SupportIcon className="h-10 w-10 text-yellow-400 mb-4" />,
    BusinessIcon: <BusinessIcon className="h-10 w-10 text-yellow-400 mb-4" />,
};

export const TeamSection: React.FC<TeamSectionProps> = ({ content }) => {
  return (
    <Section id="team" title={content.title} subtitle={content.subtitle}>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {content.departments.map((dept, index) => (
          <div key={index} className="bg-gray-900/50 p-6 rounded-lg border border-gray-800 text-center transition-all duration-300 hover:-translate-y-2 hover:border-yellow-500/30 hover:shadow-xl hover:shadow-yellow-500/10 flex flex-col items-center">
            {iconMap[dept.icon]}
            <h3 className="text-lg font-bold text-yellow-300 mb-2">{dept.name}</h3>
            <p className="text-gray-400 text-sm">{dept.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};
