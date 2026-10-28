import type { Metadata, Viewport } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const mono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "700"],
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

export const viewport: Viewport = {
  themeColor: "#1a1b26",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={mono.variable}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
