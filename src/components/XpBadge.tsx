import { Sparkles, Star } from 'lucide-react';

export function XpBadge({
  xp,
  level,
  xpForNextLevel,
  xpGain,
  levelTitle,
}: {
  xp: number;
  level: number;
  xpForNextLevel: number;
  xpGain: number | null;
  levelTitle: string;
}) {
  const progress = Math.min(100, (xp / xpForNextLevel) * 100);

  return (
    <div className="relative flex items-center gap-2 rounded-2xl border border-sage-300/50 bg-white/75 px-2.5 py-1.5 shadow-card backdrop-blur-sm">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-forest text-cream shadow-sm">
        <Star size={16} fill="currentColor" strokeWidth={0} />
      </div>
      <div className="min-w-[104px] leading-none">
        <div className="flex items-center gap-1.5">
          <span className="text-[10px] font-bold uppercase tracking-wide text-forest">
            Nível {level}
          </span>
          <span className="text-[9px] text-sage-500">{levelTitle}</span>
        </div>
        <div className="mt-1 flex items-center gap-1">
          <Sparkles size={11} className="text-terracotta" />
          <span className="text-xs font-bold tabular-nums text-forest">
            {xp}/{xpForNextLevel} XP
          </span>
        </div>
      </div>
      <div className="w-16 shrink-0">
        <div className="mb-1 h-1.5 overflow-hidden rounded-full bg-sage-200">
          <div
            className="h-full rounded-full bg-terracotta transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
        <span className="text-[8px] font-semibold uppercase tracking-wide text-sage-500">
          próximo nível
        </span>
      </div>
      {xpGain !== null && (
        <span className="absolute -right-1 -top-5 animate-bounce text-xs font-bold text-terracotta-dark">
          +{xpGain} XP
        </span>
      )}
    </div>
  );
}
