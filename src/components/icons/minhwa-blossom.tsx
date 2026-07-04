const ESPRESSO = "#3E2B1F";
const RED = "#581C20";
const CENTER = 32;
const PETAL_DIST = 13;
const RX = 7;
const RY = 11;

function petal(i: number) {
  const angle = (i * 72 - 90) * (Math.PI / 180);
  const cx = CENTER + PETAL_DIST * Math.cos(angle);
  const cy = CENTER + PETAL_DIST * Math.sin(angle);
  const rot = i * 72 - 90;
  return (
    <ellipse
      key={i}
      cx={cx}
      cy={cy}
      rx={RX}
      ry={RY}
      fill="none"
      stroke={ESPRESSO}
      strokeWidth={1.5}
      transform={`rotate(${rot}, ${cx}, ${cy})`}
    />
  );
}

export function MinhwaBlossom({ className }: { className?: string }) {
  return (
    <svg
      width={64}
      height={64}
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      {Array.from({ length: 5 }, (_, i) => petal(i))}
      <circle cx={CENTER} cy={CENTER} r={4} fill={RED} />
      <circle cx={CENTER} cy={CENTER} r={4} fill="none" stroke={ESPRESSO} strokeWidth={0.8} />
    </svg>
  );
}
