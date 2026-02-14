"use client";
import {
  createContext,
  useContext,
  useRef,
  useState,
  useCallback,
  useEffect,
} from "react";

const AudioContext = createContext(null);

const PREVIEW_URL =
  "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/67/d3/e5/67d3e553-dcfe-0f77-2f08-9753a053f8d9/mzaf_10011519215028811591.plus.aac.p.m4a";

export function AudioProvider({ children }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const handlePause = useCallback(() => setIsPlaying(false), []);
  const handlePlay = useCallback(() => setIsPlaying(true), []);

  const play = useCallback(() => {
    if (!audioRef.current) {
      const audio = new Audio(PREVIEW_URL);
      audio.loop = true;
      audio.volume = 0.5;
      audio.addEventListener("pause", handlePause);
      audio.addEventListener("play", handlePlay);
      audioRef.current = audio;
    }
    audioRef.current.play().catch(() => {
      setIsPlaying(false);
    });
  }, [handlePause, handlePlay]);

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

  useEffect(() => {
    return () => {
      const audio = audioRef.current;
      if (!audio) return;
      audio.removeEventListener("pause", handlePause);
      audio.removeEventListener("play", handlePlay);
      audio.pause();
      audioRef.current = null;
    };
  }, [handlePause, handlePlay]);

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
