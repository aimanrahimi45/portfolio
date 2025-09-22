import React from 'react';

interface PortfolioSectionProps {
  title: React.ReactNode;
  subtitle: string;
  id: string;
  children?: React.ReactNode;
}

const PortfolioSection: React.FC<PortfolioSectionProps> = ({ 
  title, 
  subtitle, 
  id, 
  children 
}) => {
  return (
    <div id={id} className="min-h-screen flex items-center justify-center p-8">
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
          {title}
        </h2>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          {subtitle}
        </p>
        {children}
      </div>
    </div>
  );
};

export default PortfolioSection;