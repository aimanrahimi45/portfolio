import React from 'react';

const TechnologyStackCard: React.FC = () => {
  const technologies = ['React', 'Next.js', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'MongoDB', 'AWS'];

  return (
    <div className="bg-gray-900/70 backdrop-blur-lg rounded-2xl p-6 border border-blue-500/20 shadow-lg shadow-blue-500/10 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300" style={{ height: '250px' }}>
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