import { useState } from 'react';
import { ChevronUp, FlaskConical } from 'lucide-react';

// Retractable drawer at the base of the screen for live moisture simulation.
export function DevPanel({
  moisture,
  onChange,
}: {
  moisture: number;
  onChange: (v: number) => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative z-30">
      {/* handle / tab */}
      <button
        onClick={() => setOpen((o) => !o)}
        className="absolute -top-7 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-sage-800 text-cream text-[11px] font-semibold pl-3 pr-2 py-1 rounded-t-xl shadow-soft active:scale-95 transition-transform"
      >
        <FlaskConical size={13} />
        Painel Demo
        <ChevronUp
          size={14}
          className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      <div
        className="bg-sage-800/95 backdrop-blur-md text-cream overflow-hidden transition-all duration-300 ease-out"
        style={{ maxHeight: open ? '180px' : '0px' }}
      >
        <div className="px-5 py-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold uppercase tracking-wide text-sage-200">
              Simular Umidade
            </span>
            <span className="text-2xl font-bold tabular-nums">{moisture}%</span>
          </div>
          <input
            type="range"
            min={0}
            max={100}
            value={moisture}
            onChange={(e) => onChange(Number(e.target.value))}
            className="dev-range w-full"
          />
          <p className="text-[10px] text-sage-200/80 mt-2 text-center">
            Arraste para demonstrar como o app reponde em tempo real.
          </p>
        </div>
      </div>
    </div>
  );
}
