import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AmbientBackground } from "@/components/shared/ambient-background";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jaren Kempton | Full Stack Developer",
  description:
    "Full stack developer specializing in modern web applications. Creator of Stride, an intelligent productivity platform.",
  keywords: [
    "Jaren Kempton",
    "Full Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Stride",
  ],
  openGraph: {
    title: "Jaren Kempton | Full Stack Developer",
    description:
      "Full stack developer specializing in modern web applications.",
    type: "website",
    url: "https://jarenkempton.dev",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased`}>
        <AmbientBackground />
        {children}
      </body>
    </html>
  );
}
