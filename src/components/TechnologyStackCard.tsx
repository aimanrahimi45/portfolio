import React from 'react';
import './CardInnerGlow.css';

const TechnologyStackCard: React.FC = () => {
  const technologies = ['React', 'Next.js', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'MongoDB', 'AWS'];

  return (
    <div className="backdrop-blur-lg rounded-2xl p-6 border-2 border-cyan-400 card-inner-glow" style={{ height: '250px' }}>
      <h3 className="text-2xl font-bold text-white mb-4">Technology Stack</h3>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 bg-gradient-to-r from-purple-600/30 to-blue-600/30 text-purple-200 rounded-full text-sm font-medium border border-purple-500/30 shadow-sm shadow-purple-500/20"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TechnologyStackCard;