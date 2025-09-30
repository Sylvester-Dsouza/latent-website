import { Metadata } from "next";

export const securityTestingMetadata: Metadata = {
  title: "Security Testing Services - Device Security Analysis | Latent Security",
  description: "Professional security testing to check if your device has been compromised. Expert analysis to identify threats, vulnerabilities, and security issues on your computer, phone, or tablet.",
  keywords: [
    "security testing",
    "device security testing",
    "security analysis",
    "threat detection",
    "device scanning",
    "security assessment",
    "malware detection",
    "vulnerability scanning",
    "device security check",
    "security audit",
    "compromise detection",
    "security evaluation",
    "device analysis",
    "security inspection",
    "threat analysis"
  ],
  authors: [{ name: "Latent Security" }],
  creator: "Latent Security",
  publisher: "Latent Security",
  alternates: {
    canonical: "https://latentinfotech.com/services/security-testing"
  },
  openGraph: {
    title: "Security Testing Services - Device Security Analysis | Latent Security",
    description: "Professional security testing to check if your device has been compromised. Expert analysis to identify threats and vulnerabilities.",
    url: "https://latentinfotech.com/services/security-testing",
    siteName: "Latent Security",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://latentinfotech.com/og-security-testing.jpg",
        width: 1200,
        height: 630,
        alt: "Latent Security - Security Testing Services"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Security Testing Services - Device Security Analysis | Latent Security",
    description: "Professional security testing to check if your device has been compromised. Expert analysis to identify threats and vulnerabilities.",
    creator: "@latent",
    images: ["https://latentinfotech.com/twitter-security-testing.jpg"]
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