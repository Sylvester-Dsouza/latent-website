import { Metadata } from "next";

export const privacyPolicyMetadata: Metadata = {
  title: "Privacy Policy - Data Protection & Security | Latent Security",
  description: "Read Latent Security's comprehensive privacy policy. Learn how we protect your personal information, handle data collection, and ensure GDPR and CCPA compliance for our cybersecurity services.",
  keywords: [
    "privacy policy",
    "data protection",
    "personal information",
    "GDPR compliance",
    "CCPA compliance",
    "data security",
    "information privacy",
    "data collection",
    "privacy rights",
    "data processing",
    "cybersecurity privacy",
    "data retention",
    "privacy practices",
    "data handling",
    "privacy regulations"
  ],
  authors: [{ name: "Latent Security" }],
  creator: "Latent Security",
  publisher: "Latent Security",
  alternates: {
    canonical: "https://latentinfotech.com/policy/privacy"
  },
  openGraph: {
    title: "Privacy Policy - Latent Security",
    description: "Learn how Latent Security protects your privacy and handles your personal information. Our comprehensive privacy policy outlines our data practices and your rights.",
    url: "https://latentinfotech.com/policy/privacy",
    siteName: "Latent Security",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://latentinfotech.com/og-privacy-policy.jpg",
        width: 1200,
        height: 630,
        alt: "Latent Security Privacy Policy"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy - Latent Security",
    description: "Learn how Latent Security protects your privacy and handles your personal information. Our comprehensive privacy policy outlines our data practices and your rights.",
    creator: "@latentsecurity",
    images: ["https://latentinfotech.com/twitter-privacy-policy.jpg"]
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