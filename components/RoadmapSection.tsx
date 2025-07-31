
import React from 'react';
import { Section } from './Section';

interface RoadmapSectionProps {
  content: {
    title: string;
    subtitle: string;
    steps: {
      phase: string;
      title: string;
      description: string;
    }[];
  };
}

export const RoadmapSection: React.FC<RoadmapSectionProps> = ({ content }) => {
  return (
    <Section id="roadmap" title={content.title} subtitle={content.subtitle}>
      <div className="relative max-w-5xl mx-auto">
        {/* The timeline line */}
        <div className="absolute left-1/2 top-0 h-full w-0.5 bg-gray-700 hidden md:block" />

        <div className="space-y-16 md:space-y-0">
          {content.steps.map((step, index) => (
            <div
              key={index}
              className="md:flex items-center group"
            >
              {/* Right Side Content */}
              <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:order-3' : 'md:order-1'}`}>
                <div className={`p-6 rounded-lg transition-colors duration-300 group-hover:bg-gray-900/50 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                  <p className="text-yellow-400 font-semibold">{step.phase}</p>
                  <h3 className="text-2xl font-bold text-white mt-1">{step.title}</h3>
                  <p className="text-gray-400 mt-2">{step.description}</p>
                </div>
              </div>

              {/* Spacer & Dot */}
              <div className="hidden md:flex md:w-2/12 justify-center md:order-2">
                <div className="w-4 h-4 bg-yellow-500 rounded-full border-4 border-gray-900 z-10 transition-all duration-300 group-hover:scale-150 group-hover:bg-yellow-400" />
              </div>
              
              {/* Left Side Spacer */}
              <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:order-1' : 'md:order-3'}`}></div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
