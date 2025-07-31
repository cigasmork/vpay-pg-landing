import React, { useState, useRef, useEffect } from 'react';
import { useCountUp } from '../hooks/useCountUp';

interface StatsSectionProps {
  content: {
    title: string;
    items: {
      value: number;
      label: string;
      unit: string;
      description: string;
    }[];
  };
}

const StatItem: React.FC<{ item: StatsSectionProps['content']['items'][0] }> = ({ item }) => {
  const count = useCountUp(item.value, 2000);
  const formattedValue = Number.isInteger(count) ? count : count.toFixed(2);

  return (
    <div className="text-center p-4">
      <h3 className="text-5xl md:text-6xl font-bold text-yellow-400 tracking-tighter">
        {formattedValue}
        <span className="text-4xl md:text-5xl">{item.label}</span>
        {item.unit && <span className="text-2xl md:text-3xl text-gray-400 ml-2">{item.unit}</span>}
      </h3>
      <p className="mt-2 text-gray-400">{item.description}</p>
    </div>
  );
};

export const StatsSection: React.FC<StatsSectionProps> = ({ content }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entries[0].target);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className={`py-16 md:py-24 bg-black/30 backdrop-blur-sm ${isVisible ? 'animate-slide-in-up' : 'opacity-0'}`}>
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-semibold text-center text-white mb-12">{content.title}</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {isVisible && content.items.map((item, index) => <StatItem key={index} item={item} />)}
        </div>
      </div>
    </div>
  );
};