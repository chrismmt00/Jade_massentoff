"use client";
import Image from "next/image";
import { motion } from "motion/react";
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
  return (
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
            <motion.div
              key={item.image.src}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className={`group relative overflow-hidden rounded-lg ${item.span}`}
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
