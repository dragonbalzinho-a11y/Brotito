import { useEffect, useState, useMemo } from 'react';
import { Droplets } from 'lucide-react';
import { BrotitoAvatar } from './BrotitoAvatar';
import { MoistureGauge } from './MoistureGauge';
import { SpeechBubble } from './SpeechBubble';
import { PLANTS, type PlantId } from './TabPlants';

type RainDrop = {
  id: number;
  left: number;
  delay: number;
  size: number;
  fall: number;
  duration: number;
};

export function TabStatus({
  moisture,
  onWater,
  waterTrigger,
  plant,
  customPhrase,
}: {
  moisture: number;
  onWater: () => void;
  waterTrigger: number;
  plant: PlantId;
  customPhrase: string;
}) {
  const current = PLANTS.find((p) => p.id === plant) ?? PLANTS[0];
  const [isWatering, setIsWatering] = useState(false);

  const drops = useMemo<RainDrop[]>(() => {
    return Array.from({ length: 18 }, (_, i) => ({
      id: waterTrigger * 1000 + i,
      left: 10 + Math.random() * 80,
      delay: Math.random() * 0.4,
      size: 6 + Math.random() * 8,
      fall: 280 + Math.random() * 120,
      duration: 1 + Math.random() * 0.5,
    }));
  }, [waterTrigger]);

  useEffect(() => {
    if (waterTrigger > 0) {
      setIsWatering(true);
      const t = setTimeout(() => setIsWatering(false), 1500);
      return () => clearTimeout(t);
    }
  }, [waterTrigger]);

  const phrase = customPhrase || (moisture < 40 ? 'Preciso de água! 😢' : moisture > 80 ? 'Muitá água! 😰' : '');

  return (
    <div className="flex flex-col h-full px-4 pt-1 pb-2 overflow-hidden">
      <div className="relative flex-1 flex items-end justify-center min-h-0">
        {/* Name overlay at top */}
        <div className="absolute top-0 left-0 right-0 flex flex-col items-center gap-1 z-10">
          <p className="font-hand text-2xl text-forest leading-none drop-shadow-sm">{current.name}</p>
          <p className="text-[10px] italic text-sage-600">{current.sci}</p>
        </div>

        {/* Speech bubble */}
        <div className="absolute top-12 left-0 right-0 flex justify-center z-10 px-6">
          <SpeechBubble moisture={moisture} phrase={phrase} />
        </div>

        <div className="relative h-full w-full flex items-end justify-center">
          {/* Realistic rain droplets falling onto the plant */}
          {isWatering && (
            <div className="pointer-events-none absolute top-28 right-0 bottom-0 left-0 z-30 overflow-hidden">
              {drops.map((d) => (
                <span
                  key={d.id}
                  className="rain-drop absolute top-0 rounded-full bg-gradient-to-b from-sky-200 to-sky-500 shadow-[0_0_8px_rgba(56,189,248,0.6)]"
                  style={
                    {
                      left: `${d.left}%`,
                      width: `${d.size}px`,
                      height: `${d.size * 1.6}px`,
                      animationDelay: `${d.delay}s`,
                      animationDuration: `${d.duration}s`,
                      '--fall': `${d.fall}px`,
                    } as React.CSSProperties
                  }
                />
              ))}
            </div>
          )}

          <BrotitoAvatar moisture={moisture} plant={plant} isWatering={isWatering} />
        </div>
      </div>

      {/* Bottom control bar */}
      <div className="shrink-0 mt-2 rounded-3xl bg-white/55 backdrop-blur-md border border-sage-200/70 shadow-card px-4 pt-3 pb-3">
        <div className="flex items-center justify-between gap-3">
          <div className="flex flex-col gap-1 min-w-0">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-sage-600">
              Umidade do Solo
            </span>
            <span className="text-[10px] font-semibold text-terracotta-dark">
              Ideal: {current.ideal}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <MoistureGauge moisture={moisture} />

            <button
              onClick={onWater}
              className="flex items-center gap-2 rounded-full bg-gradient-to-b from-terracotta-light to-terracotta-dark text-white font-bold text-sm px-5 py-2.5 shadow-soft active:scale-95 transition-transform"
            >
              <Droplets size={18} fill="currentColor" strokeWidth={0} />
              Regar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
