export type MoistureState = 'thirsty' | 'happy' | 'drowning';

export function moistureState(m: number): MoistureState {
  if (m < 40) return 'thirsty';
  if (m > 80) return 'drowning';
  return 'happy';
}

export function moistureColor(m: number): string {
  if (m < 40) return '#d97757'; // terracotta/red-ish
  if (m > 80) return '#e0a040'; // amber
  return '#4a6b4d'; // forest green
}
