import React from 'react';
import GooeyNav from './GooeyNav';
import GlassSurface from './GlassSurface';

interface GlassSurfaceGooeyNavProps {
  items: Array<{ label: string; href: string }>;
}

const GlassSurfaceGooeyNav: React.FC<GlassSurfaceGooeyNavProps> = ({ items }) => {
  return (
    <GlassSurface
      width="auto"
      height={60}
      borderRadius={50}
      borderWidth={0.07}
      brightness={50}
      opacity={0.93}
      blur={11}
      displace={0.5}
      backgroundOpacity={0.06}
      saturation={1}
      distortionScale={-180}
      redOffset={0}
      greenOffset={10}
      blueOffset={20}
      mixBlendMode="screen"
      className="px-6 py-2"
    >
      <GooeyNav
        items={items}
        particleCount={15}
        particleDistances={[90, 10]}
        particleR={100}
        initialActiveIndex={0}
        animationTime={600}
        timeVariance={300}
        colors={[1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6]}
      />
    </GlassSurface>
  );
};

export default GlassSurfaceGooeyNav;