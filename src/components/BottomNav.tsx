import { Leaf, Sprout, Wrench } from 'lucide-react';

export type TabId = 1 | 2 | 3;

const TABS: { id: TabId; label: string; icon: typeof Leaf }[] = [
  { id: 1, label: 'Plantas', icon: Leaf },
  { id: 2, label: 'Brotito', icon: Sprout },
  { id: 3, label: 'Hardware', icon: Wrench },
];

export function BottomNav({
  active,
  onChange,
}: {
  active: TabId;
  onChange: (id: TabId) => void;
}) {
  return (
    <nav className="flex items-stretch justify-around bg-white/70 backdrop-blur-md border-t border-sage-300/50 px-2 py-1.5">
      {TABS.map((tab) => {
        const Icon = tab.icon;
        const isActive = active === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => onChange(tab.id)}
            className={`flex flex-col items-center justify-center gap-0.5 flex-1 py-1.5 rounded-2xl transition-all duration-200 ${
              isActive
                ? 'bg-forest text-cream shadow-soft scale-105'
                : 'text-sage-600 active:scale-95'
            }`}
          >
            <Icon
              size={22}
              strokeWidth={isActive ? 2.5 : 2}
              className={isActive ? 'sway' : ''}
            />
            <span className="text-[11px] font-semibold">{tab.label}</span>
          </button>
        );
      })}
    </nav>
  );
}
