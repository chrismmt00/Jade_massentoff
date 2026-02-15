"use client";
import { useEffect, useState } from "react";

const PERF_SAFETY_QUERY = "(prefers-reduced-motion: reduce), (max-width: 767px)";

function subscribe(mediaQuery, onChange) {
  if (mediaQuery.addEventListener) {
    mediaQuery.addEventListener("change", onChange);
    return () => mediaQuery.removeEventListener("change", onChange);
  }

  mediaQuery.addListener(onChange);
  return () => mediaQuery.removeListener(onChange);
}

export function useReducedMotionOrMobile() {
  const [reduceMotionOrMobile, setReduceMotionOrMobile] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia(PERF_SAFETY_QUERY);
    const handleChange = () => setReduceMotionOrMobile(mediaQuery.matches);
    handleChange();

    return subscribe(mediaQuery, handleChange);
  }, []);

  return reduceMotionOrMobile;
}
