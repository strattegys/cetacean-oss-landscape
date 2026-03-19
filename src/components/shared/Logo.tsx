interface Props {
  size?: number
}

export function Logo({ size = 32 }: Props) {
  const iconSize = size * 0.5625 // 18/32 ratio
  return (
    <div
      className="rounded-lg bg-gradient-to-br from-cyan-400 to-teal-500 flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
      >
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z" />
        <path d="M8 12c0-2.2 1.8-4 4-4s4 1.8 4 4" />
        <path d="M12 16v-4" />
      </svg>
    </div>
  )
}
