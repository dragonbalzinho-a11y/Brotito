import { MonsteraLeaf } from './Background';

export function Header() {
  return (
    <div className="relative flex items-center justify-center pt-1 pb-1">
      {/* decorative leaves framing the title */}
      <MonsteraLeaf className="absolute left-2 top-1 w-14 h-14 sway opacity-80 text-forest" />
      <MonsteraLeaf className="absolute right-2 top-1 w-14 h-14 sway opacity-80 text-forest [animation-delay:1s] scale-x-[-1]" />

      <h1 className="font-hand text-4xl text-forest font-bold tracking-wide drop-shadow-sm leading-none">
        My Friend{' '}
        <span className="text-terracotta-dark">Brotito</span>
      </h1>
    </div>
  );
}
