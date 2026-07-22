import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hassan Rasool | AI Engineer & Full Stack Software Developer",
  description:
    "Portfolio of Hassan Rasool - Computer Vision Specialist, Deep Learning Engineer, and Full Stack Developer specializing in Python, Django, React, Next.js, and PyTorch.",
  keywords: [
    "Hassan Rasool",
    "AI Engineer",
    "Full Stack Developer",
    "Computer Vision",
    "Deep Learning",
    "Django",
    "React",
    "Next.js",
    "Python",
    "PyTorch",
  ],
  authors: [{ name: "Hassan Rasool" }],
  openGraph: {
    title: "Hassan Rasool | AI Engineer & Full Stack Developer",
    description:
      "Explore AI projects, deep learning solutions, computer vision applications, and full-stack software built by Hassan Rasool.",
    url: "https://hassansden.netlify.app/",
    siteName: "Hassan Rasool Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body className="bg-[#050816] text-slate-100 antialiased selection:bg-primary/30 selection:text-cyan-200">
        {children}
      </body>
    </html>
  );
}
