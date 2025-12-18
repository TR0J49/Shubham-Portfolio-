import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shubham Rahangdale | AI Engineer & ML Enthusiast",
  description: "Portfolio of Shubham Rahangdale - AI/ML Engineer specializing in Generative AI, RAG systems, and intelligent applications. Experienced in FastAPI, LangChain, TensorFlow, and more.",
  keywords: [
    "AI Engineer",
    "Machine Learning",
    "Shubham Rahangdale",
    "GenAI",
    "RAG",
    "Python Developer",
    "LangChain",
    "FastAPI",
    "Portfolio"
  ],
  authors: [{ name: "Shubham Rahangdale" }],
  creator: "Shubham Rahangdale",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Shubham Rahangdale | AI Engineer & ML Enthusiast",
    description: "AI/ML Engineer specializing in Generative AI, RAG systems, and intelligent applications.",
    siteName: "Shubham Rahangdale Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shubham Rahangdale | AI Engineer & ML Enthusiast",
    description: "AI/ML Engineer specializing in Generative AI, RAG systems, and intelligent applications.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[var(--background)] text-[var(--foreground)]`}
      >
        {children}
      </body>
    </html>
  );
}
