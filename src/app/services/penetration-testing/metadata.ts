import { Metadata } from "next";

export const penetrationTestingMetadata: Metadata = {
  title: "Penetration Testing Services - Ethical Hacking & Security Assessment | Latent Security",
  description: "Professional penetration testing services to identify vulnerabilities in your systems. Our ethical hackers simulate real-world attacks to strengthen your cybersecurity defenses and protect against threats.",
  keywords: [
    "penetration testing",
    "ethical hacking",
    "security assessment",
    "vulnerability testing",
    "pen testing services",
    "network penetration testing",
    "web application testing",
    "security audit",
    "cyber security testing",
    "red team assessment",
    "security vulnerability assessment",
    "penetration test report",
    "security testing services",
    "infrastructure testing",
    "application security testing"
  ],
  authors: [{ name: "Latent Security" }],
  creator: "Latent Security",
  publisher: "Latent Security",
  alternates: {
    canonical: "https://latentinfotech.com/services/penetration-testing"
  },
  openGraph: {
    title: "Penetration Testing Services - Ethical Hacking & Security Assessment | Latent Security",
    description: "Professional penetration testing services to identify vulnerabilities in your systems. Our ethical hackers simulate real-world attacks to strengthen your cybersecurity defenses.",
    url: "https://latentinfotech.com/services/penetration-testing",
    siteName: "Latent Security",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://latentinfotech.com/og-penetration-testing.jpg",
        width: 1200,
        height: 630,
        alt: "Latent Security - Penetration Testing Services"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Penetration Testing Services - Ethical Hacking & Security Assessment | Latent Security",
    description: "Professional penetration testing services to identify vulnerabilities in your systems. Our ethical hackers simulate real-world attacks.",
    creator: "@latent",
    images: ["https://latentinfotech.com/twitter-penetration-testing.jpg"]
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