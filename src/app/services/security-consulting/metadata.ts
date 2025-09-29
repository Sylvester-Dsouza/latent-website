import { Metadata } from "next";

export const securityConsultingMetadata: Metadata = {
  title: "Security Consulting Services - Expert Cybersecurity Advisory | Latent Security",
  description: "Expert security consulting services to strengthen your cybersecurity posture. Strategic guidance, risk assessment, compliance support, and security architecture design from certified security professionals.",
  keywords: [
    "security consulting",
    "cybersecurity consulting",
    "security advisory",
    "security strategy",
    "risk management",
    "compliance consulting",
    "security architecture",
    "security governance",
    "information security consulting",
    "cyber risk assessment",
    "security policy development",
    "security framework",
    "CISO advisory",
    "security transformation",
    "enterprise security consulting"
  ],
  authors: [{ name: "Latent Security" }],
  creator: "Latent Security",
  publisher: "Latent Security",
  alternates: {
    canonical: "https://latentinfotech.com/services/security-consulting"
  },
  openGraph: {
    title: "Security Consulting Services - Expert Cybersecurity Advisory | Latent Security",
    description: "Expert security consulting services to strengthen your cybersecurity posture. Strategic guidance, risk assessment, and compliance support from certified professionals.",
    url: "https://latentinfotech.com/services/security-consulting",
    siteName: "Latent Security",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://latentinfotech.com/og-security-consulting.jpg",
        width: 1200,
        height: 630,
        alt: "Latent Security - Security Consulting Services"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Security Consulting Services - Expert Cybersecurity Advisory | Latent Security",
    description: "Expert security consulting services to strengthen your cybersecurity posture. Strategic guidance and risk assessment from certified professionals.",
    creator: "@latent",
    images: ["https://latentinfotech.com/twitter-security-consulting.jpg"]
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