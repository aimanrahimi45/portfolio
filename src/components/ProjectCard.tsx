import React from 'react';

interface ProjectCardProps {
  item: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ item }) => {
  return (
    <div className="backdrop-blur-md rounded-2xl p-6 border-2 border-cyan-400 shadow-lg shadow-cyan-400/50">
      <h4 className="text-xl font-bold text-white mb-3">Project {item}</h4>
      <p className="text-gray-300">
        Modern web application with stunning visuals and smooth interactions.
      </p>
    </div>
  );
};

export default ProjectCard;