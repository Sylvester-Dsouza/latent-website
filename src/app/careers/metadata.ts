import { Metadata } from "next";

export const careersMetadata: Metadata = {
  title: "Careers at Latent Security - Join Our Cybersecurity Team",
  description: "Join Latent Security's elite cybersecurity team. Explore exciting career opportunities in digital forensics, penetration testing, incident response, and security consulting. Build your career protecting digital futures.",
  keywords: [
    "cybersecurity careers",
    "cybersecurity jobs",
    "digital forensics careers",
    "penetration testing jobs",
    "incident response careers",
    "security analyst jobs",
    "cybersecurity consultant careers",
    "information security jobs",
    "cyber threat analyst careers",
    "security engineer jobs",
    "SOC analyst careers",
    "vulnerability assessment jobs",
    "compliance specialist careers",
    "cybersecurity training careers"
  ],
  authors: [{ name: "Latent Security" }],
  creator: "Latent Security",
  publisher: "Latent Security",
  alternates: {
    canonical: "https://latentinfotech.com/careers"
  },
  openGraph: {
    title: "Careers at Latent Security - Join Our Cybersecurity Team",
    description: "Join Latent Security's elite cybersecurity team. Explore exciting career opportunities in digital forensics, penetration testing, and security consulting.",
    url: "https://latentinfotech.com/careers",
    siteName: "Latent Security",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://latentinfotech.com/og-careers.jpg",
        width: 1200,
        height: 630,
        alt: "Careers at Latent Security - Cybersecurity Jobs"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers at Latent Security - Join Our Cybersecurity Team",
    description: "Join Latent Security's elite cybersecurity team. Explore exciting career opportunities in digital forensics, penetration testing, and security consulting.",
    creator: "@latent",
    images: ["https://latentinfotech.com/twitter-careers.jpg"]
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