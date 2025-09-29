import { Metadata } from "next";

export const bookACallMetadata: Metadata = {
  title: "Book a Call - Schedule Your Cybersecurity Consultation | Latent Security",
  description: "Schedule a free cybersecurity consultation with Latent Security experts. Book a call to discuss your security needs, get expert advice, and learn how we can protect your digital assets.",
  keywords: [
    "book cybersecurity consultation",
    "schedule security call",
    "cybersecurity consultation booking",
    "free security assessment",
    "cybersecurity expert consultation",
    "security audit booking",
    "penetration testing consultation",
    "incident response consultation",
    "cybersecurity strategy call",
    "digital security consultation",
    "vulnerability assessment booking",
    "compliance consultation booking"
  ],
  authors: [{ name: "Latent Security" }],
  creator: "Latent Security",
  publisher: "Latent Security",
  alternates: {
    canonical: "https://latentinfotech.com/book-a-call"
  },
  openGraph: {
    title: "Book a Call - Schedule Your Cybersecurity Consultation | Latent Security",
    description: "Schedule a free cybersecurity consultation with Latent Security experts. Book a call to discuss your security needs and protect your digital assets.",
    url: "https://latentinfotech.com/book-a-call",
    siteName: "Latent Security",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://latentinfotech.com/og-book-a-call.jpg",
        width: 1200,
        height: 630,
        alt: "Book a Call - Cybersecurity Consultation"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Book a Call - Schedule Your Cybersecurity Consultation | Latent Security",
    description: "Schedule a free cybersecurity consultation with Latent Security experts. Book a call to discuss your security needs and protect your digital assets.",
    creator: "@latent",
    images: ["https://latentinfotech.com/twitter-book-a-call.jpg"]
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