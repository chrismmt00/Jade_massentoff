import Link from "next/link";

export default function GlowButton({
  href,
  variant = "primary",
  children,
  className = "",
  external = false,
}) {
  const base =
    "inline-flex items-center justify-center px-8 py-3 rounded-full font-body text-sm font-semibold uppercase tracking-widest transition-all duration-300";

  const variants = {
    primary:
      "bg-neon-magenta/20 border border-neon-magenta text-pearl hover:bg-neon-magenta/40 hover:scale-105 neon-box-magenta",
    outline:
      "bg-transparent border border-pearl/30 text-pearl hover:border-neon-cyan hover:text-neon-cyan hover:scale-105",
    gold: "bg-neon-gold/20 border border-neon-gold text-neon-gold hover:bg-neon-gold/40 hover:scale-105 neon-box-gold",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  if (href?.startsWith("#")) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href || "/"} className={classes}>
      {children}
    </Link>
  );
}
