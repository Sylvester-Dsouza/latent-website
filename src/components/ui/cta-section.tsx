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
  title = "Ready to Secure Your Business?",
  description = "Get started with a comprehensive security assessment and discover how we can protect your organization.",
  primaryButtonText = "Start Your Security Journey",
  secondaryButtonText = "Schedule Consultation",
  primaryButtonHref = "/contact",
  secondaryButtonHref = "/contact",
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
        return "bg-gradient-to-r from-primary/10 via-blue-500/10 to-purple-500/10";
    }
  };

  return (
    <section className={`py-16 ${getBackgroundClass()} ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">
            {title}
          </h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gradient-cyber text-white" asChild>
              <Link href={primaryButtonHref}>
                {primaryButtonText}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
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