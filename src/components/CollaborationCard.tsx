import React from 'react';
import DiamondPattern from './DiamondPattern';

interface CircleConfig {
  diameter: number;
  foregroundDiameter: number;
  top: string;
  left: string;
}

const CollaborationCard: React.FC = () => {
  // Individual diameter parameters for each circle - adjust as needed
  const circleConfigs: Record<number, CircleConfig> = {
    1: { diameter: 50, foregroundDiameter: 40, top: '20px', left: '740px' },
    2: { diameter: 70, foregroundDiameter: 60, top: '20px', left: '260px' },
    3: { diameter: 140, foregroundDiameter: 130, top: '90px', left: '400px' },
    4: { diameter: 80, foregroundDiameter: 70, top: '190px', left: '600px' },
    5: { diameter: 40, foregroundDiameter: 30, top: '30px', left: '20px' },
    6: { diameter: 60, foregroundDiameter: 50, top: '200px', left: '230px' }
  };

  return (
    <div className="md:col-span-2 backdrop-blur-lg rounded-2xl border-2 border-cyan-400 transition-all duration-300 relative overflow-hidden collaboration-card" style={{ height: '300px' }}>
      {/* Diamond Pattern Background */}
      <div className="absolute inset-0 opacity-50 pointer-events-none">
        <DiamondPattern pathAnimate={true} />
      </div>
      {/* Content with padding */}
      <div className="p-6 relative z-10">
        {/* Profile image placeholder circles with individual diameter configuration */}
        {Object.entries(circleConfigs).map(([id, config]) => (
          <div
            key={id}
            className={`bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/30 border-4 border-white/20 circle-${id}`}
            style={{
              width: `${config.diameter}px`,
              height: `${config.diameter}px`,
              position: 'absolute',
              top: config.top,
              left: config.left
            }}
          >
            <div className="bg-gray-200 border-2 border-dashed rounded-full flex items-center justify-center text-gray-500"
              style={{
                width: `${config.foregroundDiameter}px`,
                height: `${config.foregroundDiameter}px`
              }}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-1/2 w-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollaborationCard;