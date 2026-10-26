import React, { useEffect, useState } from 'react';

type Particle = {
  id: number;
  angle: number; // direction in degrees from center
  distance: number; // how far it travels
  delay: number;
  size: number;
};

// Renders a radial burst of water droplets emanating from the center of the plant.
// Position it as a wrapper around the avatar so the burst originates on the leaves.
export function WaterParticles({ trigger }: { trigger: number }) {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    if (trigger === 0) return;
    const burst: Particle[] = Array.from({ length: 20 }, (_, i) => ({
      id: trigger * 100 + i,
      angle: Math.random() * 360,
      distance: 40 + Math.random() * 70,
      delay: Math.random() * 0.2,
      size: 6 + Math.random() * 8,
    }));
    setParticles(burst);
    const t = setTimeout(() => setParticles([]), 1300);
    return () => clearTimeout(t);
  }, [trigger]);

  if (particles.length === 0) return null;

  return (
    <div className="pointer-events-none absolute inset-0 z-30 flex items-center justify-center overflow-hidden">
      <div className="relative">
        {particles.map((p) => {
          const rad = (p.angle * Math.PI) / 180;
          const tx = Math.cos(rad) * p.distance;
          const ty = Math.sin(rad) * p.distance;
          return (
            <span
              key={p.id}
              className="water-burst absolute top-0 left-0 rounded-full bg-gradient-to-b from-sky-200 to-sky-500"
              style={
                {
                  width: p.size,
                  height: p.size * 1.4,
                  animationDelay: `${p.delay}s`,
                  '--tx': `${tx}px`,
                  '--ty': `${ty}px`,
                } as React.CSSProperties
              }
            />
          );
        })}
      </div>
    </div>
  );
}
