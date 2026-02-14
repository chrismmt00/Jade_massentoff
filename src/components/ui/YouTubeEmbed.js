"use client";
import { useState } from "react";
import Image from "next/image";

export default function YouTubeEmbed({ videoId, title }) {
  const [isLoaded, setIsLoaded] = useState(false);

  if (isLoaded) {
    return (
      <div className="aspect-video w-full overflow-hidden rounded-lg">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="h-full w-full"
        />
      </div>
    );
  }

  return (
    <button
      onClick={() => setIsLoaded(true)}
      className="group relative aspect-video w-full overflow-hidden rounded-lg"
    >
      <Image
        src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
        alt={title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, 33vw"
      />
      <div className="absolute inset-0 bg-neon-black/40 transition-colors duration-300 group-hover:bg-neon-black/20" />

      {/* Play button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-neon-magenta neon-box-magenta transition-transform duration-300 group-hover:scale-110">
          <svg
            className="ml-1 h-6 w-6 text-pearl"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>

      <p className="absolute bottom-3 left-3 font-body text-sm font-medium text-pearl">
        {title}
      </p>
    </button>
  );
}
