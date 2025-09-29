"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonHref?: string;
  backgroundVariant?: "default" | "gradient" | "muted";
  className?: string;
}

export function CTASection({
  title = "Think Your Device Has Been Compromised?",
  description = "If you suspect your phone, computer, or accounts have been hacked, don't wait. Contact us immediately for emergency cybersecurity assistance and device analysis.",
  primaryButtonText = "Get a Free Phone Checkup",
  secondaryButtonText = "Book a Call",
  primaryButtonHref = "/book-a-call",
  secondaryButtonHref = "/book-a-call",
  backgroundVariant = "default",
  className = "",
}: CTASectionProps) {
  const getBackgroundClass = () => {
    switch (backgroundVariant) {
      case "gradient":
        return "bg-gradient-to-r from-primary/10 via-blue-500/10 to-purple-500/10";
      case "muted":
        return "bg-muted/30";
      default:
        return "relative bg-background overflow-hidden";
    }
  };

  return (
    <section className={`py-16 ${getBackgroundClass()} ${className}`}>
      {/* Background Elements - Same as home hero section */}
      {backgroundVariant === "default" && (
        <div className="absolute inset-0">
          {/* Light background image with increased opacity */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 z-0"
            style={{ backgroundImage: 'url(/Gradient-bg/bg2.jpg)' }}
          />
          
          {/* Very light overlay to blend with theme */}
          <div className="absolute inset-0 bg-background/10 z-10" />
          
          {/* Animated grid pattern */}
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px] animate-pulse z-20" />
          
          {/* Grain texture overlay */}
          <div className="absolute inset-0 opacity-30 z-25" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            mixBlendMode: 'overlay'
          }} />
          
          {/* Floating particles */}
          <div className="absolute inset-0 z-30">
            {/* Large glowing orbs */}
            <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-muted/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute top-3/4 right-1/4 w-32 h-32 bg-muted/10 rounded-full blur-3xl animate-pulse delay-1000" />
            <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-muted/10 rounded-full blur-2xl animate-pulse delay-500" />
          </div>
        </div>
      )}
      <div className="container mx-auto px-4 relative z-40">
          <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">
            {title}
          </h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* White button with animated border */}
            <div className="relative group">
              {/* Animated border that moves around the button */}
              <div className="absolute -inset-0.5 rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/60 to-transparent animate-border-move rounded-lg blur-sm"></div>
              </div>
              {/* Static subtle glow */}
              <div className="absolute -inset-0.5 bg-blue-400/20 rounded-lg blur-sm opacity-50"></div>
              <Link 
                href={primaryButtonHref}
                className="relative flex items-center justify-center px-8 py-3 bg-white text-gray-900 font-semibold rounded-lg leading-none shadow-md border border-gray-200 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
              >
                {primaryButtonText}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <Button size="lg" variant="outline" asChild>
              <Link href={secondaryButtonHref}>
                {secondaryButtonText}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}