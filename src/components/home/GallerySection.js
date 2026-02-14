"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { images } from "@/lib/images";
import ScrollReveal from "@/components/ui/ScrollReveal";

const galleryItems = [
  {
    image: images.neonCouch,
    span: "col-span-6 row-span-2 md:col-span-5",
  },
  {
    image: images.darkAngel,
    span: "col-span-6 md:col-span-4",
  },
  {
    image: images.goldArches,
    span: "col-span-6 md:col-span-3",
  },
  {
    image: images.urbanEdgy,
    span: "col-span-6 md:col-span-4",
  },
  {
    image: images.artBW,
    span: "col-span-6 row-span-2 md:col-span-3",
  },
  {
    image: images.yellowCar,
    span: "col-span-6 md:col-span-5",
  },
  {
    image: images.neonClose,
    span: "col-span-6 md:col-span-4",
  },
];

export default function GallerySection() {
  const [activeIndex, setActiveIndex] = useState(null);
  const touchStartXRef = useRef(null);

  const openGallery = useCallback((index) => {
    setActiveIndex(index);
  }, []);

  const closeGallery = useCallback(() => {
    setActiveIndex(null);
  }, []);

  const showPrevious = useCallback(() => {
    setActiveIndex((current) => {
      if (current === null) return 0;
      return (current - 1 + galleryItems.length) % galleryItems.length;
    });
  }, []);

  const showNext = useCallback(() => {
    setActiveIndex((current) => {
      if (current === null) return 0;
      return (current + 1) % galleryItems.length;
    });
  }, []);

  useEffect(() => {
    if (activeIndex === null) return;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeGallery();
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex, closeGallery, showNext, showPrevious]);

  const handleTouchStart = useCallback((event) => {
    touchStartXRef.current = event.changedTouches[0]?.clientX ?? null;
  }, []);

  const handleTouchEnd = useCallback(
    (event) => {
      const startX = touchStartXRef.current;
      const endX = event.changedTouches[0]?.clientX ?? null;
      touchStartXRef.current = null;
      if (startX === null || endX === null) return;

      const distance = endX - startX;
      if (Math.abs(distance) < 45) return;
      if (distance > 0) showPrevious();
      else showNext();
    },
    [showNext, showPrevious],
  );

  const activeImage = activeIndex === null ? null : galleryItems[activeIndex].image;

  return (
    <>
      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-7xl">
          {/* Heading - editorial offset */}
          <ScrollReveal direction="left">
            <div className="mb-12 flex items-center gap-6">
              <h2 className="font-display text-4xl text-pearl neon-glow-magenta md:text-6xl">
                The Visuals
              </h2>
              <div className="hidden h-px flex-1 bg-gradient-to-r from-neon-magenta to-transparent md:block" />
            </div>
          </ScrollReveal>

          {/* Masonry Grid */}
          <div className="grid auto-rows-[250px] grid-cols-6 gap-2 md:auto-rows-[300px] md:grid-cols-12 md:gap-3">
            {galleryItems.map((item, i) => (
              <motion.button
                key={item.image.src}
                type="button"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                onClick={() => openGallery(i)}
                aria-label={`Open photo ${i + 1} of ${galleryItems.length}`}
                className={`group relative overflow-hidden rounded-lg text-left outline-none focus-visible:ring-2 focus-visible:ring-neon-magenta ${item.span}`}
              >
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-neon-magenta/0 transition-all duration-500 group-hover:bg-neon-magenta/10" />
                <div className="absolute inset-0 border border-transparent transition-all duration-500 group-hover:border-neon-magenta/30 group-hover:shadow-[inset_0_0_30px_rgba(255,45,149,0.1)]" />
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[80] bg-neon-black/95 px-4 py-5 sm:px-8 sm:py-8"
            role="dialog"
            aria-modal="true"
            aria-label="Image gallery"
          >
            <button
              type="button"
              onClick={closeGallery}
              aria-label="Close gallery"
              className="absolute inset-0 z-0"
            />

            <motion.div
              initial={{ y: 20, opacity: 0.95 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0.95 }}
              transition={{ duration: 0.25 }}
              className="relative z-10 mx-auto flex h-full w-full max-w-6xl flex-col"
            >
              <div className="mb-3 flex items-center justify-between gap-3">
                <p className="font-body text-sm text-pearl-dim">
                  {activeIndex + 1} / {galleryItems.length}
                </p>
                <button
                  type="button"
                  onClick={closeGallery}
                  className="rounded-full border border-pearl/20 px-4 py-1.5 font-body text-xs font-semibold uppercase tracking-widest text-pearl transition-colors hover:border-neon-magenta hover:text-neon-magenta"
                >
                  Close
                </button>
              </div>

              <div
                className="relative flex flex-1 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-neon-deep"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
              >
                <Image
                  src={activeImage.src}
                  alt={activeImage.alt}
                  fill
                  priority
                  className="object-contain"
                  sizes="100vw"
                />

                <button
                  type="button"
                  onClick={showPrevious}
                  className="absolute left-3 rounded-full border border-pearl/30 bg-neon-black/70 px-4 py-2 font-body text-xs font-semibold uppercase tracking-widest text-pearl transition-colors hover:border-neon-magenta hover:text-neon-magenta"
                >
                  Prev
                </button>
                <button
                  type="button"
                  onClick={showNext}
                  className="absolute right-3 rounded-full border border-pearl/30 bg-neon-black/70 px-4 py-2 font-body text-xs font-semibold uppercase tracking-widest text-pearl transition-colors hover:border-neon-magenta hover:text-neon-magenta"
                >
                  Next
                </button>
              </div>

              <p className="mt-3 text-center font-body text-sm text-pearl-dim">
                {activeImage.alt}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
