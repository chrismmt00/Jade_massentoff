"use client";
import ScrollReveal from "@/components/ui/ScrollReveal";
import StreamingLinks from "@/components/ui/StreamingLinks";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden px-6 py-24 md:py-32">
      {/* Animated gradient background */}
      <div className="pointer-events-none absolute inset-0 animate-gradient bg-gradient-to-r from-neon-magenta/5 via-neon-purple/5 to-neon-cyan/5" />

      <div className="relative mx-auto max-w-3xl text-center">
        <ScrollReveal>
          <h2 className="font-display text-4xl text-pearl neon-glow-gold md:text-6xl lg:text-7xl">
            Experience the Sound
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <p className="mt-4 font-body text-base uppercase tracking-[0.2em] text-pearl-dim">
            Available on all platforms
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="mt-10">
            <StreamingLinks variant="large" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
