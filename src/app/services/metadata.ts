import { Metadata } from "next";

export const servicesMetadata: Metadata = {
  title: "Cybersecurity Services - Comprehensive Digital Protection | Latent Security",
  description: "Explore Latent Security's comprehensive cybersecurity services including penetration testing, vulnerability assessment, incident response, security consulting, and cybercrime investigation. Protect your digital future.",
  keywords: [
    "cybersecurity services",
    "penetration testing",
    "vulnerability assessment",
    "incident response",
    "security consulting",
    "cybercrime investigation",
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
    title: "Cybersecurity Services - Comprehensive Digital Protection | Latent Security",
    description: "Explore Latent Security's comprehensive cybersecurity services including penetration testing, vulnerability assessment, and incident response.",
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
    title: "Cybersecurity Services - Comprehensive Digital Protection | Latent Security",
    description: "Explore Latent Security's comprehensive cybersecurity services including penetration testing, vulnerability assessment, and incident response.",
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