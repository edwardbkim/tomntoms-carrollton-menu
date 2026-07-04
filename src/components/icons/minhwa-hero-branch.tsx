const ESPRESSO = "#3E2B1F";
const RED = "#581C20";
const CREAM = "#FAF5EC";

type BlossomProps = {
  cx: number;
  cy: number;
  r?: number;
  filled?: boolean;
};

function Blossom({ cx, cy, r = 10, filled = false }: BlossomProps) {
  const d = r * 0.75;
  return (
    <g>
      {Array.from({ length: 5 }, (_, i) => {
        const angle = (i * 72 - 90) * (Math.PI / 180);
        const pcx = cx + d * Math.cos(angle);
        const pcy = cy + d * Math.sin(angle);
        return (
          <ellipse
            key={i}
            cx={pcx}
            cy={pcy}
            rx={r * 0.44}
            ry={r * 0.68}
            fill={filled ? RED : "none"}
            stroke={ESPRESSO}
            strokeWidth={1.3}
            transform={`rotate(${i * 72 - 90}, ${pcx}, ${pcy})`}
          />
        );
      })}
      <circle cx={cx} cy={cy} r={r * 0.22} fill={filled ? CREAM : ESPRESSO} />
    </g>
  );
}

export function MinhwaHeroBranch({ className }: { className?: string }) {
  return (
    <svg
      width={240}
      height={200}
      viewBox="0 0 240 200"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      {/* Main branch — descends from top center toward lower-left */}
      <path
        d="M 120 -5 C 110 15 90 20 75 35 C 60 50 55 70 40 80 C 28 88 16 88 8 100"
        stroke={ESPRESSO}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Secondary branch right — extends upper-right from midpoint */}
      <path
        d="M 75 35 C 95 28 115 30 130 22 C 145 14 158 18 170 10"
        stroke={ESPRESSO}
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Twig from secondary to blossom */}
      <path
        d="M 130 22 C 128 35 125 48 120 55"
        stroke={ESPRESSO}
        strokeWidth={1.3}
        strokeLinecap="round"
      />
      {/* Lower secondary branch */}
      <path
        d="M 40 80 C 55 75 70 78 82 72 C 92 67 98 60 108 58"
        stroke={ESPRESSO}
        strokeWidth={1.4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Small twig lower-left */}
      <path
        d="M 8 100 C 6 115 10 128 12 140"
        stroke={ESPRESSO}
        strokeWidth={1.2}
        strokeLinecap="round"
      />

      {/* Blossoms — 3 red filled, 2 outline */}
      <Blossom cx={170} cy={10} r={11} filled />
      <Blossom cx={120} cy={55} r={10} filled />
      <Blossom cx={108} cy={58} r={9} filled />
      <Blossom cx={12} cy={140} r={9} />
      <Blossom cx={82} cy={72} r={8} />

      {/* Small buds — round circles at twig tips */}
      <circle cx={190} cy={4} r={3} stroke={ESPRESSO} strokeWidth={1.2} fill="none" />
      <circle cx={210} cy={8} r={2.5} stroke={ESPRESSO} strokeWidth={1.1} fill="none" />
    </svg>
  );
}
