import { AirVent, Brain, Droplets, Focus, Leaf } from 'lucide-react';

export type PlantId = 'costela' | 'espada' | 'abacaxi';

export type Plant = {
  id: PlantId;
  name: string;
  sci: string;
  ideal: string;
  desc: string;
};

export const PLANTS: Plant[] = [
  {
    id: 'costela',
    name: 'Costela-de-Adão',
    sci: 'Monstera deliciosa',
    ideal: '40% – 80%',
    desc: 'Folhas largas com fenestrações. Adora umidade moderada e ambientes iluminados.',
  },
  {
    id: 'espada',
    name: 'Espada de São Jorge',
    sci: 'Sansevieria',
    ideal: '30% – 60%',
    desc: 'Extremamente resistente. Purifica o ar à noite e tolera pouca luz.',
  },
  {
    id: 'abacaxi',
    name: 'Abacaxi Ornamental',
    sci: 'Ananas comosus',
    ideal: '50% – 80%',
    desc: 'Folhas rígidas em roseta e fruto dourado decorativo. É o pet tropical do Brotito.'
  },
];

const BENEFITS = [
  {
    icon: AirVent,
    title: 'Purificação do Ar',
    text: 'Filtra toxinas como formaldeído e benzeno, deixando o ar mais limpo.',
    color: 'bg-sage-100 text-sage-700',
  },
  {
    icon: Brain,
    title: 'Redução do Estresse',
    text: 'O cuidado com plantas diminui a ansiedade e traz bem-estar mental.',
    color: 'bg-terracotta/15 text-terracotta-dark',
  },
  {
    icon: Droplets,
    title: 'Controle de Umidade',
    text: 'Libera vapor dágua naturalmente, equilibrando a umidade do ambiente.',
    color: 'bg-sky-100 text-sky-700',
  },
  {
    icon: Focus,
    title: 'Melhora o Foco',
    text: 'Ter plantas por perto aumenta a concentração e a produtividade.',
    color: 'bg-amber-100 text-amber-700',
  },
];

export function TabPlants({
  selected,
  onSelect,
}: {
  selected: PlantId;
  onSelect: (id: PlantId) => void;
}) {
  return (
    <div className="h-full overflow-y-auto no-scrollbar px-5 py-3 space-y-4">
      {/* Plant selector */}
      <div>
        <h2 className="font-hand text-3xl text-forest mb-2">Escolha sua planta</h2>
        <div className="flex flex-col gap-2">
          {PLANTS.map((p) => {
            const isSel = selected === p.id;
            const isFeatured = p.id === 'abacaxi';
            return (
              <button
                key={p.id}
                onClick={() => onSelect(p.id)}
                className={`relative flex items-center gap-3 rounded-2xl p-3 text-left border-2 transition-all ${
                  isSel
                    ? 'bg-forest text-cream border-forest shadow-soft'
                    : isFeatured
                      ? 'bg-amber-50/90 text-forest border-amber-300 shadow-card active:scale-[0.98]'
                      : 'bg-white/70 text-forest border-sage-200 active:scale-[0.98]'
                }`}
              >
                <div
                  className={`flex items-center justify-center w-11 h-11 rounded-xl ${
                    isSel ? 'bg-cream/20' : 'bg-sage-100'
                  }`}
                >
                  <Leaf size={22} className={isSel ? 'text-cream' : 'text-forest'} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2">
                    <span className="font-bold text-sm">{p.name}</span>
                    <span className={`text-[10px] italic ${isSel ? 'text-cream/70' : 'text-sage-500'}`}>
                      {p.sci}
                    </span>
                  </div>
                  <p className={`text-[11px] leading-snug ${isSel ? 'text-cream/85' : 'text-sage-600'}`}>
                    {p.desc}
                  </p>
                  <span className={`text-[10px] font-semibold ${isSel ? 'text-cream/80' : 'text-terracotta-dark'}`}>
                    Umidade ideal: {p.ideal}
                  </span>
                  {isFeatured && !isSel && (
                    <span className="absolute right-3 top-2 rounded-full bg-amber-200 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide text-amber-900">
                      Destaque
                    </span>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Benefits */}
      <div>
        <h2 className="font-hand text-3xl text-forest mb-2">Benefícios</h2>
        <div className="grid grid-cols-2 gap-3">
          {BENEFITS.map((b) => {
            const Icon = b.icon;
            return (
              <div
                key={b.title}
                className="rounded-2xl bg-white/75 backdrop-blur-sm p-3 shadow-card border border-sage-200/60"
              >
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center mb-2 ${b.color}`}>
                  <Icon size={18} strokeWidth={2.2} />
                </div>
                <h3 className="text-xs font-bold text-forest leading-tight">{b.title}</h3>
                <p className="text-[10px] leading-snug text-sage-600 mt-1">{b.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
