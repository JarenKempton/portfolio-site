import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AmbientBackground } from "@/components/shared/ambient-background";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jaren Kempton | Senior Full Stack Engineer, Developer Platform / AI Tooling",
  description:
    "Full stack engineer who builds the systems that let AI expand what a team can ship, quickly and safely. MCP servers, CI guardrails, hybrid search.",
  keywords: [
    "Jaren Kempton",
    "Full Stack Engineer",
    "Developer Platform",
    "AI Tooling",
    "MCP",
    "React",
    "Next.js",
    "TypeScript",
    "Stride",
  ],
  openGraph: {
    title: "Jaren Kempton | Senior Full Stack Engineer, Developer Platform / AI Tooling",
    description:
      "Full stack engineer who builds the systems that let AI expand what a team can ship, quickly and safely.",
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
