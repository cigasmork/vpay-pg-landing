
import React from 'react';
import { Section } from './Section';
import { ShineCard } from './ShineCard';
import { MarketGapIcon, GlobalStandardIcon, UserNeedsIcon } from './icons';

interface WhySectionProps {
  content: {
    title: string;
    subtitle: string;
    points: {
      icon: string;
      title: string;
      description: string;
    }[];
  };
}

const iconMap: { [key: string]: React.ReactNode } = {
  MarketGap: <MarketGapIcon className="h-10 w-10 text-yellow-400" />,
  GlobalStandard: <GlobalStandardIcon className="h-10 w-10 text-yellow-400" />,
  UserNeeds: <UserNeedsIcon className="h-10 w-10 text-yellow-400" />,
};

export const WhySection: React.FC<WhySectionProps> = ({ content }) => {
  return (
    <Section id="why" title={content.title} subtitle={content.subtitle}>
      <div className="grid md:grid-cols-3 gap-8">
        {content.points.map((point, index) => (
          <ShineCard key={index} className="rounded-lg bg-gray-900/50 border border-gray-800 backdrop-blur-sm transition-all duration-300 hover:border-yellow-500/80 hover:shadow-2xl hover:shadow-yellow-500/10 hover:-translate-y-2">
            <div className="p-8">
              <div className="mb-4">{iconMap[point.icon]}</div>
              <h3 className="text-lg font-bold text-yellow-400 mb-2">{point.title}</h3>
              <p className="text-gray-400">{point.description}</p>
            </div>
          </ShineCard>
        ))}
      </div>
    </Section>
  );
};