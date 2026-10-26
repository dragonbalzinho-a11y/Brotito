import type { PlantId } from './TabPlants';

export type Mood = 'thirsty' | 'happy' | 'drowning';

export function moodFromMoisture(m: number): Mood {
  if (m < 40) return 'thirsty';
  if (m > 80) return 'drowning';
  return 'happy';
}

export function BrotitoAvatar({
  moisture,
  plant,
  isWatering,
}: {
  moisture: number;
  plant: PlantId;
  isWatering: boolean;
}) {
  const mood = moodFromMoisture(moisture);
  return (
    <div className="flex flex-col items-center justify-end h-full">
      <div
        className="select-none"
        style={{
          width: 'clamp(130px, 34vw, 190px)',
          height: 'clamp(130px, 25vh, 190px)',
          filter: 'drop-shadow(0 8px 10px rgba(0,0,0,0.16))',
          transform: mood === 'thirsty' ? 'rotate(8deg)' : mood === 'drowning' ? 'rotate(-6deg)' : 'rotate(0deg)',
          transition: 'transform 0.6s ease',
        }}
      >
        <PlantIllustration plant={plant} />
      </div>

      {/* Vaso terracota cartoon com rosto vivo */}
      <div
        className={`relative flex flex-col items-center justify-center mt-[-8px] ${
          isWatering ? 'animate-bounce' : ''
        }`}
        style={{ transition: 'transform 0.3s ease' }}
      >
        {/* Sombra suave sob o vaso */}
        <div className="absolute -bottom-2 w-28 h-4 rounded-full bg-black/20 blur-md" />

        {/* Corpo do vaso */}
        <div className="w-32 h-32 bg-amber-600 rounded-b-3xl shadow-lg border-t-4 border-amber-700 flex flex-col items-center justify-center relative overflow-hidden">
          {/* Boca superior do vaso (borda) */}
          <div className="absolute top-0 left-0 right-0 h-3 bg-amber-700/40" />

          {/* Rostinho */}
          <Face mood={mood} />

          {/* Gotinha de suor quando triste */}
          {mood === 'thirsty' && (
            <div className="absolute top-2 right-1 w-2.5 h-2.5 rounded-full bg-sky-400 animate-bounce" />
          )}
        </div>
      </div>
    </div>
  );
}

function PlantIllustration({ plant }: { plant: PlantId }) {
  if (plant === 'espada') {
    return (
      <svg viewBox="0 0 180 180" className="h-full w-full" aria-hidden="true">
        <defs>
          <linearGradient id="sansevieria" x1="0" x2="1">
            <stop stopColor="#527d59" />
            <stop offset="0.5" stopColor="#a6bf83" />
            <stop offset="1" stopColor="#365f4c" />
          </linearGradient>
        </defs>
        <g fill="url(#sansevieria)" stroke="#3d674c" strokeWidth="2" strokeLinejoin="round">
          <path d="M89 158C76 114 69 49 82 19c14 31 15 87 7 139Z" />
          <path d="M91 158C93 101 111 47 132 29c2 40-12 94-35 130Z" />
          <path d="M86 159C63 119 35 81 35 48c29 18 50 64 55 108Z" />
          <path d="M94 158c21-37 45-59 62-61-2 29-27 54-59 70Z" />
          <path d="M87 158C67 145 50 124 47 102c22 4 39 24 45 51Z" />
        </g>
        <g stroke="#d4dca0" strokeWidth="2" opacity=".75">
          <path d="M82 36l4 103M124 46l-25 91M47 65l39 72M148 109l-50 32" />
        </g>
      </svg>
    );
  }

  if (plant === 'abacaxi') {
    return (
      <svg viewBox="0 0 180 180" className="h-full w-full" aria-hidden="true">
        <defs>
          <linearGradient id="pineapple" x1="0" x2="1" y1="0" y2="1">
            <stop stopColor="#f0c45e" />
            <stop offset="1" stopColor="#c97a35" />
          </linearGradient>
        </defs>
        <g fill="#4f8459" stroke="#345c47" strokeWidth="2" strokeLinejoin="round">
          <path d="M90 91C62 67 62 35 74 18c15 17 19 45 16 72Z" />
          <path d="M92 91C78 56 87 27 104 12c7 27 1 54-8 81Z" />
          <path d="M94 91c2-37 20-57 39-65-1 26-15 50-35 70Z" />
          <path d="M88 91c-28-13-41-33-41-54 22 7 40 24 46 50Z" />
        </g>
        <path d="M61 80c0-22 13-35 29-35s29 13 29 35v35c0 21-13 33-29 33s-29-12-29-33Z" fill="url(#pineapple)" stroke="#a76236" strokeWidth="3" />
        <g fill="none" stroke="#a76236" strokeWidth="2">
          <path d="M63 91l52 28M62 108l43 24M72 76l45 25M72 76l-8 16M89 49l-1 104M106 55l-22 94" />
        </g>
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 180 180" className="h-full w-full" aria-hidden="true">
      <defs>
        <linearGradient id="monstera" x1="0" x2="1" y1="0" y2="1">
          <stop stopColor="#76aa6b" />
          <stop offset="1" stopColor="#285d48" />
        </linearGradient>
      </defs>
      <path d="M90 164V79" stroke="#557b45" strokeWidth="7" strokeLinecap="round" />
      <path d="M90 119C70 105 54 103 39 112M90 99c18-17 30-25 45-25M90 139c-20-8-35-5-47 6" fill="none" stroke="#557b45" strokeWidth="6" strokeLinecap="round" />
      <g fill="url(#monstera)" stroke="#315f48" strokeWidth="2">
        <path d="M87 102C49 111 24 91 28 52c31-4 61 15 59 50Z" />
        <path d="M94 91c-1-37 23-59 58-53 3 33-20 58-58 53Z" />
        <path d="M87 137c-31 12-53-1-56-28 28-9 54 1 56 28Z" />
      </g>
      <g fill="none" stroke="#c2d39a" strokeWidth="3" strokeLinecap="round">
        <path d="M42 59l32 34M51 51l20 40M116 51l-17 33M130 49l-29 36M46 120l30 11" />
      </g>
    </svg>
  );
}

function Face({ mood }: { mood: Mood }) {
  if (mood === 'thirsty') {
    return (
      <div className="flex flex-col items-center gap-1.5 pt-3">
        {/* Olhos em arco para baixo */}
        <div className="flex gap-5">
          <div className="w-5 h-3 border-b-[3px] border-amber-900 rounded-b-full" />
          <div className="w-5 h-3 border-b-[3px] border-amber-900 rounded-b-full" />
        </div>
        {/* Boca triste curvada para baixo */}
        <div className="w-5 h-3 border-b-[3px] border-amber-900 rounded-b-full mt-1" />
      </div>
    );
  }

  if (mood === 'drowning') {
    return (
      <div className="flex flex-col items-center gap-1.5 pt-3">
        {/* Olhos em X */}
        <div className="flex gap-5">
          <div className="relative w-4 h-4">
            <div className="absolute top-1/2 left-0 w-full h-[3px] bg-amber-900 rounded-full rotate-45" />
            <div className="absolute top-1/2 left-0 w-full h-[3px] bg-amber-900 rounded-full -rotate-45" />
          </div>
          <div className="relative w-4 h-4">
            <div className="absolute top-1/2 left-0 w-full h-[3px] bg-amber-900 rounded-full rotate-45" />
            <div className="absolute top-1/2 left-0 w-full h-[3px] bg-amber-900 rounded-full -rotate-45" />
          </div>
        </div>
        {/* Boca em zigue-zague */}
        <svg width="24" height="10" viewBox="0 0 24 10" className="mt-1">
          <path
            d="M2 5 L7 2 L12 5 L17 2 L22 5"
            stroke="#78350F"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    );
  }

  // Happy — kawaii
  return (
    <div className="flex flex-col items-center gap-1.5 pt-3">
      {/* Olhos redondos pretos brilhantes */}
      <div className="flex gap-4 relative">
        <div className="relative w-4 h-4 bg-amber-900 rounded-full flex items-center justify-center">
          <div className="absolute w-1.5 h-1.5 bg-white rounded-full top-0.5 right-0.5" />
        </div>
        <div className="relative w-4 h-4 bg-amber-900 rounded-full flex items-center justify-center">
          <div className="absolute w-1.5 h-1.5 bg-white rounded-full top-0.5 right-0.5" />
        </div>
      </div>
      {/* Bochechas rosadas */}
      <div className="flex gap-7 -mt-0.5">
        <div className="w-5 h-2.5 bg-pink-400/40 rounded-full" />
        <div className="w-5 h-2.5 bg-pink-400/40 rounded-full" />
      </div>
      {/* Sorrisão largo */}
      <div className="w-6 h-3 border-b-[3px] border-amber-900 rounded-b-full mt-0.5" />
    </div>
  );
}
