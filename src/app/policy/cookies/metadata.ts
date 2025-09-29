import { Metadata } from "next";

export const cookiePolicyMetadata: Metadata = {
  title: "Cookie Policy - Cookie Usage & Preferences | Latent Security",
  description: "Learn about Latent Security's cookie policy and how we use cookies to enhance your experience. Manage your cookie preferences and understand our tracking technologies for cybersecurity services.",
  keywords: [
    "cookie policy",
    "cookies",
    "tracking technologies",
    "cookie preferences",
    "website cookies",
    "analytics cookies",
    "functional cookies",
    "marketing cookies",
    "essential cookies",
    "cookie consent",
    "cookie management",
    "third-party cookies",
    "cookie settings",
    "privacy cookies",
    "cookie data"
  ],
  authors: [{ name: "Latent Security" }],
  creator: "Latent Security",
  publisher: "Latent Security",
  alternates: {
    canonical: "https://latentinfotech.com/policy/cookies"
  },
  openGraph: {
    title: "Cookie Policy - Latent Security",
    description: "Learn about how Latent Security uses cookies and similar technologies to enhance your browsing experience and improve our cybersecurity services.",
    url: "https://latentinfotech.com/policy/cookies",
    siteName: "Latent Security",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://latentinfotech.com/og-cookie-policy.jpg",
        width: 1200,
        height: 630,
        alt: "Latent Security - Cookie Policy"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Cookie Policy - Cookie Usage & Preferences | Latent Security",
    description: "Learn about Latent Security's cookie policy and how we use cookies to enhance your experience. Manage your cookie preferences.",
    creator: "@latent",
    images: ["https://latentinfotech.com/twitter-cookie-policy.jpg"]
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