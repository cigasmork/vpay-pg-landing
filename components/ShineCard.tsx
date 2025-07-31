import React, { useRef } from 'react';

interface ShineCardProps {
  children: React.ReactNode;
  className?: string;
}

export const ShineCard: React.FC<ShineCardProps> = ({ children, className = '' }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty('--mouse-x', `${x}px`);
    cardRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={onMouseMove}
      className={`shine-card ${className}`}
    >
      {children}
    </div>
  );
};
