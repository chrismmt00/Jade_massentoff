"use client";
import ScrollReveal from "@/components/ui/ScrollReveal";
import StreamingLinks from "@/components/ui/StreamingLinks";

export default function MusicSection() {
  return (
    <section
      id="music"
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
            <iframe
              src="https://open.spotify.com/embed/artist/0trWeG8FrBw1kjZNYYoMUd?utm_source=generator&theme=0"
              width="100%"
              height="352"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              className="rounded-xl"
              title="Spotify - Jade Massentoff"
            />
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
