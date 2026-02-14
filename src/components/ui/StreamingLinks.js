import { FaSpotify, FaYoutube, FaAmazon } from "react-icons/fa6";
import { SiApplemusic, SiTidal } from "react-icons/si";
import { socialLinks } from "@/lib/links";

const platforms = [
  { icon: FaSpotify, href: socialLinks.spotify, label: "Spotify", color: "hover:text-[#1DB954] hover:border-[#1DB954]" },
  { icon: SiApplemusic, href: socialLinks.appleMusic, label: "Apple Music", color: "hover:text-[#FA57C1] hover:border-[#FA57C1]" },
  { icon: SiTidal, href: socialLinks.tidal, label: "Tidal", color: "hover:text-neon-cyan hover:border-neon-cyan" },
  { icon: FaYoutube, href: socialLinks.youtube, label: "YouTube", color: "hover:text-neon-red hover:border-neon-red" },
  { icon: FaAmazon, href: socialLinks.amazonShop, label: "Amazon", color: "hover:text-neon-gold hover:border-neon-gold" },
];

export default function StreamingLinks({ variant = "compact" }) {
  if (variant === "large") {
    return (
      <div className="flex flex-wrap items-center justify-center gap-4">
        {platforms.map(({ icon: Icon, href, label, color }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`glass-card flex items-center gap-3 rounded-full px-6 py-3 font-body text-sm font-medium text-pearl-dim transition-all duration-300 ${color}`}
          >
            <Icon className="text-lg" />
            {label}
          </a>
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-wrap items-center gap-3">
      {platforms.map(({ icon: Icon, href, label, color }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center gap-2 text-sm text-pearl-dim transition-colors duration-300 ${color}`}
        >
          <Icon className="text-base" />
          <span className="font-body">{label}</span>
        </a>
      ))}
    </div>
  );
}
