"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CTASection } from "@/components/ui/cta-section";
import { Shield, Cookie, Settings, Eye, Lock, AlertTriangle, FileText, BarChart, Target } from "lucide-react";


export default function CookiePolicyPage() {
  return (
    <>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-20 pt-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-background" />
          
          {/* Light background image - with unique rotation for cookie policy */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-12 transform rotate-6 scale-110"
            style={{ backgroundImage: 'url(/light-bg.jpg)' }}
          />
          
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-cyan/5" />
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
          
          {/* Floating Particles */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-2 h-2 bg-primary/30 rounded-full animate-pulse" />
            <div className="absolute top-40 right-20 w-1 h-1 bg-muted-foreground/40 rounded-full animate-pulse delay-1000" />
            <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-primary/20 rounded-full animate-pulse delay-2000" />
            <div className="absolute bottom-20 right-10 w-1 h-1 bg-muted-foreground/30 rounded-full animate-pulse delay-3000" />
          </div>
          
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
          
          <div className="relative container mx-auto text-center">
            <Badge variant="outline" className="mb-6 border-primary/20 bg-primary/5 text-primary">
              <Cookie className="w-4 h-4 mr-2" />
              Cookie Policy
            </Badge>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent">
              Cookie Usage & Preferences
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Learn about how we use cookies and similar technologies to enhance your experience 
              and provide better cybersecurity services.
            </p>
          </div>
        </section>
    
        {/* Cookie Policy Content */}
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
                    This Cookie Policy was last updated on January 15, 2025.
                  </p>
                </CardContent>
              </Card>
    
              {/* What Are Cookies */}
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Cookie className="w-5 h-5" />
                    What Are Cookies?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Cookies are small text files that are placed on your computer or mobile device when you visit our website. They are widely used to make websites work more efficiently and provide information to website owners.
                  </p>
                  <p className="text-muted-foreground">
                    We use cookies and similar tracking technologies to track activity on our service and hold certain information to improve your experience and provide better cybersecurity services.
                  </p>
                </CardContent>
              </Card>
    
              {/* Types of Cookies */}
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Types of Cookies We Use</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-2 flex items-center gap-2">
                      <Settings className="w-4 h-4" />
                      Essential Cookies
                    </h3>
                    <p className="text-muted-foreground mb-2">
                      These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you.
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Authentication and security cookies</li>
                      <li>Session management cookies</li>
                      <li>Load balancing cookies</li>
                      <li>CSRF protection tokens</li>
                    </ul>
                  </div>
    
                  <div>
                    <h3 className="font-semibold mb-2 flex items-center gap-2">
                      <BarChart className="w-4 h-4" />
                      Analytics Cookies
                    </h3>
                    <p className="text-muted-foreground mb-2">
                      These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site.
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Google Analytics cookies</li>
                      <li>Page view tracking</li>
                      <li>User behavior analysis</li>
                      <li>Performance monitoring</li>
                    </ul>
                  </div>
    
                  <div>
                    <h3 className="font-semibold mb-2 flex items-center gap-2">
                      <Settings className="w-4 h-4" />
                      Functional Cookies
                    </h3>
                    <p className="text-muted-foreground mb-2">
                      These cookies enable the website to provide enhanced functionality and personalization based on your interactions.
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Language preferences</li>
                      <li>Theme settings (dark/light mode)</li>
                      <li>Form data retention</li>
                      <li>User interface preferences</li>
                    </ul>
                  </div>
    
                  <div>
                    <h3 className="font-semibold mb-2 flex items-center gap-2">
                      <Target className="w-4 h-4" />
                      Marketing Cookies
                    </h3>
                    <p className="text-muted-foreground mb-2">
                      These cookies may be set through our site by our advertising partners to build a profile of your interests.
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Advertising targeting cookies</li>
                      <li>Social media integration</li>
                      <li>Conversion tracking</li>
                      <li>Retargeting pixels</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
    
              {/* Third-Party Cookies */}
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Third-Party Cookies</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    We may use third-party services that place cookies on your device. These include:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li><strong>Google Analytics:</strong> For website analytics and performance monitoring</li>
                    <li><strong>Google Fonts:</strong> For web font delivery and optimization</li>
                    <li><strong>LinkedIn:</strong> For professional networking and recruitment features</li>
                    <li><strong>HubSpot:</strong> For customer relationship management and marketing automation</li>
                    <li><strong>Cloudflare:</strong> For security, performance, and content delivery</li>
                  </ul>
                  <p className="text-muted-foreground mt-4">
                    These third parties have their own privacy policies and cookie policies, which we encourage you to review.
                  </p>
                </CardContent>
              </Card>
    
              {/* Managing Cookies */}
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Settings className="w-5 h-5" />
                    Managing Your Cookie Preferences
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Browser Settings</h3>
                    <p className="text-muted-foreground mb-2">
                      You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed.
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Chrome: Settings → Privacy and security → Cookies and other site data</li>
                      <li>Firefox: Settings → Privacy & Security → Cookies and Site Data</li>
                      <li>Safari: Preferences → Privacy → Manage Website Data</li>
                      <li>Edge: Settings → Cookies and site permissions → Cookies and site data</li>
                    </ul>
                  </div>
    
                  <div>
                    <h3 className="font-semibold mb-2">Cookie Consent</h3>
                    <p className="text-muted-foreground">
                      When you first visit our website, you'll see a cookie consent banner where you can choose which types of cookies to accept. You can change your preferences at any time by clicking the "Cookie Settings" link in our footer.
                    </p>
                  </div>
    
                  <div>
                    <h3 className="font-semibold mb-2">Opt-Out Links</h3>
                    <p className="text-muted-foreground mb-2">
                      You can opt out of certain third-party cookies:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Google Analytics: <a href="https://tools.google.com/dlpage/gaoptout" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out</a></li>
                      <li>LinkedIn: <a href="https://www.linkedin.com/psettings/guest-controls" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">LinkedIn Ad Preferences</a></li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
    
              {/* Data Retention */}
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Cookie Data Retention</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Different types of cookies have different retention periods:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li><strong>Session Cookies:</strong> Deleted when you close your browser</li>
                    <li><strong>Essential Cookies:</strong> Retained for up to 1 year</li>
                    <li><strong>Analytics Cookies:</strong> Retained for up to 2 years</li>
                    <li><strong>Marketing Cookies:</strong> Retained for up to 1 year</li>
                    <li><strong>Functional Cookies:</strong> Retained for up to 1 year</li>
                  </ul>
                </CardContent>
              </Card>
    
              {/* Contact Information */}
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Contact Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    If you have any questions about our use of cookies or this Cookie Policy, please contact us at:
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
          title="Questions About Our Cookie Policy?"
          description="If you have any questions about how we use cookies or need clarification on our privacy practices, we're here to help."
          primaryButtonText="Contact Us"
          primaryButtonHref="/contact"
          secondaryButtonText="View Privacy Policy"
          secondaryButtonHref="/policy/privacy"
          backgroundVariant="muted"
          className="py-20"
        />
      </div>
    </>
  );
}