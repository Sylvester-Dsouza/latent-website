import { Metadata } from "next";

export const homeMetadata: Metadata = {
  title: "Latent Security - Leading Cybersecurity Solutions & Digital Forensics",
  description: "Defend your digital future with Latent Security's comprehensive cybersecurity services. Trusted by 500+ organizations with 24/7 monitoring, penetration testing, incident response, and compliance solutions.",
  keywords: [
    "cybersecurity solutions",
    "digital forensics",
    "penetration testing", 
    "incident response",
    "threat monitoring",
    "security audits",
    "compliance",
    "cybersecurity company",
    "network security",
    "data protection",
    "cyber threat protection",
    "security consulting",
    "vulnerability assessment",
    "SOC services",
    "cybercrime investigation"
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