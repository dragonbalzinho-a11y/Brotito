// Speech bubble whose text & color depend on moisture.
import { moistureState, MoistureState } from '../lib/moisture';

const MESSAGES: Record<MoistureState, string> = {
  thirsty: 'Estou com muita sede... Preciso de água! 😢',
  happy: 'Estou ótimo! Sabia que eu ajudo a reduzir seu estresse e melhoro seu foco? 💚',
  drowning: 'Glub glub... socorro, muita água! 😰',
};

const BUBBLE_STYLES: Record<MoistureState, string> = {
  thirsty: 'bg-red-100 text-red-700 border-red-300 pulse-bubble',
  happy: 'bg-sage-50 text-forest border-sage-300',
  drowning: 'bg-amber-100 text-amber-800 border-amber-300 pulse-bubble',
};

export function SpeechBubble({
  moisture,
  phrase,
}: {
  moisture: number;
  phrase?: string;
}) {
  const state = moistureState(moisture);
  const message = phrase ?? MESSAGES[state];
  if (!message) return null;
  return (
    <div className={`relative max-w-[240px] mx-auto px-3 py-1.5 rounded-2xl border-2 text-center text-xs font-medium shadow-card ${BUBBLE_STYLES[state]}`}>
      {message}
      {/* tail */}
      <div className="absolute left-1/2 -bottom-1.5 -translate-x-1/2 w-2.5 h-2.5 rotate-45 border-b-2 border-r-2 bg-inherit border-inherit"
        style={{
          backgroundColor:
            state === 'thirsty' ? '#fee2e2' : state === 'drowning' ? '#fef3c7' : '#eef5ef',
          borderColor:
            state === 'thirsty' ? '#fca5a5' : state === 'drowning' ? '#fcd34d' : '#aacbab',
        }}
      />
    </div>
  );
}
