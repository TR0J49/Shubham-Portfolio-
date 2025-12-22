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

const siteUrl = "https://shubham-rahangdale.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Shubham Rahangdale | AI Engineer & Machine Learning Developer | Bhopal, India",
    template: "%s | Shubham Rahangdale"
  },
  description: "Shubham Rahangdale - AI/ML Engineer from Bhopal, India. Expert in Generative AI, RAG Systems, LangChain, FastAPI, Python, TensorFlow. Building intelligent AI applications, Banking API Assistants, and Computer Vision solutions. B.Tech AI/ML student with internship experience at top companies.",
  keywords: [
    "Shubham Rahangdale",
    "AI Engineer",
    "Machine Learning Developer",
    "ML Engineer India",
    "AI Developer Bhopal",
    "Generative AI Developer",
    "RAG Systems Developer",
    "LangChain Developer",
    "FastAPI Developer",
    "Python Developer",
    "TensorFlow Developer",
    "Data Scientist",
    "Computer Vision",
    "NLP Developer",
    "Ollama",
    "ChromaDB",
    "FAISS",
    "Deep Learning",
    "AI Intern",
    "ML Enthusiast",
    "Banking AI Assistant",
    "Healthcare AI",
    "Heart Disease Prediction ML",
    "GDG Data Analytics Lead",
    "B.Tech AI ML",
    "SIRT Bhopal",
    "Freelance AI Developer",
    "AI Portfolio",
    "Hire AI Engineer India"
  ],
  authors: [
    { name: "Shubham Rahangdale", url: siteUrl }
  ],
  creator: "Shubham Rahangdale",
  publisher: "Shubham Rahangdale",
  category: "Technology",
  classification: "Portfolio",
  icons: {
    icon: "/circle-cropped.png",
    shortcut: "/circle-cropped.png",
    apple: "/circle-cropped.png",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    title: "Shubham Rahangdale | AI Engineer & Machine Learning Developer",
    description: "AI/ML Engineer specializing in Generative AI, RAG Systems, LangChain, FastAPI. Building intelligent applications for Banking, Healthcare & Agriculture. Available for hire.",
    siteName: "Shubham Rahangdale - AI Engineer Portfolio",
    images: [
      {
        url: "/circle-cropped.png",
        width: 400,
        height: 400,
        alt: "Shubham Rahangdale - AI Engineer",
        type: "image/png",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shubham Rahangdale | AI Engineer & ML Developer",
    description: "AI/ML Engineer building Generative AI, RAG Systems & intelligent applications. Expert in Python, FastAPI, LangChain, TensorFlow.",
    images: ["/circle-cropped.png"],
    creator: "@shubham_ai_ml",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  other: {
    "google-site-verification": "your-google-verification-code",
    "msvalidate.01": "your-bing-verification-code",
  },
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Shubham Rahangdale",
  url: siteUrl,
  image: `${siteUrl}/circle-cropped.png`,
  jobTitle: "AI Engineer & Machine Learning Developer",
  worksFor: {
    "@type": "Organization",
    name: "Freelance / Available for Hire"
  },
  description: "AI/ML Engineer specializing in Generative AI, RAG Systems, LangChain, FastAPI, Python, and TensorFlow. Building intelligent applications for Banking, Healthcare, and Agriculture sectors.",
  email: "rahangdaleshubham2003@gmail.com",
  telephone: "+91-9284941351",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bhopal",
    addressRegion: "Madhya Pradesh",
    addressCountry: "India"
  },
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "Sagar Institute of Research and Technology (SIRT)",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bhopal",
      addressCountry: "India"
    }
  },
  knowsAbout: [
    "Artificial Intelligence",
    "Machine Learning",
    "Generative AI",
    "RAG Systems",
    "LangChain",
    "FastAPI",
    "Python",
    "TensorFlow",
    "Computer Vision",
    "Natural Language Processing",
    "Data Science",
    "Deep Learning"
  ],
  sameAs: [
    "https://github.com/TR0J49",
    "https://linkedin.com/in/shubham-ai-ml"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <meta name="theme-color" content="#0a0a0f" />
        <meta name="color-scheme" content="dark" />
        <meta name="format-detection" content="telephone=yes" />
        <meta name="geo.region" content="IN-MP" />
        <meta name="geo.placename" content="Bhopal" />
        <meta name="geo.position" content="23.2599;77.4126" />
        <meta name="ICBM" content="23.2599, 77.4126" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="canonical" href="https://shubham-rahangdale.vercel.app" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[var(--background)] text-[var(--foreground)]`}
      >
        {children}
      </body>
    </html>
  );
}
