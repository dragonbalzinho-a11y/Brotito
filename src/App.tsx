import { useEffect, useState } from 'react';
import { WaterBackground } from './components/Background';
import { Header } from './components/Header';
import { BottomNav, type TabId } from './components/BottomNav';
import { XpBadge } from './components/XpBadge';
import { DevPanel } from './components/DevPanel';
import { TabStatus } from './components/TabStatus';
import { TabPlants, type PlantId } from './components/TabPlants';
import { TabHardware } from './components/TabHardware';

const FRASES_FELIZ = [
  'Estou ótimo! Sabia que eu ajudo a reduzir seu estresse e melhoro seu foco? 💚',
  'Que dia lindo! Me sinto maravilhoso hoje! 🌿',
  'Obrigado por cuidar de mim! Você é o melhor! 🥰',
  'Adoro esse ambiente! Tô cheio de vida! ✨',
];

function getLevelInfo(totalXp: number) {
  let level = 1;
  let xpRemaining = totalXp;
  let xpForNextLevel = 100;

  while (xpRemaining >= xpForNextLevel) {
    xpRemaining -= xpForNextLevel;
    level += 1;
    xpForNextLevel = 100 + (level - 1) * 25;
  }

  return { level, xpRemaining, xpForNextLevel };
}

function getLevelTitle(level: number) {
  if (level >= 10) return 'Mestre das Plantas';
  if (level >= 7) return 'Guardião Verde';
  if (level >= 4) return 'Jardineiro';
  if (level >= 2) return 'Cuidador';
  return 'Primeiro Broto';
}

export default function App() {
  const [abaAtiva, setAbaAtiva] = useState<TabId>(2);
  const [umidade, setUmidade] = useState(72);
  const [plantaSelecionada, setPlantaSelecionada] = useState<PlantId>('abacaxi');
  const [xp, setXp] = useState(() => {
    const saved = localStorage.getItem('brotito_xp');
    return saved ? parseInt(saved, 10) : 0;
  });
  const [waterTrigger, setWaterTrigger] = useState(0);
  const [xpGain, setXpGain] = useState<number | null>(null);

  const [fraseAtual, setFraseAtual] = useState(FRASES_FELIZ[0]);
  const [fraseVisivel, setFraseVisivel] = useState(true);


  useEffect(() => {
    localStorage.setItem('brotito_xp', xp.toString());
  }, [xp]);

  const { level: nivel, xpRemaining, xpForNextLevel } = getLevelInfo(xp);
  const tituloNivel = getLevelTitle(nivel);

  // Consumo automático de água (1% a cada 5 segundos)
  useEffect(() => {
    const timer = setInterval(() => {
      setUmidade((u) => (u > 15 ? u - 1 : u));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Rotacionar as frases felizes automaticamente a cada 10 segundos
  useEffect(() => {
    const intervalFrases = setInterval(() => {
      setFraseAtual((fraseAntiga) => {
        const indexAtual = FRASES_FELIZ.indexOf(fraseAntiga);
        if (indexAtual === -1) return FRASES_FELIZ[0];
        const proximoIndex = (indexAtual + 1) % FRASES_FELIZ.length;
        return FRASES_FELIZ[proximoIndex];
      });
    }, 10000);
    return () => clearInterval(intervalFrases);
  }, []);

  // Mostra a frase e esconde após 5 segundos (independente da umidade)
  useEffect(() => {
    setFraseVisivel(true);
    const esconder = setTimeout(() => setFraseVisivel(false), 5000);
    return () => clearTimeout(esconder);
  }, [fraseAtual]);

  // Força uma frase de agradecimento quando rega
  const regar = () => {
    const reward = umidade < 40 ? 25 : umidade <= 80 ? 12 : 0;
    setUmidade((value) => Math.min(75, value + 25));
    setXp((value) => value + reward);
    setXpGain(reward > 0 ? reward : null);
    setTimeout(() => setXpGain(null), 1400);
    setWaterTrigger((value) => value + 1);
    setFraseAtual(
      umidade < 40
        ? 'Obrigado pela água! Que delícia! 🥰💧'
        : umidade > 80
          ? 'Vou com calma na água! 😅'
          : 'Cuidado perfeito! Obrigado! 🥰💧',
    );
    setFraseVisivel(true);
  };

  const obterFraseFinal = () => {
    if (!fraseVisivel) return '';
    if (umidade < 40) return 'Preciso de água! 😢';
    if (umidade > 80) return 'Muitá água! 😰';
    return fraseAtual;
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-sage-800 via-sage-700 to-forest flex items-stretch justify-center sm:p-6">
      <div className="relative flex w-full flex-col overflow-hidden bg-sage-bg shadow-2xl sm:max-w-md sm:rounded-[2rem] sm:my-6 select-none h-[100dvh] sm:h-[calc(100dvh-3rem)] sm:min-h-[640px]">
        <WaterBackground />

        <div className="relative z-10 flex flex-col flex-1 min-h-0">
          <Header />

          <div className="px-4 flex justify-center -mt-1">
            <XpBadge
              xp={xpRemaining}
              level={nivel}
              xpForNextLevel={xpForNextLevel}
              xpGain={xpGain}
              levelTitle={tituloNivel}
            />
          </div>

          <main className="flex-1 min-h-0 relative overflow-hidden">
            {abaAtiva === 2 && (
              <TabStatus
                moisture={umidade}
                onWater={regar}
                waterTrigger={waterTrigger}
                plant={plantaSelecionada}
                customPhrase={obterFraseFinal()}
              />
            )}
            {abaAtiva === 1 && (
              <TabPlants selected={plantaSelecionada} onSelect={setPlantaSelecionada} />
            )}
            {abaAtiva === 3 && <TabHardware moisture={umidade} />}
          </main>

          <DevPanel moisture={umidade} onChange={setUmidade} />
          <BottomNav active={abaAtiva} onChange={setAbaAtiva} />
        </div>
      </div>
    </div>
  );
}
