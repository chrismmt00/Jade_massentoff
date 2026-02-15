"use client";
import { useEffect, useState } from "react";

const MOBILE_QUERY = "(max-width: 767px)";

function subscribe(mediaQuery, onChange) {
  if (mediaQuery.addEventListener) {
    mediaQuery.addEventListener("change", onChange);
    return () => mediaQuery.removeEventListener("change", onChange);
  }

  mediaQuery.addListener(onChange);
  return () => mediaQuery.removeListener(onChange);
}

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia(MOBILE_QUERY);
    const handleChange = () => setIsMobile(mediaQuery.matches);
    handleChange();

    return subscribe(mediaQuery, handleChange);
  }, []);

  return isMobile;
}
