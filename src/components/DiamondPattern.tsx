import React from 'react';
import './DiamondPattern.css'; // Import CSS for animations

interface DiamondPatternProps {
  className?: string;
  width?: number;
  height?: number;
  zoom?: number; // New prop for manual zoom control
  rotation?: number; // New prop for rotation control
  animate?: boolean; // New prop for animation control
}

const DiamondPattern: React.FC<DiamondPatternProps> = ({
  className = '',
  width = '100%',
  height = '100%',
  zoom = 5, // Default zoom level
  rotation = 0, // Default rotation (0 degrees)
  animate = false // Default animation state (false)
}) => {
  // Calculate viewBox dimensions based on zoom level
  const viewBoxWidth = 800 / zoom;
  const viewBoxHeight = 800 / zoom;
  const viewBoxX = (800 - viewBoxWidth) / 2;
  const viewBoxY = (800 - viewBoxHeight) / 2;

  // Create rotation transform string
  const rotationTransform = `rotate(${rotation} 400 400)`;

  // Add animation class if animate prop is true
  const svgClassName = animate ? `${className} rotating-svg` : className;

  return (
    <svg
      className={svgClassName}
      width={width}
      height={height}
      viewBox={`${viewBoxX} ${viewBoxY} ${viewBoxWidth} ${viewBoxHeight}`}
    >
      <image
        href="/ccchaos.svg"
        width="800"
        height="800"
        transform={rotationTransform}
      />
    </svg>
  );
};

export default DiamondPattern;