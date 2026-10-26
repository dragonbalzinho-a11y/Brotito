import { moistureColor } from '../lib/moisture';

// Circular SVG gauge showing soil moisture percentage.
export function MoistureGauge({ moisture }: { moisture: number }) {
  const radius = 52;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (moisture / 100) * circumference;
  const color = moistureColor(moisture);

  return (
    <div className="relative w-28 h-28 flex items-center justify-center">
      <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
        {/* track */}
        <circle
          cx="60"
          cy="60"
          r={radius}
          fill="none"
          stroke="#ffffff"
          strokeWidth="11"
          opacity="0.7"
        />
        {/* progress */}
        <circle
          cx="60"
          cy="60"
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth="11"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{ transition: 'stroke-dashoffset 0.6s ease, stroke 0.4s ease' }}
        />
      </svg>
      <div className="absolute flex flex-col items-center">
        <span className="text-2xl font-bold text-forest tabular-nums leading-none">
          {Math.round(moisture)}%
        </span>
        <span className="text-[8px] font-semibold uppercase tracking-wider text-sage-600 mt-0.5">
          Umidade do Solo
        </span>
      </div>
    </div>
  );
}
