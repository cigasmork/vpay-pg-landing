
import React, { useState, useEffect } from 'react';

interface SectionBackgroundsProps {
  sections: { id: string; imageUrl: string }[];
}

export const SectionBackgrounds: React.FC<SectionBackgroundsProps> = ({ sections }) => {
  const [activeSectionId, setActiveSectionId] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSectionId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-50% 0px -50% 0px', // Trigger when section is in the middle of the viewport
        threshold: 0,
      }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [sections]);

  return (
    <div className="fixed inset-0 z-0">
      {sections.map((section) => (
        <div
          key={section.id}
          className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
            activeSectionId === section.id ? 'opacity-15' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${section.imageUrl})` }}
        />
      ))}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-black via-black/80 to-black/60" />
    </div>
  );
};
