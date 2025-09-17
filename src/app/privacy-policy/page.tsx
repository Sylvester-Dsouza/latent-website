"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CTASection } from "@/components/ui/cta-section";
import { Shield, FileText, Lock, Eye, Database, UserCheck } from "lucide-react";

export default function PrivacyPolicyPage() {
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
            <Shield className="w-4 h-4 mr-2" />
            Privacy Policy
          </Badge>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent">
            Your Privacy Matters
          </h1>
          
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We are committed to protecting your privacy and ensuring the security of your personal information. 
            Learn how we collect, use, and safeguard your data.
          </p>
        </div>
      </section>

      {/* Privacy Policy Content */}
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
                  This Privacy Policy was last updated on January 15, 2025.
                </p>
              </CardContent>
            </Card>

            {/* Information We Collect */}
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="w-5 h-5" />
                  Information We Collect
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Personal Information</h3>
                  <p className="text-muted-foreground mb-2">
                    We may collect the following personal information when you use our services:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Name and contact information (email, phone number, address)</li>
                    <li>Company information and job title</li>
                    <li>Account credentials and authentication data</li>
                    <li>Payment and billing information</li>
                    <li>Communication preferences</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Technical Information</h3>
                  <p className="text-muted-foreground mb-2">
                    We automatically collect certain technical information:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>IP address and device information</li>
                    <li>Browser type and version</li>
                    <li>Operating system and platform</li>
                    <li>Website usage data and analytics</li>
                    <li>Cookies and similar tracking technologies</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* How We Use Your Information */}
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Eye className="w-5 h-5" />
                  How We Use Your Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  We use your information for the following purposes:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Providing and maintaining our cybersecurity services</li>
                  <li>Processing transactions and managing your account</li>
                  <li>Communicating with you about our services and updates</li>
                  <li>Improving our services and developing new features</li>
                  <li>Ensuring security and preventing fraud</li>
                  <li>Complying with legal obligations and regulatory requirements</li>
                  <li>Marketing and promotional activities (with your consent)</li>
                </ul>
              </CardContent>
            </Card>

            {/* Data Protection */}
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lock className="w-5 h-5" />
                  Data Protection & Security
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  We implement industry-standard security measures to protect your data:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>End-to-end encryption for data transmission</li>
                  <li>Secure data storage with access controls</li>
                  <li>Regular security audits and vulnerability assessments</li>
                  <li>Employee training on data protection practices</li>
                  <li>Incident response procedures for data breaches</li>
                  <li>Compliance with GDPR, CCPA, and other privacy regulations</li>
                </ul>
              </CardContent>
            </Card>

            {/* Your Rights */}
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <UserCheck className="w-5 h-5" />
                  Your Rights
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  You have the following rights regarding your personal data:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Right to access your personal information</li>
                  <li>Right to correct inaccurate or incomplete data</li>
                  <li>Right to delete your personal information</li>
                  <li>Right to restrict processing of your data</li>
                  <li>Right to data portability</li>
                  <li>Right to object to processing</li>
                  <li>Right to withdraw consent at any time</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  To exercise these rights, please contact us at +971 4 388 2014 or info@latentinfotech.com
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
                  If you have any questions about this Privacy Policy or our data practices, 
                  please contact our Data Protection Officer at:
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
        title="Protecting Your Privacy is Our Priority"
        description="Have questions about how we handle your data? We're committed to transparency and would be happy to discuss our privacy practices with you."
        primaryButtonText="Contact Us"
        primaryButtonHref="/contact"
        secondaryButtonText="View Security Policy"
        secondaryButtonHref="/security-policy"
        backgroundVariant="muted"
        className="py-20"
      />
    </div>
  );
}