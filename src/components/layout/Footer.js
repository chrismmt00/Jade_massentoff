import Link from "next/link";
import { navLinks } from "@/lib/links";
import SocialIcons from "@/components/ui/SocialIcons";
import StreamingLinks from "@/components/ui/StreamingLinks";

export default function Footer() {
  return (
    <footer className="relative mt-20">
      {/* Neon gradient top border */}
      <div className="h-px w-full bg-gradient-to-r from-neon-magenta via-neon-purple to-neon-cyan" />

      <div className="bg-neon-deep px-6 py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <p className="font-display text-3xl text-pearl">
              Jade Massentoff
            </p>
            <p className="mt-2 font-body text-sm tracking-wide text-pearl-dim">
              Creative R&B
            </p>
          </div>

          {/* Listen Now */}
          <div>
            <h3 className="mb-4 font-body text-xs font-semibold uppercase tracking-widest text-pearl-dim">
              Listen Now
            </h3>
            <StreamingLinks variant="compact" />
          </div>

          {/* Connect */}
          <div>
            <h3 className="mb-4 font-body text-xs font-semibold uppercase tracking-widest text-pearl-dim">
              Connect
            </h3>
            <SocialIcons size="md" />
            <div className="mt-6 flex gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-body text-xs uppercase tracking-widest text-pearl-dim transition-colors duration-300 hover:text-neon-magenta"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-white/5 pt-8 text-center">
          <p className="font-body text-xs text-pearl-dim">
            &copy; {new Date().getFullYear()} Jade Massentoff. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
