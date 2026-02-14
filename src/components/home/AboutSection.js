"use client";
import Image from "next/image";
import { images } from "@/lib/images";
import { socialLinks } from "@/lib/links";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function AboutSection() {
  return (
    <section className="relative overflow-hidden px-6 py-24 md:py-32">
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 bg-[radial-gradient(ellipse_at_center,_rgba(155,93,229,0.08)_0%,_transparent_70%)]" />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">
        {/* Photo */}
        <ScrollReveal direction="left">
          <div className="relative">
            <div className="relative aspect-[3/2] overflow-hidden rounded-lg md:aspect-[4/5]">
              <Image
                src={images.moodyBW.src}
                alt={images.moodyBW.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            {/* Neon accent border */}
            <div className="absolute -bottom-2 -left-2 h-full w-full rounded-lg border border-neon-magenta/20" />
          </div>
        </ScrollReveal>

        {/* Text */}
        <ScrollReveal direction="right">
          <p className="mb-2 font-body text-xs font-semibold uppercase tracking-widest text-neon-magenta">
            About
          </p>
          <h2 className="mb-6 font-display text-4xl text-pearl md:text-5xl">
            Jade Massentoff
          </h2>
          <div className="space-y-4 font-body text-base leading-relaxed text-pearl-dim md:text-lg">
            <p>
              Jade Massentoff is a multi-dimensional artist and entrepreneur known for her commanding presence and emotionally resonant sound. Blending elegance with edge, she creates music rooted in resilience, reinvention, and radical self-acceptance.
            </p>
            <p>
              Her journey began with a deep love for music and dance for many years but after experiencing the devastating loss of her brother, Jade temporarily stepped away from her creative path while navigating anxiety and depression. However, through discipline, self-reflection, and an unwavering commitment to growth, she returned stronger by building a career defined by authenticity and fearless expression.
            </p>
            <p>
              Today, she is a Recording Artist, business owner, and performance artist whose work carries both vulnerability and quiet authority. Often called “The Jade of All Trades,” she embodies artistry without limits, constantly proving that reinvention is its own form of power.
            </p>
          </div>
          <a
            href={socialLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 font-body text-sm font-semibold uppercase tracking-widest text-pearl transition-colors duration-300 hover:text-neon-cyan"
          >
            Follow the Journey
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
