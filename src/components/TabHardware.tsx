import { CircuitBoard, Cpu, Gauge, Lightbulb, Plug, Zap } from 'lucide-react';
import { moistureState } from '../lib/moisture';

const COMPONENTS = [
  { icon: Cpu, name: 'Arduino Uno', desc: 'Microcontrolador que lê o sensor e controla os LEDs.' },
  { icon: CircuitBoard, name: 'Protoboard', desc: 'Placa de ensaio para montagem sem solda dos circuitos.' },
  { icon: Plug, name: 'Jumpers', desc: 'Cabos de ligação entre os componentes.' },
  { icon: Gauge, name: 'Sensor Higrômetro', desc: 'Mede a umidade do solo em tempo real.' },
  { icon: Lightbulb, name: '2 LEDs', desc: 'Indicadores visuais para água adequada ou falta de água.' },
];

type LedColor = 'red' | 'green';

export function TabHardware({ moisture }: { moisture: number }) {
  const state = moistureState(moisture);

  const activeLed: LedColor = state === 'happy' ? 'green' : 'red';

  const leds: { color: LedColor; hex: string; label: string }[] = [
    { color: 'red', hex: '#e0564f', label: 'Falta de água' },
    { color: 'green', hex: '#5fbf6f', label: 'Água adequada' },
  ];

  return (
    <div className="h-full overflow-y-auto no-scrollbar px-5 py-3 space-y-5">
      {/* Live LEDs */}
      <div>
        <h2 className="font-hand text-3xl text-forest mb-1">LEDs ao vivo</h2>
        <p className="text-[11px] text-sage-600 mb-3">
          Os LEDs físicos piscam conforme a umidade do solo.
        </p>
        <div className="flex justify-around items-end bg-white/70 backdrop-blur-sm rounded-2xl py-5 shadow-card border border-sage-200/60">
          {leds.map((led) => {
            const isActive = activeLed === led.color;
            return (
              <div key={led.color} className="flex flex-col items-center gap-1.5">
                <span
                  className={`w-12 h-12 rounded-full border-4 transition-all ${
                    isActive ? 'led-on border-sage-700/30' : 'border-sage-200 opacity-40'
                  }`}
                  style={{
                    backgroundColor: isActive ? led.hex : '#dfebe0',
                    color: led.hex,
                  }}
                />
                <span
                  className={`text-[10px] font-bold ${
                    isActive ? 'text-forest' : 'text-sage-400'
                  }`}
                >
                  {led.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Components list */}
      <div>
        <h2 className="font-hand text-3xl text-forest mb-2 flex items-center gap-2">
          <Zap size={20} className="text-terracotta" /> Componentes
        </h2>
        <div className="flex flex-col gap-2">
          {COMPONENTS.map((c) => {
            const Icon = c.icon;
            return (
              <div
                key={c.name}
                className="flex items-center gap-3 rounded-2xl bg-white/75 backdrop-blur-sm p-3 shadow-card border border-sage-200/60"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-sage-100 text-forest">
                  <Icon size={20} strokeWidth={2.2} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-forest">{c.name}</h3>
                  <p className="text-[11px] leading-snug text-sage-600">{c.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
