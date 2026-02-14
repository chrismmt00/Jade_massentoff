"use client";
import { createContext, useContext, useRef, useState, useCallback } from "react";

const AudioContext = createContext(null);

const PREVIEW_URL =
  "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/67/d3/e5/67d3e553-dcfe-0f77-2f08-9753a053f8d9/mzaf_10011519215028811591.plus.aac.p.m4a";

export function AudioProvider({ children }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const play = useCallback(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio(PREVIEW_URL);
      audioRef.current.loop = true;
      audioRef.current.volume = 0.5;
      audioRef.current.addEventListener("pause", () => setIsPlaying(false));
      audioRef.current.addEventListener("play", () => setIsPlaying(true));
    }
    audioRef.current.play().catch(() => {});
  }, []);

  const pause = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
  }, []);

  const toggle = useCallback(() => {
    if (isPlaying) {
      pause();
    } else {
      play();
    }
  }, [isPlaying, play, pause]);

  return (
    <AudioContext.Provider value={{ isPlaying, play, pause, toggle }}>
      {children}
    </AudioContext.Provider>
  );
}

export function useAudio() {
  const ctx = useContext(AudioContext);
  if (!ctx) throw new Error("useAudio must be used within AudioProvider");
  return ctx;
}
