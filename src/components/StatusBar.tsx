import { BatteryFull, Bluetooth, Wifi, SignalHigh } from 'lucide-react';

export function StatusBar() {
  return (
    <div className="flex items-center justify-between px-6 pt-3 pb-1 text-forest font-semibold text-sm select-none">
      <span className="tracking-tight">9:41</span>
      <div className="flex items-center gap-1.5">
        <SignalHigh size={15} strokeWidth={2.5} />
        <Wifi size={15} strokeWidth={2.5} />
        <Bluetooth size={14} strokeWidth={2.5} />
        <div className="flex items-center gap-0.5">
          <span className="text-[11px] font-bold">100%</span>
          <BatteryFull size={20} strokeWidth={2} />
        </div>
      </div>
    </div>
  );
}
