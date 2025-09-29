"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CTASection } from "@/components/ui/cta-section";
import { 
  Shield, 
  Eye, 
  CheckCircle, 
  ArrowRight,
  Clock,
  Users,
  AlertTriangle,
  TrendingUp,
  Award,
  Zap,
  Lock,
  Globe,
  Database,
  Server,
  Monitor,
  Activity,
  FileCheck,
  Settings
} from "lucide-react";


export default function ManagedSecurityPage() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const features = [
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Preparation and Planning",
      description: "Establish investigation protocols, legal frameworks, and evidence handling procedures before incidents occur."
    },
    {
      icon: <AlertTriangle className="h-8 w-8" />,
      title: "Identification and Containment",
      description: "Quickly identify the scope of the cybercrime and contain the threat to prevent further damage."
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Evidence Collection and Preservation",
      description: "Collect and preserve digital evidence using forensically sound methods to maintain legal admissibility."
    },
    {
      icon: <Eye className="h-8 w-8" />,
      title: "Analysis and Attribution",
      description: "Analyze collected evidence to understand attack methods, identify perpetrators, and determine impact."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Remediation and Recovery",
      description: "Implement security measures to prevent future incidents and restore normal business operations."
    },
    {
      icon: <FileCheck className="h-8 w-8" />,
      title: "Reporting and Legal Support",
      description: "Provide detailed investigation reports and expert testimony to support legal proceedings."
    }
  ];

  const process = [
    {
      step: "01",
      title: "Preparation and Planning",
      description: "Establish investigation protocols, legal frameworks, and evidence handling procedures before incidents occur."
    },
    {
      step: "02", 
      title: "Identification and Containment",
      description: "Quickly identify the scope of the cybercrime and contain the threat to prevent further damage."
    },
    {
      step: "03",
      title: "Evidence Collection and Analysis",
      description: "Collect and preserve digital evidence using forensically sound methods, then analyze to understand attack methods."
    },
    {
      step: "04",
      title: "Remediation and Reporting",
      description: "Implement security measures to prevent future incidents and provide detailed investigation reports."
    }
  ];

  const benefits = [
    {
      icon: <Clock className="h-6 w-6" />,
      title: "24/7 Protection",
      description: "Round-the-clock security monitoring and incident response"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Expert Team",
      description: "Access to certified security professionals and specialists"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Scalable Solutions",
      description: "Security services that grow with your business needs"
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Cost Effective",
      description: "Reduce security costs while improving protection levels"
    }
  ];

  const stats = [
    { value: "24/7", label: "Monitoring Coverage" },
    { value: "99.9%", label: "Uptime Guarantee" },
    { value: "15min", label: "Response Time" },
    { value: "100%", label: "Threat Detection" }
  ];

  return (
    <>
      <div className="flex flex-col min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-background overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {/* Base gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-950/20 via-background to-emerald-950/20" />
          
          {/* Animated grid pattern */}
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px] animate-pulse" />
          
          {/* Floating particles */}
          <div className="absolute inset-0">
            {/* Large glowing orbs */}
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-green-500/20 rounded-full blur-2xl animate-pulse shadow-2xl shadow-green-500/10" />
            <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-emerald-500/20 rounded-full blur-2xl animate-pulse delay-1000 shadow-2xl shadow-emerald-500/10" />
            <div className="absolute top-1/2 right-1/3 w-20 h-20 bg-green-400/20 rounded-full blur-xl animate-pulse delay-500 shadow-2xl shadow-green-400/10" />
            
            {/* Medium particles */}
            <div className="absolute top-1/5 left-3/4 w-6 h-6 bg-green-400/50 rounded-full blur-sm animate-bounce delay-200 shadow-lg shadow-green-400/20" />
            <div className="absolute top-3/5 left-1/8 w-4 h-4 bg-emerald-400/50 rounded-full blur-sm animate-bounce delay-800 shadow-lg shadow-emerald-400/20" />
            <div className="absolute bottom-1/5 right-1/8 w-8 h-8 bg-green-300/50 rounded-full blur-sm animate-bounce delay-1400 shadow-lg shadow-green-300/20" />
            
            {/* Small floating particles */}
            <div className="absolute top-1/3 left-1/2 w-3 h-3 bg-green-400/60 rounded-full animate-bounce delay-300 shadow-md shadow-green-400/30" />
            <div className="absolute top-2/3 left-1/5 w-2 h-2 bg-emerald-400/60 rounded-full animate-bounce delay-700 shadow-md shadow-emerald-400/30" />
            <div className="absolute top-1/5 right-1/5 w-2 h-2 bg-green-300/60 rounded-full animate-bounce delay-1200 shadow-md shadow-green-300/30" />
            
            {/* Bright sparkle particles */}
            <div className="absolute top-1/4 left-3/5 w-1 h-1 bg-white rounded-full animate-ping delay-100 shadow-lg shadow-white/50" />
            <div className="absolute top-3/4 left-2/5 w-1 h-1 bg-white rounded-full animate-ping delay-1000 shadow-lg shadow-white/50" />
            <div className="absolute top-1/2 left-4/5 w-1 h-1 bg-white rounded-full animate-ping delay-1500 shadow-lg shadow-white/50" />
          </div>
          
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/60" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Badge */}
            <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-medium">
              <Shield className="w-4 h-4 mr-2" />
              Managed Security Services 🛡️
            </Badge>

            {/* Main Heading */}
            <h1 className="font-bold tracking-tight text-3xl sm:text-4xl lg:text-5xl mb-6">
              <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-green-500 bg-clip-text text-transparent">
                Managed Security
              </span>
              <br />
              <span className="text-foreground">
                Operations
              </span>
            </h1>
            
            {/* Subtitle */}
            <p className="mx-auto max-w-3xl text-lg sm:text-xl text-muted-foreground mb-8">
              Comprehensive managed security services with 24/7 monitoring, threat detection, and expert incident response.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                Start Security Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-3 rounded-lg font-semibold border-green-500/20 hover:border-green-500/40 hover:bg-green-500/5 transition-all duration-300">
                View Service Plans
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Metrics Section */}
      <section className="relative py-16 bg-gradient-to-r from-green-950/10 via-background to-emerald-950/10 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px] animate-pulse" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background" />
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-green-500/20 rounded-full blur-xl animate-pulse shadow-lg shadow-green-500/10" />
          <div className="absolute top-3/4 right-1/4 w-12 h-12 bg-emerald-500/20 rounded-full blur-xl animate-pulse delay-1000 shadow-lg shadow-emerald-500/10" />
          <div className="absolute top-1/2 right-1/3 w-8 h-8 bg-green-400/30 rounded-full blur-sm animate-bounce delay-500" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Service Metrics
              </span>
            </h2>
            <p className="text-muted-foreground">Managed security performance indicators</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="group relative p-6 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border border-green-500/20 hover:border-emerald-500/40 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105">
                {/* Animated background glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Content */}
                <div className="relative text-center space-y-3">
                  {/* Icon based on index */}
                  <div className="inline-flex items-center justify-center w-12 h-12 mb-2 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl group-hover:from-green-500/30 group-hover:to-emerald-500/30 transition-all duration-300">
                    {index === 0 && <Monitor className="w-6 h-6 text-green-400" />}
                    {index === 1 && <TrendingUp className="w-6 h-6 text-emerald-400" />}
                    {index === 2 && <Clock className="w-6 h-6 text-green-400" />}
                    {index === 3 && <Shield className="w-6 h-6 text-emerald-400" />}
                  </div>
                  
                  {/* Value */}
                  <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                    {stat.value}
                  </div>
                  
                  {/* Label */}
                  <div className="text-sm text-muted-foreground font-medium group-hover:text-foreground transition-colors duration-300">
                    {stat.label}
                  </div>
                  
                  {/* Progress indicator */}
                  <div className="w-full bg-muted/30 rounded-full h-1 mt-3">
                    <div 
                      className="bg-gradient-to-r from-green-400 to-emerald-400 h-1 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${85 + index * 4}%` }}
                    />
                  </div>
                </div>
                
                {/* Floating accent */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-green-500/30 to-emerald-500/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Comprehensive Security Services
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Complete managed security operations designed to protect your organization around the clock.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-green-500/20 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-green-500/10 to-emerald-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-green-400 group-hover:text-emerald-400 transition-colors duration-300">
                      {feature.icon}
                    </div>
                  </div>
                  <CardTitle className="text-xl font-semibold group-hover:text-green-400 transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-background/50 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Our Service Process
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A systematic approach to implementing and managing your security operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-primary/80 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-primary/20">
                  <span className="text-primary-foreground font-bold text-lg">{step.step}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Why Choose Managed Security
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience the benefits of professional managed security operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-green-500/10 to-emerald-500/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-green-400 group-hover:text-emerald-400 transition-colors duration-300">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-green-400 transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection 
        title="Ready for Managed Security?"
        description="Get started with comprehensive managed security services and protect your organization 24/7."
        primaryButtonText="Schedule Consultation"
        secondaryButtonText="Contact Expert"
        secondaryButtonHref="/contact"
        className="py-20"
      />
    </div>
    </>
  );
}