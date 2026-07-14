export function DojangSeal({ size = 56, className }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 56 56"
      aria-label="탐 — Tom N Toms brand seal"
      className={className}
    >
      <rect width={56} height={56} fill="#581C20" />
      <rect x={4} y={4} width={48} height={48} fill="none" stroke="white" strokeWidth={0.8} strokeOpacity={0.4} />
      <text
        x={28}
        y={37}
        textAnchor="middle"
        fontFamily="'Pretendard Variable', 'Pretendard', sans-serif"
        fontWeight={600}
        fontSize={24}
        fill="white"
      >
        탐
      </text>
    </svg>
  );
}
