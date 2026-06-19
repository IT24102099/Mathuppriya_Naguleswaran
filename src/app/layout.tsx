import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CursorGlow from "@/components/CursorGlow";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mathuppriya Naguleswaran | Full Stack Developer",
  description: "Portfolio of Mathuppriya Naguleswaran, a Software Engineering Undergraduate at SLIIT specializing in MERN stack, Spring Boot, and React Native mobile systems.",
  keywords: [
    "Mathuppriya Naguleswaran",
    "Mathuppriya",
    "SLIIT",
    "Software Engineer",
    "Full Stack Developer",
    "MERN Stack Developer",
    "React Native Developer",
    "Spring Boot Developer",
    "Sri Lanka",
    "Portfolio"
  ],
  authors: [{ name: "Mathuppriya Naguleswaran" }],
  creator: "Mathuppriya Naguleswaran",
  metadataBase: new URL("https://mathuppriya-dev.vercel.app"),
  openGraph: {
    title: "Mathuppriya Naguleswaran | Full Stack Developer",
    description: "Portfolio of Mathuppriya Naguleswaran, a Software Engineering Undergraduate at SLIIT. Explore featured MERN, React Native, and Spring Boot systems.",
    url: "/",
    siteName: "Mathuppriya Naguleswaran Portfolio",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-950 text-gray-100 selection:bg-purple-500/30 selection:text-purple-200">
        <CursorGlow />
        <div className="flex-1 flex flex-col relative z-10">{children}</div>
      </body>
    </html>
  );
}
