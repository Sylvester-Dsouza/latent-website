import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://latentsecurity.com"),
  title: "Latent Security - Cybersecurity Solutions",
  description: "Protecting your digital assets with cutting-edge cybersecurity solutions. Comprehensive security services to keep your business safe from evolving threats.",
  keywords: "cybersecurity, security audits, penetration testing, compliance, incident response, vulnerability assessment, security consulting, cybercrime investigation",
  authors: [{ name: "Latent Security" }],
  creator: "Latent Security",
  publisher: "Latent Security",
  robots: "index, follow",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/logo.white.webp", sizes: "32x32", type: "image/webp" },
    ],
    apple: "/logo.white.webp",
  },
  openGraph: {
    title: "Latent Security - Cybersecurity Solutions",
    description: "Protecting your digital assets with cutting-edge cybersecurity solutions. Comprehensive security services to keep your business safe from evolving threats.",
    type: "website",
    url: "https://latentsecurity.com",
    siteName: "Latent Security",
    images: [
      {
        url: "/logo.white.webp",
        width: 1200,
        height: 630,
        alt: "Latent Security - Cybersecurity Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Latent Security - Cybersecurity Solutions",
    description: "Protecting your digital assets with cutting-edge cybersecurity solutions.",
    images: ["/logo.white.webp"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark`}
      >
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
