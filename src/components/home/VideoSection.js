"use client";
import { musicVideos } from "@/lib/links";
import YouTubeEmbed from "@/components/ui/YouTubeEmbed";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function VideoSection() {
  return (
    <section id="videos" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <p className="mb-2 text-center font-body text-xs font-semibold uppercase tracking-widest text-neon-magenta">
            Watch
          </p>
          <h2 className="mb-12 text-center font-display text-4xl text-pearl neon-glow-magenta md:text-6xl">
            Music Videos
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {musicVideos.map((video, i) => (
            <ScrollReveal key={video.youtubeId} delay={i * 0.1}>
              <div className="glass-card overflow-hidden rounded-xl p-2">
                <YouTubeEmbed
                  videoId={video.youtubeId}
                  title={video.title}
                />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
