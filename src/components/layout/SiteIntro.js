"use client";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useAudio } from "./AudioProvider";

const STORAGE_KEY = "site-entered";

export default function SiteIntro() {
  const [show, setShow] = useState(null);
  const { play } = useAudio();

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      try {
        const hasEntered = window.sessionStorage.getItem(STORAGE_KEY) === "true";
        setShow(!hasEntered);
      } catch {
        // Some mobile/private contexts can block storage access.
        setShow(true);
      }
    });

    return () => window.cancelAnimationFrame(frameId);
  }, []);

  function handleEnter() {
    try {
      window.sessionStorage.setItem(STORAGE_KEY, "true");
    } catch {
      // Ignore storage write failures and continue the entry flow.
    }
    try {
      const canAutoPlay =
        window.matchMedia("(min-width: 1024px)").matches &&
        window.matchMedia("(pointer: fine)").matches;
      if (canAutoPlay) {
        play();
      }
    } catch {
      // Ignore media-query failures and proceed without autoplay.
    }
    setShow(false);
  }

  if (show === null) {
    return null;
  }

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-neon-black"
        >
          {/* Subtle background glow */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,45,45,0.06)_0%,_transparent_60%)]" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative text-center"
          >
            <h1 className="font-display text-5xl text-pearl animate-neon-pulse sm:text-7xl md:text-8xl">
              Madame Massentoff
            </h1>
            <p className="mt-4 font-body text-base uppercase tracking-[0.3em] text-pearl-dim sm:text-lg">
              Creative R&B
            </p>
          </motion.div>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            onClick={handleEnter}
            className="relative mt-12 inline-flex items-center justify-center rounded-full border border-neon-magenta bg-neon-magenta/20 px-10 py-4 font-body text-sm font-semibold uppercase tracking-widest text-pearl transition-all duration-300 hover:scale-105 hover:bg-neon-magenta/40 neon-box-magenta"
          >
            Enter
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
