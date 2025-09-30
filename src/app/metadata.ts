import { Metadata } from "next";

export const homeMetadata: Metadata = {
  title: "Latent Security - Protect Your Digital Life",
  description: "Protect your digital life with Latent Security's personal cybersecurity services. Expert device cleaning, security testing, protection monitoring, and security education for individuals and families.",
  keywords: [
    "personal cybersecurity",
    "digital security",
    "device cleaning",
    "malware removal",
    "security testing",
    "protection monitoring",
    "security education",
    "digital protection",
    "personal security",
    "device security",
    "digital forensics",
    "identity protection"
  ],
  authors: [{ name: "Latent Security" }],
  creator: "Latent Security",
  publisher: "Latent Security",
  alternates: {
    canonical: "https://latentinfotech.com"
  },
  openGraph: {
    title: "Latent Security - Leading Cybersecurity Solutions & Digital Forensics",
    description: "Defend your digital future with comprehensive cybersecurity services. Trusted by 500+ organizations with 24/7 monitoring and rapid incident response.",
    url: "https://latentinfotech.com",
    siteName: "Latent Security",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://latentinfotech.com/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "Latent Security - Cybersecurity Solutions"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Latent Security - Leading Cybersecurity Solutions & Digital Forensics",
    description: "Defend your digital future with comprehensive cybersecurity services. Trusted by 500+ organizations with 24/7 monitoring and rapid incident response.",
    creator: "@latent",
    images: ["https://latentinfotech.com/twitter-home.jpg"]
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
  },
  category: "Technology"
};