import type { Metadata } from "next";
import {
  Inter,
  Playfair_Display,
} from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mathuppriya | Full Stack Developer",
  description:
    "Personal portfolio of Mathuppriya, a Software Engineering undergraduate focused on full-stack web development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className} ${playfair.variable}`}>
      <body className="min-h-screen bg-[var(--background)] text-[var(--text-primary)] antialiased">
        {children}
      </body>
    </html>
  );
}
