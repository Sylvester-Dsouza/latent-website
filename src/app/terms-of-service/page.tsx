"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CTASection } from "@/components/ui/cta-section";
import { Shield, FileText, Scale, AlertTriangle, Users, Gavel } from "lucide-react";

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-background" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-cyan/5" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        {/* Floating Particles */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-2 h-2 bg-primary/30 rounded-full animate-pulse" />
          <div className="absolute top-40 right-20 w-1 h-1 bg-cyan/40 rounded-full animate-pulse delay-1000" />
          <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-primary/20 rounded-full animate-pulse delay-2000" />
          <div className="absolute bottom-20 right-10 w-1 h-1 bg-cyan/30 rounded-full animate-pulse delay-3000" />
        </div>
        
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
        
        <div className="relative max-w-4xl mx-auto text-center">
          <Badge variant="outline" className="mb-6 border-primary/20 bg-primary/5 text-primary">
            <Scale className="w-4 h-4 mr-2" />
            Terms of Service
          </Badge>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent">
            Service Agreement
          </h1>
          
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Please read these terms carefully before using our cybersecurity services. 
            By accessing our services, you agree to be bound by these terms and conditions.
          </p>
        </div>
      </section>

      {/* Terms of Service Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {/* Last Updated */}
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Last Updated
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  These Terms of Service were last updated on January 15, 2025.
                </p>
              </CardContent>
            </Card>

            {/* Acceptance of Terms */}
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Gavel className="w-5 h-5" />
                  Acceptance of Terms
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  By accessing and using Latent Security&apos;s services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
                <p className="text-muted-foreground">
                  These terms apply to all visitors, users, and others who access or use our cybersecurity services.
                </p>
              </CardContent>
            </Card>

            {/* Service Description */}
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  Service Description
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Latent Security provides comprehensive cybersecurity services including but not limited to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Penetration testing and vulnerability assessments</li>
                  <li>Security consulting and advisory services</li>
                  <li>Incident response and forensic analysis</li>
                  <li>Security awareness training</li>
                  <li>Compliance auditing and reporting</li>
                  <li>Managed security services</li>
                  <li>Cloud security assessments</li>
                </ul>
              </CardContent>
            </Card>

            {/* User Responsibilities */}
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  User Responsibilities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  As a user of our services, you agree to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Provide accurate and complete information when requested</li>
                  <li>Maintain the confidentiality of your account credentials</li>
                  <li>Use our services only for lawful purposes</li>
                  <li>Comply with all applicable laws and regulations</li>
                  <li>Not interfere with or disrupt our services</li>
                  <li>Not attempt to gain unauthorized access to our systems</li>
                  <li>Respect intellectual property rights</li>
                  <li>Cooperate with security assessments and testing procedures</li>
                </ul>
              </CardContent>
            </Card>

            {/* Limitations and Disclaimers */}
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  Limitations and Disclaimers
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Service Availability</h3>
                  <p className="text-muted-foreground">
                    While we strive to maintain high availability, we do not guarantee uninterrupted access to our services. Scheduled maintenance and unforeseen circumstances may result in temporary service interruptions.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Limitation of Liability</h3>
                  <p className="text-muted-foreground">
                    Our liability is limited to the amount paid for our services. We are not liable for indirect, incidental, special, consequential, or punitive damages arising from the use of our services.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Security Testing Disclaimer</h3>
                  <p className="text-muted-foreground">
                    Security testing services are provided based on the scope agreed upon. We cannot guarantee the discovery of all vulnerabilities, and the absence of findings does not indicate complete security.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Intellectual Property */}
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Intellectual Property</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  All content, features, and functionality of our services are owned by Latent Security and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
                </p>
                <p className="text-muted-foreground">
                  You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of our content without prior written consent.
                </p>
              </CardContent>
            </Card>

            {/* Termination */}
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Termination</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  We may terminate or suspend your access to our services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
                </p>
                <p className="text-muted-foreground">
                  Upon termination, your right to use the service will cease immediately. All provisions of the Terms which by their nature should survive termination shall survive termination.
                </p>
              </CardContent>
            </Card>

            {/* Governing Law */}
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Governing Law</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  These Terms shall be interpreted and governed by the laws of the jurisdiction in which Latent Security operates, without regard to its conflict of law provisions. Any disputes arising from these terms will be resolved through binding arbitration.
                </p>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Contact Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  If you have any questions about these Terms of Service, please contact us at:
                </p>
                <div className="mt-4 space-y-2">
                  <p className="text-muted-foreground">
                    <strong>Phone:</strong> +971 4 388 2014
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Email:</strong> info@latentinfotech.com
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Address:</strong> Office 308, 1143 Business Center, Port Saeed, Dubai, UAE
                  </p>
                  
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection 
        title="Ready to Get Started?"
        description="By using our services, you agree to these terms. Have questions about our service agreement? We're here to help clarify any concerns."
        primaryButtonText="Contact Us"
        primaryButtonHref="/contact"
        secondaryButtonText="View Our Services"
        secondaryButtonHref="/services"
        backgroundVariant="muted"
        className="py-20"
      />
    </div>
  );
}