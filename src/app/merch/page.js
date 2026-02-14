"use client";
import Image from "next/image";
import { motion } from "motion/react";
import { images } from "@/lib/images";
import { socialLinks } from "@/lib/links";
import GlowButton from "@/components/ui/GlowButton";

export default function MerchPage() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      {/* Background Image */}
      <Image
        src={images.yellowCar.src}
        alt={images.yellowCar.alt}
        fill
        priority
        className="object-cover object-[center_30%]"
        sizes="100vw"
        quality={80}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-neon-black/80" />

      {/* Subtle glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,214,10,0.06)_0%,_transparent_70%)]" />

      {/* Content */}
      <div className="relative z-10 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-2 font-body text-xs font-semibold uppercase tracking-widest text-neon-gold"
        >
          Official Merchandise
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-display text-6xl text-pearl neon-glow-gold md:text-8xl lg:text-9xl"
        >
          Merch
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-6 font-body text-2xl uppercase tracking-[0.2em] text-pearl animate-neon-pulse md:text-3xl"
        >
          Coming Soon
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mx-auto mt-4 max-w-md font-body text-base leading-relaxed text-pearl-dim"
        >
          Official Madame Massentoff merchandise dropping soon. Check out the
          Amazon Shop in the meantime.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-8 flex flex-wrap justify-center gap-4"
        >
          <GlowButton
            href={socialLinks.amazonShop}
            variant="gold"
            external
          >
            Amazon Shop
          </GlowButton>
          <GlowButton
            href={socialLinks.instagram}
            variant="primary"
            external
          >
            Follow for Updates
          </GlowButton>
        </motion.div>
      </div>
    </section>
  );
}
