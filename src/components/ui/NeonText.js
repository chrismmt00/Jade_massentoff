const glowClasses = {
  magenta: "neon-glow-magenta",
  cyan: "neon-glow-cyan",
  gold: "neon-glow-gold",
  red: "neon-glow-red",
};

export default function NeonText({
  children,
  color = "magenta",
  as: Tag = "span",
  pulse = false,
  className = "",
}) {
  return (
    <Tag
      className={`${glowClasses[color]} ${pulse ? "animate-neon-pulse" : ""} ${className}`}
    >
      {children}
    </Tag>
  );
}
