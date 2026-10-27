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
    "Senior full stack engineer working on developer platforms and AI tooling: MCP servers, retrieval, and CI guardrails for AI-assisted codebases.",
  keywords: [
    "Jaren Kempton",
    "Full Stack Engineer",
    "Developer Platform",
    "AI Tooling",
    "MCP",
    "TypeScript",
  ],
  openGraph: {
    title: "Jaren Kempton | Senior Full Stack Engineer",
    description:
      "Developer platforms and AI tooling: MCP servers, retrieval, and CI guardrails for AI-assisted codebases.",
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
