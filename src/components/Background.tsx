// Organic watercolor-style decorative leaves and blobs for the app background.
// Pure SVG, layered with soft greens to evoke a Costela-de-Adão (Monstera) vibe.

export function WaterBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Base wash */}
      <div className="absolute inset-0 bg-sage-bg" />

      {/* Soft watercolor blobs */}
      <svg
        className="absolute -top-10 -left-16 w-72 h-72 float-slow opacity-60"
        viewBox="0 0 200 200"
        fill="none"
      >
        <path
          d="M100 20 C150 30 180 70 175 120 C170 160 130 185 90 180 C50 175 20 145 25 100 C30 55 60 10 100 20 Z"
          fill="#86a988"
          opacity="0.55"
        />
      </svg>

      <svg
        className="absolute -bottom-16 -right-20 w-80 h-80 float-slower opacity-50"
        viewBox="0 0 200 200"
        fill="none"
      >
        <path
          d="M120 30 C170 45 190 90 180 130 C170 170 120 185 80 175 C40 165 15 130 25 90 C35 50 75 15 120 30 Z"
          fill="#557357"
          opacity="0.5"
        />
      </svg>

      <svg
        className="absolute top-1/3 -right-10 w-56 h-56 float-slow opacity-40"
        viewBox="0 0 200 200"
        fill="none"
      >
        <path
          d="M100 30 C140 40 165 75 160 115 C155 150 120 170 85 165 C45 160 20 130 30 90 C40 50 65 20 100 30 Z"
          fill="#6b8d6e"
          opacity="0.45"
        />
      </svg>

      {/* Monstera-style leaves at edges */}
      <MonsteraLeaf className="absolute -left-6 top-24 w-40 h-40 sway opacity-70 text-sage-600" />
      <MonsteraLeaf className="absolute right-2 top-1/2 w-32 h-32 sway opacity-60 text-olive [animation-delay:1.5s]" />
      <MonsteraLeaf className="absolute left-4 bottom-32 w-36 h-36 sway opacity-60 text-sage-700 [animation-delay:0.8s]" />
      <MonsteraLeaf className="absolute -right-8 bottom-40 w-44 h-44 sway opacity-50 text-forest [animation-delay:2.2s]" />

      {/* Top vignette for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-sage-700/10 via-transparent to-sage-700/15" />
    </div>
  );
}

export function MonsteraLeaf({
  className = '',
}: {
  className?: string;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M50 8 C72 12 88 30 88 52 C88 74 72 90 50 92 C28 90 12 74 12 52 C12 30 28 12 50 8 Z"
        fill="currentColor"
      />
      {/* Leaf splits (fenestrations) typical of Monstera */}
      <path
        d="M50 18 L50 45"
        stroke="#d1e2d3"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.55"
      />
      <path
        d="M34 28 L40 50"
        stroke="#d1e2d3"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.55"
      />
      <path
        d="M66 28 L60 50"
        stroke="#d1e2d3"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.55"
      />
      <path
        d="M24 48 L36 58"
        stroke="#d1e2d3"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.55"
      />
      <path
        d="M76 48 L64 58"
        stroke="#d1e2d3"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.55"
      />
      <path
        d="M30 66 L42 70"
        stroke="#d1e2d3"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.55"
      />
      <path
        d="M70 66 L58 70"
        stroke="#d1e2d3"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.55"
      />
      {/* central vein */}
      <path
        d="M50 12 L50 90"
        stroke="#d1e2d3"
        strokeWidth="1.5"
        opacity="0.4"
      />
    </svg>
  );
}
