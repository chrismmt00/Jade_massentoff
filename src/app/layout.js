import { pinyonScript, raleway } from "@/lib/fonts";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { AudioProvider } from "@/components/layout/AudioProvider";
import SiteIntro from "@/components/layout/SiteIntro";
import MusicPlayer from "@/components/layout/MusicPlayer";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: "Jade Massentoff",
  description:
    "Official website of Jade Massentoff - Creative R&B artist. Music, tour dates, and merch.",
  openGraph: {
    title: "Jade Massentoff",
    description:
      "Official website of Jade Massentoff - Creative R&B artist. Music, tour dates, and merch.",
    images: [
      {
        url: "/images/surika-2_2200.webp",
        width: 1412,
        height: 2200,
        alt: "Jade Massentoff",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jade Massentoff",
    description:
      "Official website of Jade Massentoff - Creative R&B artist. Music, tour dates, and merch.",
    images: ["/images/surika-2_2200.webp"],
  },
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
