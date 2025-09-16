"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Shield, 
  Target, 
  CheckCircle, 
  ArrowRight,
  Users,
  FileText,
  TrendingUp,
  Award,
  Clock,
  Zap,
  Eye,
  Lock,
  Globe,
  Database,
  Server,
  Lightbulb,
  BarChart3,
  Settings,
  BookOpen
} from "lucide-react";

export default function SecurityConsultingPage() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const features = [
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Risk Assessment and Analysis",
      description: "Identify and evaluate security risks, threats, and vulnerabilities specific to your organization and industry."
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Strategy Development",
      description: "Create comprehensive cybersecurity strategies aligned with business objectives and regulatory requirements."
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Implementation Support",
      description: "Assist with deploying security technologies, processes, and controls to strengthen your security posture."
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "Compliance and Governance",
      description: "Ensure adherence to industry standards like ISO 27001, NIST, PCI-DSS, HIPAA, and GDPR."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Incident Response Planning",
      description: "Develop and test incident response plans to minimize damage and recovery time from security breaches."
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Training and Awareness",
      description: "Provide security awareness training to employees and build a security-conscious organizational culture."
    }
  ];

  const process = [
    {
      step: "01",
      title: "Risk Assessment and Analysis",
      description: "Identify and evaluate security risks, threats, and vulnerabilities specific to your organization and industry."
    },
    {
      step: "02",
      title: "Strategy Development",
      description: "Create comprehensive cybersecurity strategies aligned with business objectives and regulatory requirements."
    },
    {
      step: "03",
      title: "Implementation Support",
      description: "Assist with deploying security technologies, processes, and controls to strengthen your security posture."
    },
    {
      step: "04",
      title: "Training and Governance",
      description: "Provide security awareness training and ensure compliance with industry standards and regulations."
    }
  ];

  const benefits = [
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Expert Guidance",
      description: "Access to seasoned security professionals and industry expertise"
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Strategic Approach",
      description: "Comprehensive security strategies aligned with business goals"
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Proven Results",
      description: "Track record of successful security transformations"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Efficient Implementation",
      description: "Streamlined processes to accelerate security improvements"
    }
  ];

  const stats = [
    { value: "200+", label: "Organizations Advised" },
    { value: "95%", label: "Compliance Success Rate" },
    { value: "60%", label: "Average Risk Reduction" },
    { value: "30+", label: "Industry Frameworks" }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-background overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {/* Base gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-950/20 via-background to-pink-950/20" />
          
          {/* Animated grid pattern */}
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px] animate-pulse" />
          
          {/* Floating particles */}
          <div className="absolute inset-0">
            {/* Large glowing orbs */}
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl animate-pulse shadow-2xl shadow-purple-500/10" />
            <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-pink-500/20 rounded-full blur-2xl animate-pulse delay-1000 shadow-2xl shadow-pink-500/10" />
            <div className="absolute top-1/2 right-1/3 w-20 h-20 bg-purple-400/20 rounded-full blur-xl animate-pulse delay-500 shadow-2xl shadow-purple-400/10" />
            
            {/* Medium particles */}
            <div className="absolute top-1/5 left-3/4 w-6 h-6 bg-purple-400/50 rounded-full blur-sm animate-bounce delay-200 shadow-lg shadow-purple-400/20" />
            <div className="absolute top-3/5 left-1/8 w-4 h-4 bg-pink-400/50 rounded-full blur-sm animate-bounce delay-800 shadow-lg shadow-pink-400/20" />
            <div className="absolute bottom-1/5 right-1/8 w-8 h-8 bg-purple-300/50 rounded-full blur-sm animate-bounce delay-1400 shadow-lg shadow-purple-300/20" />
            
            {/* Small floating particles */}
            <div className="absolute top-1/3 left-1/2 w-3 h-3 bg-purple-400/60 rounded-full animate-bounce delay-300 shadow-md shadow-purple-400/30" />
            <div className="absolute top-2/3 left-1/5 w-2 h-2 bg-pink-400/60 rounded-full animate-bounce delay-700 shadow-md shadow-pink-400/30" />
            <div className="absolute top-1/5 right-1/5 w-2 h-2 bg-purple-300/60 rounded-full animate-bounce delay-1200 shadow-md shadow-purple-300/30" />
            
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
              <Target className="w-4 h-4 mr-2" />
              Security Consulting Services 🎯
            </Badge>

            {/* Main Heading */}
            <h1 className="font-bold tracking-tight text-3xl sm:text-4xl lg:text-5xl mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-500 bg-clip-text text-transparent">
                Security Consulting
              </span>
              <br />
              <span className="text-foreground">
                & Strategy
              </span>
            </h1>
            
            {/* Subtitle */}
            <p className="mx-auto max-w-3xl text-lg sm:text-xl text-muted-foreground mb-8">
              Expert security consulting services to develop comprehensive strategies, assess risks, and implement robust security frameworks.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                Schedule Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-3 rounded-lg font-semibold border-purple-500/20 hover:border-purple-500/40 hover:bg-purple-500/5 transition-all duration-300">
                View Our Approach
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background/50 backdrop-blur-sm border-y border-border/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Comprehensive Consulting Services
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Strategic security consulting to transform your organization's security posture.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-purple-500/20 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500/10 to-pink-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-purple-400 group-hover:text-pink-400 transition-colors duration-300">
                      {feature.icon}
                    </div>
                  </div>
                  <CardTitle className="text-xl font-semibold group-hover:text-purple-400 transition-colors duration-300">
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
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Our Consulting Process
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A systematic approach to developing and implementing your security strategy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-purple-500/20">
                  <span className="text-white font-bold text-lg">{step.step}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-purple-400 transition-colors duration-300">
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
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Why Choose Our Consulting
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience the benefits of strategic security consulting and expert guidance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500/10 to-pink-500/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-purple-400 group-hover:text-pink-400 transition-colors duration-300">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-purple-400 transition-colors duration-300">
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
      <section className="py-20 bg-gradient-to-r from-purple-950/20 via-background to-pink-950/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Ready to Transform Your Security?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get expert security consulting to develop a comprehensive strategy and strengthen your security posture.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
              Start Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3 rounded-lg font-semibold border-purple-500/20 hover:border-purple-500/40 hover:bg-purple-500/5 transition-all duration-300">
              Contact Expert
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}