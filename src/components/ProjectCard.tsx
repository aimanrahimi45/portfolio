import React from 'react';

interface ProjectCardProps {
  item: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ item }) => {
  return (
    <div className="bg-gray-900/70 backdrop-blur-md rounded-2xl p-6">
      <h4 className="text-xl font-bold text-white mb-3">Project {item}</h4>
      <p className="text-gray-300">
        Modern web application with stunning visuals and smooth interactions.
      </p>
    </div>
  );
};

export default ProjectCard;