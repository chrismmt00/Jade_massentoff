"use client";
import { useEffect, useRef, useState } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import StreamingLinks from "@/components/ui/StreamingLinks";
import { useIsMobile } from "@/hooks/useIsMobile";

const SPOTIFY_EMBED_URL =
  "https://open.spotify.com/embed/artist/0trWeG8FrBw1kjZNYYoMUd?utm_source=generator&theme=0";

export default function MusicSection() {
  const sectionRef = useRef(null);
  const isMobile = useIsMobile();
  const [desktopReady, setDesktopReady] = useState(false);
  const [mobileRequested, setMobileRequested] = useState(false);

  useEffect(() => {
    if (isMobile) return;

    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setDesktopReady(true);
          observer.disconnect();
        }
      },
      { rootMargin: "300px 0px" },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, [isMobile]);

  const shouldLoadEmbed = mobileRequested || (!isMobile && desktopReady);

  return (
    <section
      id="music"
      ref={sectionRef}
      className="relative overflow-hidden px-6 py-24 md:py-32"
    >
      {/* Subtle radial glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,45,149,0.06)_0%,_transparent_70%)]" />

      <div className="relative mx-auto max-w-4xl">
        <ScrollReveal>
          <p className="mb-2 text-center font-body text-xs font-semibold uppercase tracking-widest text-neon-magenta">
            Latest Releases
          </p>
          <h2 className="mb-12 text-center font-display text-4xl text-pearl neon-glow-magenta md:text-6xl">
            Music
          </h2>
        </ScrollReveal>

        {/* Spotify Embed */}
        <ScrollReveal delay={0.1}>
          <div className="glass-card mx-auto max-w-2xl overflow-hidden rounded-2xl p-4">
            {shouldLoadEmbed ? (
              <iframe
                src={SPOTIFY_EMBED_URL}
                width="100%"
                height="352"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                className="rounded-xl"
                title="Spotify - Jade Massentoff"
              />
            ) : (
              <div className="flex h-[352px] flex-col items-center justify-center rounded-xl border border-white/10 bg-neon-deep/80 px-6 text-center">
                <p className="font-body text-xs font-semibold uppercase tracking-widest text-pearl-dim">
                  Spotify Player
                </p>
                {isMobile ? (
                  <button
                    type="button"
                    onClick={() => setMobileRequested(true)}
                    className="mt-6 inline-flex items-center justify-center rounded-full border border-neon-magenta bg-neon-magenta/20 px-6 py-2.5 font-body text-xs font-semibold uppercase tracking-widest text-pearl transition-colors duration-300 hover:bg-neon-magenta/35"
                  >
                    Tap to Load Spotify
                  </button>
                ) : (
                  <p className="mt-4 font-body text-sm text-pearl-dim">
                    Loading player...
                  </p>
                )}
              </div>
            )}
          </div>
        </ScrollReveal>

        {/* Streaming Platform Links */}
        <ScrollReveal delay={0.2}>
          <div className="mt-10 text-center">
            <p className="mb-4 font-body text-xs font-semibold uppercase tracking-widest text-pearl-dim">
              Also Available On
            </p>
            <div className="flex justify-center">
              <StreamingLinks variant="large" />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
