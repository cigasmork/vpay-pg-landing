
import React from 'react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t border-gray-800 mt-20">
      <div className="container mx-auto px-6 md:px-12 py-8 text-center text-gray-500">
        <p>&copy; {currentYear} Project VPAY PG. All Rights Reserved.</p>
        <p className="text-xs mt-2">This website is for project demonstration purposes only.</p>
      </div>
    </footer>
  );
};
