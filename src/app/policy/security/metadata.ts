import { Metadata } from "next";

export const securityPolicyMetadata: Metadata = {
  title: "Security Policy - Information Security & Data Protection | Latent Security",
  description: "Read Latent Security's comprehensive security policy outlining our commitment to maintaining confidentiality, integrity, and availability of data and systems. Learn about our security practices and standards.",
  keywords: [
    "security policy",
    "information security",
    "data protection",
    "security practices",
    "cybersecurity policy",
    "data security",
    "security standards",
    "information protection",
    "security framework",
    "security governance",
    "data confidentiality",
    "system integrity",
    "security compliance",
    "security procedures",
    "security controls"
  ],
  authors: [{ name: "Latent Security" }],
  creator: "Latent Security",
  publisher: "Latent Security",
  alternates: {
    canonical: "https://latentinfotech.com/policy/security"
  },
  openGraph: {
    title: "Security Policy - Latent Security",
    description: "Learn about Latent Security's comprehensive security policy and our commitment to protecting your data and maintaining the highest security standards.",
    url: "https://latentinfotech.com/policy/security",
    siteName: "Latent Security",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://latentinfotech.com/og-security-policy.jpg",
        width: 1200,
        height: 630,
        alt: "Latent Security - Security Policy"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Security Policy - Information Security & Data Protection | Latent Security",
    description: "Read Latent Security's comprehensive security policy outlining our commitment to maintaining data confidentiality, integrity, and availability.",
    creator: "@latent",
    images: ["https://latentinfotech.com/twitter-security-policy.jpg"]
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