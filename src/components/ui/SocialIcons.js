import { FaInstagram, FaSpotify, FaYoutube } from "react-icons/fa6";
import { socialLinks } from "@/lib/links";

const icons = [
  { icon: FaInstagram, href: socialLinks.instagram, label: "Instagram" },
  { icon: FaSpotify, href: socialLinks.spotify, label: "Spotify" },
  { icon: FaYoutube, href: socialLinks.youtube, label: "YouTube" },
];

const sizes = {
  sm: "text-lg",
  md: "text-xl",
  lg: "text-2xl",
};

export default function SocialIcons({ size = "sm" }) {
  return (
    <div className="flex items-center gap-4">
      {icons.map(({ icon: Icon, href, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className={`${sizes[size]} text-pearl-dim transition-colors duration-300 hover:text-neon-cyan`}
        >
          <Icon />
        </a>
      ))}
    </div>
  );
}
