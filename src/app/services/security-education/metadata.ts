import { Metadata } from "next";

export const securityEducationMetadata: Metadata = {
  title: "Security Education & Training - Learn Cybersecurity Skills | Latent Security",
  description: "Professional cybersecurity education and training to help you stay safe online. Learn essential security skills, password management, phishing protection, and safe browsing practices.",
  keywords: [
    "cybersecurity education",
    "security training",
    "cybersecurity courses",
    "security awareness",
    "online safety training",
    "cybersecurity skills",
    "security education",
    "digital literacy",
    "cyber safety",
    "security learning",
    "password security",
    "phishing protection",
    "safe browsing",
    "privacy training",
    "security certification"
  ],
  authors: [{ name: "Latent Security" }],
  creator: "Latent Security",
  publisher: "Latent Security",
  alternates: {
    canonical: "https://latentinfotech.com/services/security-education"
  },
  openGraph: {
    title: "Security Education & Training - Learn Cybersecurity Skills | Latent Security",
    description: "Professional cybersecurity education and training to help you stay safe online. Learn essential security skills and safe browsing practices.",
    url: "https://latentinfotech.com/services/security-education",
    siteName: "Latent Security",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://latentinfotech.com/og-security-education.jpg",
        width: 1200,
        height: 630,
        alt: "Latent Security - Security Education & Training"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Security Education & Training - Learn Cybersecurity Skills | Latent Security",
    description: "Professional cybersecurity education and training to help you stay safe online. Learn essential security skills and safe browsing practices.",
    creator: "@latent",
    images: ["https://latentinfotech.com/twitter-security-education.jpg"]
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