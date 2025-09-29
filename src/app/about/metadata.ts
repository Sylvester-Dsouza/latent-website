import { Metadata } from "next";

export const aboutMetadata: Metadata = {
  title: "About Us - Latent | Leading Cybersecurity & Digital Forensics Experts",
  description: "Learn about Latent's mission to protect businesses from cyber threats. With 10+ years of experience, 500+ clients protected, and 24/7 security monitoring, we're your trusted cybersecurity partner.",
  keywords: [
    "cybersecurity company",
    "digital forensics experts", 
    "cyber threat protection",
    "security consulting",
    "incident response",
    "vulnerability assessment",
    "cybercrime investigation",
    "about latent",
    "cybersecurity team",
    "digital security experts"
  ],
  authors: [{ name: "Latent" }],
  creator: "Latent",
  publisher: "Latent",
  alternates: {
    canonical: "https://latentinfotech.com/about"
  },
  openGraph: {
    title: "About Latent - Leading Cybersecurity & Digital Forensics Experts",
    description: "Learn about Latent's mission to protect businesses from cyber threats. With 10+ years of experience and 500+ clients protected.",
    url: "https://latentinfotech.com/about",
    siteName: "Latent Security",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://latentinfotech.com/og-about.jpg",
        width: 1200,
        height: 630,
        alt: "About Latent - Cybersecurity Experts"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "About Latent - Leading Cybersecurity & Digital Forensics Experts", 
    description: "Learn about Latent's mission to protect businesses from cyber threats. With 10+ years of experience and 500+ clients protected.",
    creator: "@latent",
    images: ["https://latentinfotech.com/twitter-about.jpg"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large", 
      "max-snippet": -1
    }
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code"
  }
};