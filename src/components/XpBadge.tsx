import { Sparkles, Star } from 'lucide-react';

export function XpBadge({
  xp,
  level,
  xpForNextLevel,
  xpGain,
}: {
  xp: number;
  level: number;
  xpForNextLevel: number;
  xpGain: number | null;
}) {
  const progress = Math.min(100, (xp / xpForNextLevel) * 100);

  return (
    <div className="relative flex items-center gap-2 bg-white/70 backdrop-blur-sm rounded-full pl-2 pr-3 py-1 shadow-card border border-sage-300/50">
      <div className="flex items-center justify-center w-7 h-7 rounded-full bg-forest text-cream">
        <Star size={15} fill="currentColor" strokeWidth={0} />
      </div>
      <div className="flex flex-col leading-none">
        <span className="text-[10px] font-semibold uppercase tracking-wide text-sage-600">
          Nível {level}
        </span>
        <div className="flex items-center gap-1">
          <Sparkles size={11} className="text-terracotta" />
          <span className="text-xs font-bold text-forest tabular-nums">
            {xp}/{xpForNextLevel} XP
          </span>
        </div>
      </div>
      <div className="w-14 h-1.5 rounded-full bg-sage-200 overflow-hidden">
        <div
          className="h-full bg-terracotta rounded-full transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>
      {xpGain !== null && (
        <span className="absolute -top-5 right-0 text-xs font-bold text-terracotta-dark animate-bounce">
          +{xpGain} XP
        </span>
      )}
    </div>
  );
}
