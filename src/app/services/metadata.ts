import { Metadata } from "next";

export const servicesMetadata: Metadata = {
  title: "Personal Cybersecurity Services | Latent Security",
  description: "Explore Latent Security's personal cybersecurity services including device cleaning, security testing, protection monitoring, and security education. Protect your digital life.",
  keywords: [
    "personal cybersecurity services",
    "device cleaning",
    "security testing",
    "protection monitoring",
    "security education",
    "malware removal",
    "digital forensics",
    "security audits",
    "threat monitoring",
    "compliance services",
    "network security",
    "data protection services",
    "cyber threat protection",
    "security solutions",
    "information security services"
  ],
  authors: [{ name: "Latent Security" }],
  creator: "Latent Security",
  publisher: "Latent Security",
  alternates: {
    canonical: "https://latentinfotech.com/services"
  },
  openGraph: {
    title: "Personal Cybersecurity Services | Latent Security",
    description: "Explore Latent Security's personal cybersecurity services including device cleaning, security testing, and protection monitoring.",
    url: "https://latentinfotech.com/services",
    siteName: "Latent Security",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://latentinfotech.com/og-services.jpg",
        width: 1200,
        height: 630,
        alt: "Latent Security - Cybersecurity Services"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Personal Cybersecurity Services | Latent Security",
    description: "Explore Latent Security's personal cybersecurity services including device cleaning, security testing, and protection monitoring.",
    creator: "@latent",
    images: ["https://latentinfotech.com/twitter-services.jpg"]
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