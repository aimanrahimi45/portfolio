import React from 'react';
import './CardInnerGlow.css';

const TimeZoneCard: React.FC = () => {
  return (
    <div className="backdrop-blur-lg rounded-2xl p-6 border-2 border-cyan-400 card-inner-glow" style={{ height: '200px' }}>
      <div className="flex flex-col items-center text-center">
        <div className="mb-4">
          <div className="bg-gradient-to-br from-purple-500 to-blue-500 rounded-full w-16 h-16 flex items-center justify-center shadow-lg shadow-purple-500/30 mx-auto">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
        <h3 className="text-xl font-bold text-white mb-2">Global Time Zone</h3>
        <p className="text-gray-300">
          Flexible with time zone communications (US, UK, India)
        </p>
      </div>
    </div>
  );
};

export default TimeZoneCard;