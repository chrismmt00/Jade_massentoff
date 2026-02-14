"use client";
import { motion } from "motion/react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SocialIcons from "@/components/ui/SocialIcons";

export default function ContactPage() {
  return (
    <section className="relative min-h-screen px-6 pt-32 pb-20">
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,45,45,0.06)_0%,_transparent_60%)]" />

      <div className="relative mx-auto max-w-3xl">
        {/* Hero Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h1 className="font-display text-5xl text-pearl neon-glow-magenta md:text-7xl">
            Contact
          </h1>
          <p className="mx-auto mt-6 max-w-lg font-display text-2xl text-pearl-dim md:text-3xl">
            For Those Who Understand the Power of Presence.
          </p>
        </motion.div>

        {/* Booking Intro */}
        <ScrollReveal>
          <div className="mb-12">
            <h2 className="mb-6 font-display text-3xl text-pearl md:text-4xl">
              Booking Jade Massentoff
            </h2>
            <div className="space-y-4 font-body text-base leading-relaxed text-pearl-dim md:text-lg">
              <p>
                Jade Massentoff is available for select bookings and high-level
                creative collaborations. Each engagement is intentionally curated
                to align with her artistic vision, brand integrity, and audience
                experience.
              </p>
              <p>
                Jade accepts a limited number of engagements per quarter to
                ensure every performance and partnership receives her full
                creative attention.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Neon Divider */}
        <div className="my-12 h-px w-full bg-gradient-to-r from-transparent via-neon-magenta to-transparent" />

        {/* Available For */}
        <ScrollReveal>
          <div className="mb-12">
            <h3 className="mb-6 font-body text-xs font-semibold uppercase tracking-widest text-neon-magenta">
              Available For
            </h3>
            <div className="glass-card rounded-2xl p-8">
              <ul className="space-y-3 font-body text-base text-pearl md:text-lg">
                <li>Live Performances (Concerts, Showcases, Private Events)</li>
                <li>Featured Vocal Appearances</li>
                <li>Songwriting &amp; Melody Arrangement</li>
                <li>Studio Sessions</li>
                <li>Creative &amp; Visual Collaborations</li>
                <li>Interviews &amp; Media Appearances</li>
                <li>Brand Partnerships &amp; Sponsored Campaigns</li>
              </ul>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <p className="mb-12 font-body text-base leading-relaxed text-pearl-dim md:text-lg">
            Jade brings a commanding stage presence, disciplined sensuality, and
            refined artistry to every room she enters. All collaborations must
            align with her creative direction and long-term brand vision.
          </p>
        </ScrollReveal>

        {/* Neon Divider */}
        <div className="my-12 h-px w-full bg-gradient-to-r from-transparent via-neon-magenta to-transparent" />

        {/* Booking Inquiries */}
        <ScrollReveal>
          <div className="mb-12">
            <h3 className="mb-6 font-body text-xs font-semibold uppercase tracking-widest text-neon-magenta">
              Booking Inquiries
            </h3>
            <div className="space-y-4 font-body text-base leading-relaxed text-pearl-dim md:text-lg">
              <p>
                For availability, rates, and detailed proposals, please contact:
              </p>
              <p>
                <span className="font-body text-xs font-semibold uppercase tracking-widest text-pearl-dim">
                  Email:{" "}
                </span>
                <a
                  href="mailto:Massentoffmusic@gmail.com"
                  className="text-pearl transition-colors duration-300 hover:text-neon-magenta"
                >
                  Massentoffmusic@gmail.com
                </a>
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="glass-card mb-12 rounded-2xl p-8">
            <p className="mb-4 font-body text-sm font-semibold uppercase tracking-widest text-pearl">
              Please Include:
            </p>
            <ul className="space-y-2 font-body text-base text-pearl-dim md:text-lg">
              <li>• Event or Session Date</li>
              <li>• Location (if applicable)</li>
              <li>• Type of Engagement</li>
              <li>• Budget Range</li>
              <li>• Project Details / Creative Brief</li>
            </ul>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="mb-12 text-center">
            <p className="font-body text-sm font-semibold uppercase tracking-[0.2em] text-pearl">
              Serious, professional inquiries only.
            </p>
            <p className="mt-1 font-body text-sm uppercase tracking-[0.2em] text-neon-magenta">
              Alignment is required.
            </p>
          </div>
        </ScrollReveal>

        {/* Neon Divider */}
        <div className="my-12 h-px w-full bg-gradient-to-r from-transparent via-neon-magenta to-transparent" />

        {/* Social Links */}
        <ScrollReveal>
          <div className="text-center">
            <p className="mb-4 font-body text-xs font-semibold uppercase tracking-widest text-pearl-dim">
              Connect
            </p>
            <div className="flex justify-center">
              <SocialIcons size="lg" />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
