"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { FaMusic, FaPause, FaPlay } from "react-icons/fa6";
import { useAudio } from "./AudioProvider";

const APPLE_MUSIC_EMBED =
  "https://embed.music.apple.com/us/album/let-it-flow-sexology/1868073674?i=1868073675&theme=dark";

export default function MusicPlayer() {
  const { isPlaying, toggle } = useAudio();
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-[45]">
      <AnimatePresence mode="wait">
        {expanded ? (
          <motion.div
            key="player"
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            transition={{ duration: 0.3 }}
            className="glass-card overflow-hidden rounded-2xl"
          >
            {/* Controls bar */}
            <div className="flex items-center justify-between px-3 py-2">
              <button
                onClick={toggle}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-neon-magenta text-pearl transition-all duration-300 hover:bg-neon-magenta/20"
                aria-label={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? (
                  <FaPause className="text-xs" />
                ) : (
                  <FaPlay className="ml-0.5 text-xs" />
                )}
              </button>
              <span className="mx-3 font-body text-xs text-pearl-dim">
                Let It Flow (Sexology)
              </span>
              <button
                onClick={() => setExpanded(false)}
                className="flex h-6 w-6 items-center justify-center rounded-full text-xs text-pearl-dim transition-colors hover:text-pearl"
                aria-label="Minimize player"
              >
                ✕
              </button>
            </div>

            <iframe
              src={APPLE_MUSIC_EMBED}
              width="300"
              height="175"
              allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
              sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
              className="rounded-b-2xl"
              loading="lazy"
              title="Apple Music - Let It Flow (Sexology)"
            />
          </motion.div>
        ) : (
          <motion.button
            key="toggle"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            onClick={toggle}
            onDoubleClick={() => setExpanded(true)}
            className={`flex h-12 w-12 items-center justify-center rounded-full border bg-neon-black/80 text-pearl backdrop-blur-sm transition-all duration-300 hover:scale-110 ${
              isPlaying
                ? "border-neon-magenta neon-box-magenta"
                : "border-pearl/30"
            }`}
            aria-label={isPlaying ? "Pause music" : "Play music"}
            title="Click to play/pause · Double-click to expand"
          >
            {isPlaying ? (
              <FaPause className="text-sm" />
            ) : (
              <FaMusic className="text-sm" />
            )}
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
