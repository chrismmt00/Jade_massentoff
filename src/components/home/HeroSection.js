"use client";
import Image from "next/image";
import { motion } from "motion/react";
import { images } from "@/lib/images";
import GlowButton from "@/components/ui/GlowButton";
import { useIsMobile } from "@/hooks/useIsMobile";
import { useReducedMotionOrMobile } from "@/hooks/useReducedMotionOrMobile";

export default function HeroSection() {
  const isMobile = useIsMobile();
  const reduceMotion = useReducedMotionOrMobile();
  const heroImage = isMobile ? images.heroPortrait : images.urbanEdgy;

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <Image
        key={heroImage.src}
        src={heroImage.src}
        alt={heroImage.alt}
        fill
        priority
        className={`${reduceMotion ? "" : "animate-hero-image-pulse"} object-cover ${
          isMobile ? "object-top" : "object-[center_20%]"
        }`}
        sizes="100vw"
        quality={isMobile ? 62 : 72}
      />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-neon-black via-neon-black/50 to-neon-black/20" />
      <div
        className={`absolute inset-0 bg-neon-magenta/15 ${
          reduceMotion
            ? "mobile-no-blend"
            : "animate-hero-overlay-pulse mix-blend-overlay"
        }`}
      />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-end px-6 pb-20 text-center md:pb-28">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className={`font-display text-5xl text-pearl sm:text-6xl md:text-8xl lg:text-9xl ${
            reduceMotion ? "" : "animate-neon-pulse"
          }`}
        >
          Madame Massentoff
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-4 font-body text-base uppercase tracking-[0.3em] text-pearl-dim sm:text-lg"
        >
          Creative R&B
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-8 flex gap-4"
        >
          <GlowButton href="#music" variant="primary">
            Listen Now
          </GlowButton>
          <GlowButton href="#videos" variant="outline">
            Watch Videos
          </GlowButton>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      {reduceMotion ? (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
          <div className="h-8 w-px bg-gradient-to-b from-neon-magenta to-transparent" />
        </div>
      ) : (
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2"
        >
          <div className="h-8 w-px bg-gradient-to-b from-neon-magenta to-transparent" />
        </motion.div>
      )}
    </section>
  );
}
