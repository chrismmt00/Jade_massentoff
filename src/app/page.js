import HeroSection from "@/components/home/HeroSection";
import MusicSection from "@/components/home/MusicSection";
import GallerySection from "@/components/home/GallerySection";
import AboutSection from "@/components/home/AboutSection";
import VideoSection from "@/components/home/VideoSection";
import CTASection from "@/components/home/CTASection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <MusicSection />
      <GallerySection />
      <AboutSection />
      <VideoSection />
      <CTASection />
    </main>
  );
}
