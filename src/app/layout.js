import { pinyonScript, raleway } from "@/lib/fonts";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { AudioProvider } from "@/components/layout/AudioProvider";
import SiteIntro from "@/components/layout/SiteIntro";
import MusicPlayer from "@/components/layout/MusicPlayer";
import "./globals.css";

export const metadata = {
  title: "Jade Massentoff | Madame Massentoff",
  description:
    "Official website of Jade Massentoff - Creative R&B artist. Music, tour dates, and merch.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${pinyonScript.variable} ${raleway.variable} antialiased`}
      >
        <AudioProvider>
          <SiteIntro />
          <Header />
          {children}
          <Footer />
          <MusicPlayer />
        </AudioProvider>
      </body>
    </html>
  );
}
