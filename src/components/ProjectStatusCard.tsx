import React from 'react';
import './CardInnerGlow.css';

const ProjectStatusCard: React.FC = () => {
  return (
    <div className="md:col-span-3 backdrop-blur-lg rounded-2xl p-6 border-2 border-cyan-400 card-inner-glow" style={{ height: '150px' }}>
      <div className="flex items-center justify-center space-x-4">
        <div className="flex-shrink-0">
          <div className="bg-gradient-to-br from-purple-500 to-blue-500 rounded-full w-12 h-12 flex items-center justify-center shadow-lg shadow-purple-500/30">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">The Inside Scoop</h3>
          <p className="text-gray-300 text-lg">
            Currently building a SaaS Application
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectStatusCard;