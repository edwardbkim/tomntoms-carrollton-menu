const ESPRESSO = "#3E2B1F";

export function MinhwaBranch({ className }: { className?: string }) {
  return (
    <svg
      width={120}
      height={24}
      viewBox="0 0 120 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      {/* Main gnarled branch */}
      <path
        d="M 4 18 C 18 14 35 20 52 16 C 68 12 88 19 108 15 C 112 14 116 15 119 14"
        stroke={ESPRESSO}
        strokeWidth={1.4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Bud 1 — upper left branch */}
      <path
        d="M 36 16 C 34 10 37 4 40 5"
        stroke={ESPRESSO}
        strokeWidth={1.2}
        strokeLinecap="round"
      />
      <circle cx={40} cy={5} r={2.5} stroke={ESPRESSO} strokeWidth={1.2} fill="none" />
      {/* Bud 2 — upper right branch */}
      <path
        d="M 82 16 C 80 9 84 3 87 5"
        stroke={ESPRESSO}
        strokeWidth={1.2}
        strokeLinecap="round"
      />
      <circle cx={87} cy={5} r={2.5} stroke={ESPRESSO} strokeWidth={1.2} fill="none" />
      {/* Short twig midpoint */}
      <path
        d="M 58 14 C 57 9 60 6 62 8"
        stroke={ESPRESSO}
        strokeWidth={1.0}
        strokeLinecap="round"
      />
    </svg>
  );
}
