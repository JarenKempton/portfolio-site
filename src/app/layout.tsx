import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AmbientBackground } from "@/components/shared/ambient-background";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jaren Kempton | Senior Full Stack Engineer",
  description:
    "Senior Full Stack Engineer | Developer Experience, Platform & AI Tooling",
  keywords: [
    "Jaren Kempton",
    "Senior Full Stack Engineer",
    "Developer Experience",
    "Platform Engineering",
    "AI Tooling",
    "MCP",
    "React",
    "Next.js",
    "TypeScript",
    "Stride",
  ],
  openGraph: {
    title: "Jaren Kempton | Senior Full Stack Engineer",
    description:
      "Senior Full Stack Engineer | Developer Experience, Platform & AI Tooling",
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
