import { Metadata } from "next";

export const deviceCleaningMetadata: Metadata = {
  title: "Device Cleaning Services - Malware Removal & Optimization | Latent Security",
  description: "Professional device cleaning services to remove malware, viruses, and optimize your device performance. Expert malware removal and system optimization for computers, phones, and tablets.",
  keywords: [
    "device cleaning",
    "malware removal",
    "virus removal",
    "device optimization",
    "computer cleaning",
    "phone cleaning",
    "tablet cleaning",
    "system optimization",
    "performance improvement",
    "spyware removal",
    "adware removal",
    "device security",
    "system cleanup",
    "malware scanning",
    "device maintenance"
  ],
  authors: [{ name: "Latent Security" }],
  creator: "Latent Security",
  publisher: "Latent Security",
  alternates: {
    canonical: "https://latentinfotech.com/services/device-cleaning"
  },
  openGraph: {
    title: "Device Cleaning Services - Malware Removal & Optimization | Latent Security",
    description: "Professional device cleaning services to remove malware, viruses, and optimize your device performance. Expert malware removal and system optimization.",
    url: "https://latentinfotech.com/services/device-cleaning",
    siteName: "Latent Security",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://latentinfotech.com/og-device-cleaning.jpg",
        width: 1200,
        height: 630,
        alt: "Latent Security - Device Cleaning Services"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Device Cleaning Services - Malware Removal & Optimization | Latent Security",
    description: "Professional device cleaning services to remove malware, viruses, and optimize your device performance.",
    creator: "@latent",
    images: ["https://latentinfotech.com/twitter-device-cleaning.jpg"]
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