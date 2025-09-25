import React from 'react';

const WebsiteShowcaseCard: React.FC = () => {
  return (
    <div className="backdrop-blur-lg rounded-2xl p-6 border-2 border-cyan-400 shadow-lg shadow-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/70 transition-all duration-300" style={{ height: '200px' }}>
      <div className="flex flex-col items-center text-center">
        <div className="mb-4">
          <div className="bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg w-16 h-16 flex items-center justify-center shadow-lg shadow-purple-500/30 mx-auto">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
        </div>
        <h3 className="text-xl font-bold text-white mb-2">Website Showcase</h3>
        <p className="text-gray-300">
          Websites that stand out and make a difference
        </p>
      </div>
    </div>
  );
};

export default WebsiteShowcaseCard;