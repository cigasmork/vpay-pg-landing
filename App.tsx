import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { StatsSection } from './components/StatsSection';
import { WhySection } from './components/WhySection';
import { ServiceSection } from './components/ServiceSection';
import { PartnersSection } from './components/PartnersSection';
import { TeamSection } from './components/TeamSection';
import { TechSection } from './components/TechSection';
import { RoadmapSection } from './components/RoadmapSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';
import { content } from './constants/content';
import type { Language } from './types';
import { ScrollToTopButton } from './components/ScrollToTopButton';
import { SectionBackgrounds } from './components/SectionBackgrounds';

const whyBg = './assets/why-bg.jpg';
const servicesBg = './assets/services-bg.jpg';
const teamBg = './assets/team-bg.jpg';
const techBg = './assets/tech-bg.jpg';
const roadmapBg = './assets/roadmap-bg.jpg';
const contactBg = './assets/contact-bg.jpg';


const sectionData = [
  { id: 'why', imageUrl: whyBg },
  { id: 'services', imageUrl: servicesBg },
  { id: 'team', imageUrl: teamBg },
  { id: 'tech', imageUrl: techBg },
  { id: 'roadmap', imageUrl: roadmapBg },
  { id: 'contact', imageUrl: contactBg },
];

const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>('ko');

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const currentContent = content[language];

  return (
    <div className="bg-black text-gray-200 antialiased">
      <SectionBackgrounds sections={sectionData} />
      <AnimatedBackground />
      
      <div className="relative z-20">
        <Header 
          content={currentContent.header} 
          onLanguageChange={handleLanguageChange} 
          currentLanguage={language}
        />
        <main className="container mx-auto px-6 md:px-12">
          <Hero content={currentContent.hero} />
          <StatsSection content={currentContent.stats} />
          <WhySection content={currentContent.why} />
          <ServiceSection content={currentContent.service} />
          <PartnersSection content={currentContent.partners} />
          <TeamSection content={currentContent.team} />
          <TechSection content={currentContent.tech} />
          <RoadmapSection content={currentContent.roadmap} />
          <ContactSection content={currentContent.contact} />
        </main>
        <Footer />
        <ScrollToTopButton />
      </div>
    </div>
  );
};

export default App;