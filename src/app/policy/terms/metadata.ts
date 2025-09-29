import { Metadata } from "next";

export const termsOfServiceMetadata: Metadata = {
  title: "Terms of Service - Service Agreement & Conditions | Latent Security",
  description: "Read Latent Security's terms of service and service agreement. Understand the terms and conditions for using our cybersecurity services, including liability, warranties, and user responsibilities.",
  keywords: [
    "terms of service",
    "service agreement",
    "terms and conditions",
    "user agreement",
    "service terms",
    "legal terms",
    "cybersecurity terms",
    "service conditions",
    "user responsibilities",
    "liability terms",
    "warranty terms",
    "service limitations",
    "agreement terms",
    "legal conditions",
    "service policy"
  ],
  authors: [{ name: "Latent Security" }],
  creator: "Latent Security",
  publisher: "Latent Security",
  alternates: {
    canonical: "https://latentinfotech.com/policy/terms"
  },
  openGraph: {
    title: "Terms of Service - Latent Security",
    description: "Read our terms of service to understand the rules and regulations governing the use of Latent Security's cybersecurity services and website.",
    url: "https://latentinfotech.com/policy/terms",
    siteName: "Latent Security",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://latentinfotech.com/og-terms-of-service.jpg",
        width: 1200,
        height: 630,
        alt: "Latent Security - Terms of Service"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service - Service Agreement & Conditions | Latent Security",
    description: "Read Latent Security's terms of service and service agreement. Understand the terms and conditions for using our cybersecurity services.",
    creator: "@latent",
    images: ["https://latentinfotech.com/twitter-terms-of-service.jpg"]
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